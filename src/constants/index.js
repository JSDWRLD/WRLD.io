import { meta, shopify, starbucks, tesla, reve, eunity, csus } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    firebase,
    blender,
    azure,
    aws,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    unity,
    c,
    cplus,
    android,
    python,
    sql,
    kotlin,
    go,
    dotnet,
    csharp,
    java,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Backend/Frontend",
    },
    {
        imageUrl: csharp,
        name: "csharp",
        type: "Backend",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
    {
        imageUrl: android,
        name: "Android",
        type: "IDE",
    },
    {
        imageUrl: unity,
        name: "Unity",
        type: "Game Engine",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "3D Modeling",
    },
    {
        imageUrl: c,
        name: "C",
        type: "backend",
    },
    {
        imageUrl: cplus,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: go,
        name: "Go",
        type: "Backend/Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: azure,
        name: "Azure",
        type: "Cloud",
    },
    {
        imageUrl: aws,
        name: "Amazon Web Services",
        type: "Cloud",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
 
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "Software Engineer Intern",
        company_name: "Revecorp, Inc.",
        icon: reve,
        iconBg: "#dde6ff",
        date: "June 2024 - Present",
        points: [
            "Developed a Kotlin library to interface with SOAP Web Service APIs, enabling the automation of snapshot processing and RTSP stream capturing, streamlining video management tasks.",
            "Utilized Kotlin coroutines to manage asynchronous tasks for capturing frames from RTSP streams, preventing main thread backups and enhancing application responsiveness.",
            "Replaced VLC library with a custom ExoPlayer implementation for handling video feeds from 8 cameras, reducing memory leaks by 60% and boosting video processing speed by 50%.",
            "Optimized the codebase by implementing MVVM architecture, increasing app performance, improving maintainability, and reducing reported bugs and technical debt by 40%.",
        ],
    },
    {
        title: "Computer Science Instructional Student Assistant",
        company_name: "California State University Sacramento",
        icon: csus,
        iconBg: "#f7ffd5",
        date: "August 2024 - January 2025",
        points: [
            "Managed and organized multiple computer science courses on Canvas, providing a seamless digital learning experience for over 200 students, and maintaining a 85% overall course average across sections.",
            "Collaborated with professors to design and develop course materials, ensuring alignment with current educational standards and programming best practices.",
            "Provided technical support to students, troubleshooting coding issues and enhancing problem-solving skills, which led to improved exam performance.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "eUnity (Startup)",
        icon: eunity,
        iconBg: "#accbe1",
        date: "April 2024 - July 2024",
        points: [
            "Collaborate with a team of developers to design and integrate REST APIs using Go, enhancing data interaction capabilities with MongoDB and incorporating third-party user authentication with platforms like Google.",
            "Managed version control with Git, which ensured code consistency and improved project tracking.",
            "Ensured seamless intergration between backend and Flutter frontend.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/JSDWRLD',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jsdwrld',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'RetroReplay',
        description: 'Project Bravo is a single-page e-commerce application built with React, Node.js, Express, and MongoDB. It features a product gallery, individual product pages, shopping cart, checkout system with PayPal and gift card payments, user authentication, and an administrative dashboard for managing products, orders, and users.',
        link: 'https://github.com/JSDWRLD/project_bravo',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'SafeGuard AI',
        description: 'Welcome to SafeGuard AI, an award-winning software solution that addresses a critical issue in today\'s society: firearm detection in real-time using computer vision. Our solution integrates seamlessly with existing camera systems to provide a 1ms response time for detecting firearms, ensuring immediate alerts and reactions to safeguard lives.',
        link: 'https://github.com/JSDWRLD/SafeGuard-AI',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-yellow',
        name: 'LuckyLedger',
        description: 'A decentralized lottery application built on Ethereum using Solidity, Javascript, Tailwind CSS, and Web3.js. Users can enter a lottery by purchasing tickets, and a random winner is drawn once the raffle ends.',
        link: 'https://github.com/JSDWRLD/luckyledgerI',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-yellow',
        name: 'InvoiceIQ',
        description: 'An invoice tracker built using Vue 3, Vuex for state management, and Firebase for the backend. It allows users to manage their invoices efficiently.',
        link: 'https://github.com/JSDWRLD/InvoiceIQ',
    },
];