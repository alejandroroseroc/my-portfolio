import {  CodeSquare, HomeIcon, UserRound, Linkedin, Mail, CloudSun, Briefcase, Github, Volleyball, Dumbbell, Music4, MessageSquareHeart, PhoneIncoming, MessageCircle } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={50} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/diego-alejandro-rosero-cisneros-254968218/",
    },
    {
        id: 2,
        logo: <Github size={50} strokeWidth={1} />,
        src: "https://github.com/alejandroroseroc",
    },
    {
        id: 3,
        logo: <Mail size={50} strokeWidth={1} />,
        src: "mailto:alejandroroseroc@gmail.com",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#CCD0CF" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "About Me",
        icon: <UserRound size={25} color="#CCD0CF" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "My Projects",
        icon: <CodeSquare size={25} color="#CCD0CF" strokeWidth={1} />,
        link: "/my-projects",
    },
    {
        id: 4,
        title: "My Experience",
        icon: <Briefcase size={25} color="#CCD0CF" strokeWidth={1} />,
        link: "/my-experience",
    },
    {
        id: 5,
        title: "My interests",
        icon: <MessageSquareHeart size={25} color="#CCD0CF" strokeWidth={1} />,
        link: "/my-interests",
    },
    {
        id: 6,
        title: "Home",
        icon: <PhoneIncoming size={25} color="#CCD0CF" strokeWidth={1} />,
        link: "/contact-me",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Auxiliar Administrativo",
        subtitle: "EPS Indigena Mallamas",
        description: "Trabajé durante 3 años en Mallamas en el área de Aseguramiento, donde me encargué de gestionar afiliaciones a los regímenes subsidiado y contributivo, así como de realizar reportes e informes de control.",
        date: "Nov 2022 ",
    },
    {
        id: 2,
        title: "Atención al Cliente y Gestion de Inventarios",
        subtitle: "Drogueria Niza 1",
        description: "Tengo experiencia de 1 año trabajando en una droguería, donde brindé atención al cliente y apoyé en la gestión de inventarios.",
        date: "May 2019",
    },
    {
        id: 3,
        title: "Ambito Academico",
        subtitle: "Universidad Cooperativa de Colombia 'Campus Pasto'",
        description: "En el ámbito académico, participé en el desarrollo de una API para la gestión de cursos online, aplicando conceptos de desarrollo backend y organización de proyectos en equipo.",
        date: "Jun 2024",
    },
    
]



export const MyInterestData = [
    {
        icon: <Volleyball />,
        title: "Futbol",
        imageUrl: "/futbol.png",
    },
    {
        icon: <Dumbbell />,
        title: "GYM",
        imageUrl: "/gym2.png",
    },
    {
        icon: <CloudSun />,
        title: "Deportes al Aire Libre",
        imageUrl: "/fotoParapente.png",
    },
    {
        icon: <Music4 />,
        title: "Musica",
        imageUrl: "/musica.png",
    },
    
];


export const dataMyProjects = [
    {
        id: 1,
        title: "Inventario Sencillo",
        image: "/java.jpg",
        urlGithub: "https://github.com/alejandroroseroc/Inventario",
        description:"Un trabajo para implementar Patrones de Software en los cuales se implementó el patron Singlenton, el patron Factory Method, el Patron Observer y el Patron Memento, para el resultado de un Sistema de inventario para una Drogueria Sencillo",
    },
    {
        id: 2,
        title: "Social Network",
        image: "/python.jpg",
        urlGithub: "https://github.com/alejandroroseroc/ejercicios-Python",
        description:"Un trabajo realizado en el lenguaje de Python el cual se enfoco en implementar estructuras de datos para software como Pilas, Colas, Arbol Binario, indices Invertidos e interfaces para la creacion de una red ocial sencilla la cual permite Registrarse, loguearse, Postear y crear notificaciones para los usuarios"
    
    },
    {
        id: 3,
        title: "API Cursos FANCS",
        image: "/java.jpg",
        urlGithub: "https://github.com/alejandroroseroc/TallerUi",
        description:"Un trabajo en el cual se realizo una API sencilla para el proyecto de venta de cursos online el cual se realizo con el lenguaje Java y se lo conecto a una base de datos de MongoDB",
    
    },
    
];


export const contactLinks = [
    {
        id: 1,
        name: "WhatsApp",
        icon: <MessageCircle />,
        url: "https://wa.me/+573227792938", 
    },
    {
        id: 2,
        name: "LinkedIn",
        icon: <Linkedin />,
        url: "https://www.linkedin.com/in/diego-alejandro-rosero-cisneros-254968218/", 
    },
    {
        id: 3,
        name: "GitHub",
        icon: <Github />,
        url: "https://github.com/tu-usuario", 
    },
    {
        id: 4,
        name: "Gmail",
        icon: <Mail />,
        url: "mailto:alejandroroseroc@gmail.com", 
    },
];