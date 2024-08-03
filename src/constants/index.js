import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tuneup,
    threejs,
    medinbox,
    epitech,
    microsoft,
    arcys,
    elyade
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    // {
    //     id: "cv",
    //     title: "CV",
    // }
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "DevOps Engineer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Cybersecurity Specialist",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        type_show: true,
    },
    {
        name: "CSS 3",
        icon: css,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        type_show: true,
    },
    {
        name: "JavaScript",
        icon: javascript,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        type_show: true,
    },
    {
        name: "TypeScript",
        icon: typescript,
        link: "https://www.typescriptlang.org/",
        type_show: true,
    },
    {
        name: "React JS",
        icon: reactjs,
        link: "https://reactjs.org/",
        type_show: true,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
        link: "https://tailwindcss.com/",
        type_show: true,
    },
    {
        name: "Node JS",
        icon: nodejs,
        link: "https://nodejs.org/en/",
        type_show: true,
    },
    {
        name: "MongoDB",
        icon: mongodb,
        link: "https://www.mongodb.com/",
        type_show: true,
    },
    {
        name: "Three JS",
        icon: threejs,
        link: "https://threejs.org/",
        type_show: true,
    },
    {
        name: "git",
        icon: git,
        link: "https://git-scm.com/",
    },
    {
        name: "figma",
        icon: figma,
        link: "https://www.figma.com/",
    },
    {
        name: "docker",
        icon: docker,
        link: "https://www.docker.com/",
        type_show: true,
    },
];

const experiences = [
    {
        title: "Intern",
        company_name: "MEDINBOX",
        icon: medinbox,
        iconBg: "#E6DEDD",
        date: "Apr 2023 - Aug 2023",
        points: [
            "Worked on AI projects like chatbot and video transcription application using React and Docker.",
        ],
    },
    {
        title: "Intern",
        company_name: "AER Epitech Toulouse",
        icon: epitech,
        iconBg: "#383E56",
        date: "Feb 2022 - Mar 2023",
        points: [
            "Pedagogical assistant and coach, handled lower year batches.",
        ],
    },
    {
        title: "Hackathon Winner",
        company_name: "Microsoft Ready Developer One",
        icon: microsoft,
        iconBg: "#E6DEDD",
        date: "May 2022",
        points: [
            "Developed an augmented reality solution on HoloLens 2.",
        ],
    },
    {
        title: "Intern",
        company_name: "ARCYS",
        icon: arcys,
        iconBg: "#E6DEDD",
        date: "Jul 2021 - Dec 2021",
        points: [
            "Developed a database compliance tool, network diode testing tool, and Excel macros for accounting.",
        ],
    },
    {
        title: "Temporary Contract",
        company_name: "Elyade Gérance",
        icon: elyade,
        iconBg: "#383E56",
        date: "Mar 2020",
        points: [
            "Assisted in setting up remote work for 103 employees during COVID-19 lockdown.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Tune'Up",
        description:
            "Web-based platform that allows users to support their favorite musicians in exchange of exclusive advantages.",
        tags: [
            {
                name: "angular",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: tuneup,
        source_code_link: "https://github.com/TuneUp-Music/",
        link: "https://tuneup-music.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
