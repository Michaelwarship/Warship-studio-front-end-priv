'use client'

import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText)

export { gsap, ScrollTrigger, SplitText }
