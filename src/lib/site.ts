export const siteConfig = {
  name: "Guidana",
  legalName: "Guidana Technologies LLC",
  tagline: "Professional Development Solutions",
  description:
    "Build innovative mobile and web applications that drive growth and create meaningful user engagement. Guidana delivers iOS, Android, web, backend, marketing, and UI/UX solutions from Wyoming, USA.",
  url: "https://www.guidana.online",
  email: "ceo@guidana.online",
  phone: "+92 304 6802911",
  phoneHref: "tel:+923046802911",
  location: "Wyoming, USA",
  businessType: "Software Development",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL!,
  founder: {
    name: "Waqas Mahmood",
    role: "Founder & CEO",
    bio: "Visionary leader with extensive experience in software development and business strategy. Passionate about building innovative products that solve real-world problems and create lasting impact.",
    detail:
      "With over a decade of expertise in full-stack development, Waqas leads Guidana with a commitment to excellence, innovation, and delivering solutions that exceed client expectations.",
  },
  team: [
    {
      name: "Aqsa Ijaz",
      role: "Senior HR Manager",
      image: "/team-photos/aqsa.png"
    },
    {
      name: "Muhammad Osama",
      role: "MERN Stack Developer",
      image: "/team-photos/osama.png",
    },

    {
      name: "Muhammad Soban",
      role: "Flutter Developer",
      image: "/team-photos/soban.jpeg",
    },
    {
      name: "Fatima Amjad",
      role: "MERN Intern",
      image: "/team-photos/fatima.jpeg",
    },
    {
      name: "Zaheer Aman",
      role: "UI/UX Designer",
      image: "/team-photos/zaheer.jpeg",
    },
    {
      name: "Abida Parveen",
      role: "QA Engineer",
      image: "/team-photos/women-placeholder.avif",
    }

  ],
  stats: [
    { value: "50+", label: "Projects Completed" },
    { value: "100k+", label: "Active Users" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24h", label: "Response Time" },
  ],
  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
} as const;

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "ios-development",
    title: "iOS Development",
    short:
      "Native iOS applications built with Swift, delivering premium user experiences optimized for Apple devices.",
    description:
      "We design and ship native iOS apps with Swift that feel fast, polished, and reliable on every Apple device. From MVP to App Store release, we own architecture, UI, performance, and ongoing maintenance.",
    highlights: [
      "Swift & SwiftUI native apps",
      "App Store submission & compliance",
      "Performance-focused architecture",
      "Ongoing maintenance & updates",
    ],
  },
  {
    slug: "android-development",
    title: "Android Development",
    short:
      "Native Android applications built with Kotlin, delivering smooth experiences across phones, tablets, and the Play Store.",
    description:
      "We build native Android apps with Kotlin that perform well across devices and Android versions. From MVP to Google Play launch, we handle architecture, UI, testing, store compliance, and ongoing releases.",
    highlights: [
      "Kotlin & modern Android architecture",
      "Google Play submission & compliance",
      "Material Design–aligned UX",
      "Ongoing maintenance & updates",
    ],
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    short:
      "Modern, responsive web applications using latest technologies and best practices for optimal performance.",
    description:
      "We build responsive web applications that load quickly, convert visitors, and scale with your business. Our stack favors proven frameworks, clean architecture, and SEO-friendly delivery.",
    highlights: [
      "Next.js & modern React stacks",
      "Responsive, accessible interfaces",
      "SEO-ready page structure",
      "Performance & Core Web Vitals focus",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short:
      "Growth-focused marketing that turns attention into leads — SEO, paid media, content, and conversion strategy.",
    description:
      "We help products get found and convert. From technical SEO and content strategy to paid campaigns and conversion optimization, marketing is tied to the product journey — not treated as a separate vendor handoff.",
    highlights: [
      "Technical SEO & content strategy",
      "Paid media & retargeting",
      "Website conversion optimization",
      "Marketing analytics & reporting",
    ],
  },
  {
    slug: "backend-solutions",
    title: "Backend Solutions",
    short:
      "Scalable and secure backend infrastructure designed for reliability and high availability.",
    description:
      "Our backend systems are built for reliability under real traffic — APIs, databases, auth, and cloud infrastructure that stay stable as you grow.",
    highlights: [
      "REST & GraphQL APIs",
      "Cloud-native deployment",
      "Secure authentication & access",
      "Monitoring and high availability",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short:
      "Beautiful and intuitive user interfaces crafted to engage users and enhance digital experiences.",
    description:
      "We craft interfaces that guide users to action — clear flows, thoughtful hierarchy, and visual systems that feel premium without getting in the way.",
    highlights: [
      "User research & journey mapping",
      "Wireframes and interactive prototypes",
      "Design systems & component libraries",
      "Conversion-focused interface design",
    ],
  },
  {
    slug: "security",
    title: "Security",
    short:
      "Enterprise-grade security measures protecting user data and ensuring compliance with industry standards.",
    description:
      "Security is built into delivery — not bolted on later. We protect user data, harden applications, and help you meet industry compliance expectations.",
    highlights: [
      "Secure coding practices",
      "Data protection & encryption",
      "Access control & audit readiness",
      "Vulnerability review & hardening",
    ],
  },
  {
    slug: "analytics-support",
    title: "Analytics & Support",
    short:
      "Comprehensive analytics, monitoring, and 24/7 technical support for all our applications.",
    description:
      "After launch we stay with you — analytics that show what users do, monitoring that catches issues early, and support that keeps products running smoothly.",
    highlights: [
      "Product analytics & reporting",
      "Application monitoring",
      "Ongoing technical support",
      "Iteration based on real usage",
    ],
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Understand",
    description:
      "We begin by getting to know your business, goals, and audience to create a strategic plan that fits your needs perfectly.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Our creative team crafts beautiful, user-focused designs that help visitors engage and find what they need.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "We build fast, secure, and scalable applications using the latest technologies and best practices.",
  },
  {
    step: "04",
    title: "Support",
    description:
      "After launch, we provide ongoing maintenance, monitoring, and support to ensure everything runs smoothly.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Guidana delivered an outstanding iOS app that exceeded our expectations. Their team is professional, responsive, and truly understands mobile development. Highly recommended!",
    name: "Ahmed Khan",
    role: "Product Lead",
  },
  {
    quote:
      "Working with Guidana was a game-changer for our business. They built a scalable backend that handles millions of users effortlessly. Great team, great results!",
    name: "Sarah Ali",
    role: "Founder",
  },
  {
    quote:
      "The UI/UX design and web application Guidana created for us has significantly improved user engagement and satisfaction. Professional work from start to finish!",
    name: "Muhammad Hassan",
    role: "Operations Director",
  },
] as const;

export const faqs = [
  {
    question: "What industries do you work with?",
    answer:
      "We partner with startups, SaaS platforms, eCommerce brands, healthcare, education, fintech, and growing product teams. If you need strong UX and reliable engineering, we can help.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. MVPs often ship in weeks; larger platforms take longer. After discovery we give a clear plan with milestones before development begins.",
  },
  {
    question: "Can I hire Guidana for design or development only?",
    answer:
      "Yes. You can engage us for UI/UX, iOS, Android, frontend, backend, marketing, or full product delivery. We scope exactly what you need — no forced bundle.",
  },
  {
    question: "Do you offer marketing after launch?",
    answer:
      "Yes. We offer digital marketing alongside product work — SEO, paid media, content, and conversion optimization — so growth and engineering stay aligned.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Absolutely. We provide monitoring, maintenance, analytics, and ongoing support so your product keeps performing after go-live.",
  },
  {
    question: "Will I own the final design and code?",
    answer:
      "Yes. You own the code, accounts, infrastructure, and documentation from day one. Staying with us is a choice, not a lock-in.",
  },
] as const;

export const technologies = {
  "Languages & frameworks": [
    "TypeScript",
    "React",
    "Next.js",
    "Swift",
    "Kotlin",
    "Node.js",
    "Python",
  ],
  "Data & storage": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Amazon S3"],
  "Cloud & infrastructure": ["AWS", "Docker", "Vercel", "GitHub Actions"],
  "Quality & observability": ["Sentry", "Playwright", "Lighthouse", "PostHog"],
} as const;
