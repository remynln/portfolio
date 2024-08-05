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
    elyade,
    chungang,
    lycee,
    close,
    c,
    cpp,
    csharp,
    angular,
    jenkins,
    linux,
    whanos,
    portfolio,
    vinted,
    area
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
    {
        id: "socials",
        title: "Socials",
    },
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
        name: "C",
        icon: c,
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
        type_show: true,
    },
    {
        name: "C++",
        icon: cpp,
        link: "https://isocpp.org/",
        type_show: true,
    },
    {
        name: "C#",
        icon: csharp,
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        type_show: true,
    },
    {
        name: "HTML",
        icon: html,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        type_show: true,
    },
    {
        name: "CSS",
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
        name: "Angular",
        icon: angular,
        link: "https://angular.dev/",
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
        type_show: false,
    },
    {
        name: "Three JS",
        icon: threejs,
        link: "https://threejs.org/",
        type_show: true,
    },
    {
        name: "Git",
        icon: git,
        link: "https://git-scm.com/",
        type_show: false,

    },
    {
        name: "Figma",
        icon: figma,
        link: "https://www.figma.com/",
        type_show: false,
    },
    {
        name: "Docker",
        icon: docker,
        link: "https://www.docker.com/",
        type_show: true,
    },
    {
        name: "Jenkins",
        icon: jenkins,
        link: "https://www.jenkins.io/",
        type_show: true,
    },
    {
        name: "Linux/Unix",
        icon: linux,
        link: "https://www.linux.org/",
        type_show: false,
    },
];

