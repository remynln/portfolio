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
        title: "À propos",
    },
    {
        id: "work",
        title: "Travail",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "socials",
        title: "Réseaux Sociaux",
    }
];

const services = [
    {
        title: "Développeur Web",
        icon: web,
    },
    {
        title: "Ingénieur DevOps",
        icon: mobile,
    },
    {
        title: "Développeur Backend",
        icon: backend,
    },
    {
        title: "Spécialiste en Cybersécurité",
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
        title: "Étudiant",
        company_name: '<a href="https://epitech.eu/" target="__blank" style="color:#915eff;">Epitech</a>',
        icon: epitech,
        iconBg: "#E6DEDD",
        date: "2020-2025",
        points: [
            "Études en informatique"
        ],
    },
    {
        title: "Étudiant en échange",
        company_name: '<a href="https://neweng.cau.ac.kr/index.do" target="__blank" style="color:#915eff;">Chung Ang University</a>',
        icon: chungang,
        iconBg: "#E6DEDD",
        date: "Sept 2023 - Juin 2024",
        points: [
            "Études en informatique et société coréenne en tant qu'étudiant d'échange.",
            "Voyagé en Asie pour découvrir différentes cultures.",
        ],
    },
    {
        title: "Stagiaire",
        company_name: '<a href="https://www.medinbox.com/" target="__blank" style="color:#915eff;">MEDINBOX</a>',
        icon: medinbox,
        iconBg: "#E6DEDD",
        date: "Avr 2023 - Août 2023",
        points: [
            "Projet Web Transcribe : Développé avec React pour sa stabilité et sa familiarité, utilise l'API REST d'OpenAI pour offrir une interface vidéo intuitive permettant aux utilisateurs d'interagir avec l'IA. Le système stocke les informations contextuelles et les interactions des utilisateurs pour générer des réponses pertinentes de l'IA et maintenir des conversations naturelles.",
            "Exploitation de la Reconnaissance Vocale : Ce projet comprend un serveur (ASP .NET en C#), un client (framework Angular) et une base de données (MongoDB). Le serveur gère les demandes des clients pour traiter les vidéos, transcrire le texte et extraire les métadonnées, tandis que le client fournit une interface utilisateur conviviale pour télécharger les vidéos et sélectionner les options de métadonnées, avec la base de données gérant les opérations nécessaires sur les données."
        ],
    },
    {
        title: "Bénévolat",
        // company_name: '<a href="https://www.medinbox.com/" target="__blank" style="color:#915eff;">MEDINBOX</a>',
        icon: close,
        iconBg: "#E6DEDD",
        date: "Mai 2023",
        points: [
            "Développement d'une application photobooth pour une entreprise aéronautique pour le <a href='https://www.siae.fr/' target='__blank' style='color:#915eff;'>Salon du Bourget</a> 2023"
        ],
    },
    {
        title: "Stagiaire",
        company_name: 'AER <a href="https://www.epitech.eu/" target="__blank" style="color:#915eff;">Epitech</a> Toulouse',
        icon: epitech,
        iconBg: "#E6DEDD",
        date: "Fév 2022 - Mar 2023",
        points: [
            "Assistant pédagogique et coach, gestion des promotions inférieures.",
            'Formation et Coaching (<a href="https://drive.google.com/file/d/1GTxr2gz-6_wCFkja7a4BbXY6b-g9GFzm/view?usp=sharing" target="__blank" style="color:#915eff;">certificat</a>)'
        ],
    },
    {
        title: "Gagnant de Hackathon",
        company_name: '<a href="https://www.microsoft.com/" target="__blank" style="color:#915eff;">Microsoft</a> Ready Developer One',
        icon: microsoft,
        iconBg: "#E6DEDD",
        date: "Mai 2022",
        points: [
            "Thème : accessibilité",
            `Développé une solution sur le <a href="https://www.microsoft.com/en-us/hololens/" target="__blank" style="color:#915eff;">Hololens 2</a> d'un jeu de réalité augmentée adapté à tous les publics avec suivi des mains, suivi des yeux et reconnaissance vocale.`
        ],
    },
    {
        title: "Stagiaire",
        company_name: '<a href="https://arcys.fr/" target="__blank" style="color:#915eff;">ARCYS</a>',
        icon: arcys,
        iconBg: "#E6DEDD",
        date: "Juil 2021 - Déc 2021",
        points: [
            "Contexte : Migration de <a href='https://en.wikipedia.org/wiki/Baan_Corporation' target='__blank' style='color:#915eff;'>BAAN 4</a> vers <a href='https://www.infor.com/solutions/erp/ln' target='__blank' style='color:#915eff;'>Infor LN</a> système ERP.",
            "Développé un outil pour restructurer les données d'adresses postales pour les clients et les fournisseurs afin d'assurer la conformité et l'utilisabilité pour une intégration fluide au système ERP.",
            "Développé un outil destiné à récupérer les clés RIB à partir des IBANs pour la compatibilité avec le nouveau système ERP.",
            "Macro Excel pour automatiser les tâches récurrentes sur les factures non reçues (FNP)."
        ],
    },
    {
        title: "Contrat Temporaire",
        company_name: '<a href="https://www.elyade.com/" target="__blank" style="color:#915eff;">Elyade Gérance</a>',
        icon: elyade,
        iconBg: "#E6DEDD",
        date: "Mar 2020",
        points: [
            "Assistance pour mettre en place le télétravail pour 103 employés pendant le confinement COVID-19.",
        ],
    },
    {
        title: "Bac technologique (STI2D)",
        company_name: '<a href="https://stephane-hessel.mon-ent-occitanie.fr/" target="__blank" style="color:#915eff;">Lycée Stéphane Hessel</a>',
        icon: lycee,
        iconBg: "#383E56",
        date: "2019 - 2020",
        points: [
            "Mention Bien",
            "Spécialisation dans les systèmes numériques et l'informatique.",
            "Participation à la création d'une serre connectée.",
            '<a href="https://www.cisco.com/" target="__blank" style="color:#915eff;">Formation</a> aux Bases du Réseau CISCO (<a href="https://drive.google.com/file/d/1saPQcHlz1gFN7Rw5q4ExpaQI5ZA_qsAs/view?usp=sharing" target="__blank" style="color:#915eff;">certificat</a>)'
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Je pensais qu'il était impossible de créer un site web aussi beau que notre produit, mais Rick m'a prouvé le contraire.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "Je n'ai jamais rencontré de développeur web qui se soucie autant du succès de ses clients comme le fait Rick.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Après que Rick ait optimisé notre site web, notre trafic a augmenté de 50%. Nous ne le remercierons jamais assez !",
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
            "Plateforme web permettant aux utilisateurs de soutenir leurs artistes préférés en échange d'avantages exclusifs.",
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
            "Site web personnel pour présenter mon travail et mes compétences.",
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
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
            {
                name: "Three JS",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        source_code_link: "https://github.com/remynln/portfolio",
        link: "https://www.remynln.fr/",
    },
    {
        name: "Whanos",
        description:
            "Automatise le déploiement d'applications en utilisant Docker, Jenkins, Ansible et Kubernetes, permettant aux développeurs de déployer sur un cluster Kubernetes avec un simple push Git. Il intègre la containerisation, l'automatisation des tâches, la gestion de la configuration et l'orchestration.",
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
            "AREA (Action-REAction) consiste à créer une plateforme d'automatisation similaire à <a href='https://ifttt.com/' target='__blank' style='color:#915eff;'>IFTTT</a> ou <a href='https://zapier.com/' target='__blank' style='color:#915eff;'>Zapier</a>, intégrant divers services pour déclencher des actions basées sur des conditions prédéfinies. Le projet comprend le développement d'un serveur d'application basé sur une API REST, un client web et un client mobile, avec la fonctionnalité principale tournant autour de la connexion et de l'automatisation des tâches entre plusieurs services.",
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
            "Bot Discord Vinted pour obtenir les articles les plus récents du site Vinted en utilisant le scraping.",
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
    title: "Aperçu.",
    subtitle: "INTRODUCTION",
    content: "Je suis Rémy Noulin, étudiant en 5ème année à Epitech Toulouse, en train de poursuivre un diplôme d'expert en Technologie de l'Information. Avec une solide base en langages de programmation tels que C, C++, Python et JavaScript, j'ai perfectionné mes compétences à travers divers stages et projets. Mon expérience couvre le développement web, DevOps et la cybersécurité, complétée par une expérience réussie lors d'un Hackathon Microsoft où j'ai développé une solution en réalité augmentée. J'ai également participé à des études internationales à l'Université Chung Ang à Séoul, élargissant ainsi ma perspective technique et culturelle. Ma passion pour la technologie me pousse à apprendre en continu et à contribuer à des projets innovants."
}

const experience_title = {
    title: "Expérience Professionnelle.",
    subtitle: "CE QUE J'AI FAIT JUSQU'À PRÉSENT",
}

const work_title = {
    title: "Projets.",
    subtitle: "MES RÉALISATIONS",
    content: "J'ai travaillé sur une variété de projets, allant de sites web simples à des applications web complexes. Voici quelques-uns des projets sur lesquels j'ai travaillé :"
}

const contact_title = {
    title: "Contact.",
    subtitle: "ENTREZ EN CONTACT",
    name: "Quel est votre nom ?",
    email: "Quel est votre email ?",
    message: "Quel est votre message ?",
    send: "Envoyer",
    sending: "Envoi en cours...",
    failed: "Une erreur s'est produite. Veuillez réessayer.",
    sent: "Message envoyé !",
}

const socials_title = {
    title: "Réseaux Sociaux.",
    subtitle: "EN SAVOIR PLUS SUR MOI",
}

const introduction_title = {
    title: "Bonjour, je suis",
    name: "Rémy",
    first: "Je suis un développeur",
    second: ""
}



export { services, technologies, experiences, testimonials, projects, about_title, experience_title, work_title, contact_title, socials_title, introduction_title };