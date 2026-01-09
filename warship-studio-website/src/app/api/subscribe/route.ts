import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { email, firstName, lastName } = await req.json()
        console.log('Received request:', { email, firstName, lastName })

        if (!email) {
            return NextResponse.json(
                { error: 'Email required' },
                { status: 400 }
            )
        }

        const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
        const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID

        if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID) {
            console.error('Mailchimp not configured')
            return NextResponse.json(
                { error: 'Mailchimp not configured' },
                { status: 500 }
            )
        }

        const response = await fetch(
            `https://usX.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`, // replace usX with your datacenter if needed
            {
                method: 'POST',
                headers: {
                    Authorization: `apikey ${MAILCHIMP_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_address: email,
                    status: 'subscribed',
                    merge_fields: {
                        FNAME: firstName ?? '',
                        LNAME: lastName ?? '',
                    },
                }),
            }
        )

        const data = await response.json()
        console.log('Mailchimp response:', data)

        // Ignore "Member Exists" error
        if (!response.ok && data.title !== 'Member Exists') {
            return NextResponse.json(
                { error: data.detail || 'Subscription failed' },
                { status: response.status }
            )
        }

        return NextResponse.json({
            success: true,
            existed: data.title === 'Member Exists',
        })
    } catch (err) {
        console.error('Mailchimp API route error:', err)
        return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }
}