const experiences = [
    {
        title: "Student",
        company_name: '<a href="https://epitech.eu/" target="__blank" style="color:#915eff;">Epitech</a>',
        icon: epitech,
        iconBg: "#E6DEDD",
        date: "2020-2025",
        points: [
            "Studying computer science"
        ],
    },
    {
        title: "Exchange Student",
        company_name: '<a href="https://neweng.cau.ac.kr/index.do" target="__blank" style="color:#915eff;">Chung Ang University</a>',
        icon: chungang,
        iconBg: "#E6DEDD",
        date: "Sept 2023 - Jun 2024",
        points: [
            "Studying computer science and Korean society as an exchange student.",
            "Travelled around asia to learn about different cultures.",
        ],
    },
    {
        title: "Intern",
        company_name: '<a href="https://www.medinbox.com/" target="__blank" style="color:#915eff;">MEDINBOX</a>',
        icon: medinbox,
        iconBg: "#E6DEDD",
        date: "Apr 2023 - Aug 2023",
        points: [
            "Web Transcribe project: Developed with React for its stability and familiarity, leverages OpenAI's REST API to provide an intuitive video interface for users to interact with AI. The system stores contextual information and user interactions to generate relevant AI responses and maintain natural conversations.",
            "Voice Recon Exploitation: This project consists of a server (ASP .NET in C#), a client (Angular framework), and a database (MongoDB). The server handles client requests to process videos, transcribe text, and extract metadata, while the client provides a user-friendly interface to upload videos and select metadata options, with the database managing the necessary data operations."
        ],
    },
    {
        title: "Volunteering",
        // company_name: '<a href="https://www.medinbox.com/" target="__blank" style="color:#915eff;">MEDINBOX</a>',
        icon: close,
        iconBg: "#E6DEDD",
        date: "May 2023",
        points: [
            "Development of a photobooth application for an aeronautics company for the <a href='https://www.siae.fr/' target='__blank' style='color:#915eff;'>Paris Air Show</a> 2023"
        ],
    },
    {
        title: "Intern",
        company_name: 'AER <a href="https://www.epitech.eu/" target="__blank" style="color:#915eff;">Epitech</a> Toulouse',
        icon: epitech,
        iconBg: "#E6DEDD",
        date: "Feb 2022 - Mar 2023",
        points: [
            "Pedagogical assistant and coach, handled lower year batches.",
            'Teaching and Coaching training (<a href="https://drive.google.com/file/d/1GTxr2gz-6_wCFkja7a4BbXY6b-g9GFzm/view?usp=sharing" target="__blank" style="color:#915eff;">certificate</a>)'
        ],
    },
    {
        title: "Hackathon Winner",
        company_name: '<a href="https://www.microsoft.com/" target="__blank" style="color:#915eff;">Microsoft</a> Ready Developer One',
        icon: microsoft,
        iconBg: "#E6DEDD",
        date: "May 2022",
        points: [
            "Theme: accessibility",
            `Developed a solution on the <a href="https://www.microsoft.com/en-us/hololens/" target="__blank" style="color:#915eff;">Hololens 2</a> of an augmented reality game suitable for all audiences with hand tracking, eye tracking and voice recognition.`
        ],
    },
    {
        title: "Intern",
        company_name: '<a href="https://arcys.fr/" target="__blank" style="color:#915eff;">ARCYS</a>',
        icon: arcys,
        iconBg: "#E6DEDD",
        date: "Jul 2021 - Dec 2021",
        points: [
            "Context: Migrating from <a href='https://en.wikipedia.org/wiki/Baan_Corporation' target='__blank' style='color:#915eff;'>BAAN 4</a> to <a href='https://www.infor.com/solutions/erp/ln' target='__blank' style='color:#915eff;'>Infor LN</a> ERP system.",
            "Developped a tool to restructure postal address data for clients and suppliers to ensure compliance and usability ensuring seamless ERP integration.",
            "Developped a tool aimed to retrieve RIB keys from IBANs for compatibility with the new ERP system.",
            "Excel macro to automate recurring tasks on invoices not received (FNP)."
        ],
    },
    {
        title: "Temporary Contract",
        company_name: '<a href="https://www.elyade.com/" target="__blank" style="color:#915eff;">Elyade Gérance</a>',
        icon: elyade,
        iconBg: "#E6DEDD",
        date: "Mar 2020",
        points: [
            "Assisted in setting up remote work for 103 employees during COVID-19 lockdown.",
        ],
    },
    {
        title: "Bac technologique (STI2D)",
        company_name: '<a href="https://stephane-hessel.mon-ent-occitanie.fr/" target="__blank" style="color:#915eff;">Lycee Stephane Hessel</a>',
        icon: lycee,
        iconBg: "#383E56",
        date: "2019 - 2020",
        points: [
            "Mention Bien",
            "Specialized in digital systems and computer science.",
            "Participated in the creation of a connected greenhouse.",
            '<a href="https://www.cisco.com/" target="__blank" style="color:#915eff;">CISCO</a> Networking Essentials Training (<a href="https://drive.google.com/file/d/1saPQcHlz1gFN7Rw5q4ExpaQI5ZA_qsAs/view?usp=sharing" target="__blank" style="color:#915eff;">certificate</a>)'
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
            "Web-based platform that allows users to support their favorite artists in exchange of exclusive advantages.",
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
    {
        name: "Portfolio",
        description:
            "Personal portfolio website to showcase my work and skills.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
            {
                name: "Taylwind CSS",
                color: "pink-text-gradient",
            },
            {
                name: "Three JS",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/remynln/portfolio",
        link: "https://www.remynln.com/",
    },
    {
        name: "Whanos",
        description:
            "Automates application deployment using Docker, Jenkins, Ansible, and Kubernetes, allowing developers to deploy to a Kubernetes cluster with a simple Git push. It integrates containerization, task automation, configuration management, and orchestration.",
        tags: [
            {
                name: "docker",
                color: "orange-text-gradient",
            },
            {
                name: "Jenkins",
                color: "orange-text-gradient",
            },
            {
                name: "Ansible",
                color: "orange-text-gradient",
            },
            {
                name: "Kubernetes",
                color: "orange-text-gradient",
            },
            {
                name: "GoogleCloud",
                color: "orange-text-gradient",
            },
        ],
        image: whanos,
        source_code_link: "https://github.com/remynln/Whanos",
    },
    {
        name: "AREA",
        description:
            "AREA (Action-REAction) involves creating an automation platform like <a href='https://ifttt.com/' target='__blank' style='color:#915eff;'>IFTTT</a> or <a href='https://zapier.com/' target='__blank' style='color:#915eff;'>Zapier</a>, integrating various services to trigger actions based on predefined conditions. The project includes developing a REST API-based application server, a web client, and a mobile client, with the core functionality revolving around connecting and automating tasks across multiple services",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Flutter",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: area,
        source_code_link: "https://github.com/remynln/area",
    },
    {
        name: "Vinted Discord Bot",
        description:
            "Vinted Discord Bot to get the most recent items from the Vinted website using scrapping.",
        tags: [
            {
                name: "Node JS",
                color: "pink-text-gradient",
            },
            {
                name: "Discord API",
                color: "pink-text-gradient",
            },
            {
                name: "cloudscraper",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: vinted,
        source_code_link: "https://github.com/remynln/vinted_bot",
    },
];

const about_title = {
    title: "Overview.",
    subtitle: "INTRODUCTION",
    content: "I am Rémy Noulin, a 5th-year student at Epitech Toulouse, pursuing an expert degree in Information Technology. With a strong foundation in programming languages such as C, C++, Python, and JavaScript, I have honed my skills through various internships and projects. My experience spans across web development, DevOps, and cybersecurity, complemented by a successful stint at a Microsoft Hackathon where I developed an augmented reality solution. I have also engaged in international studies at Chung Ang University in Seoul, further broadening my technical and cultural perspective. My passion for technology drives me to continuously learn and contribute to innovative projects."
}

const experience_title = {
    title: "Work Experience.",
    subtitle: "WHAT I HAVE DONE SO FAR",
}

const work_title = {
    title: "Projects.",
    subtitle: "MY WORKS",
    content: "I have worked on a variety of projects, ranging from simple websites to complex web applications. Here are some of the projects I have worked on:"
}

const contact_title = {
    title: "Contact.",
    subtitle: "GET IN TOUCH",
    name: "What's your name?",
    name_placeholder: "Your name",
    email: "What's your email?",
    email_placeholder: "Your email",
    message: "What's your message?",
    message_placeholder: "Your message",
    send: "Send",
}

const socials_title = {
    title: "Socials.",
    subtitle: "MORE ABOUT ME",
}

const introduction_title = {
    title: "Hi, I'm",
    name: "Rémy",
    first: "I'm a",
    second: "developper"
}

export { services, technologies, experiences, testimonials, projects, about_title, experience_title, work_title, contact_title, socials_title, introduction_title };
