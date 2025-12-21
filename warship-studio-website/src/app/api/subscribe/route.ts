export async function POST(req: Request) {
    const { email } = await req.json()

    if (!email) {
        return Response.json({ error: 'Email required' }, { status: 400 })
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
            email,
            listIds: [2], // ← replace with YOUR list ID
            updateEnabled: true,
        }),
    })

    if (!response.ok) {
        const text = await response.text()
        return Response.json({ error: text }, { status: 500 })
    }

    return Response.json({ success: true })
}
