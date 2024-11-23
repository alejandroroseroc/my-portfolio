"use client";

import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import Skills from "@/components/skills";

import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-3xl leading-tight text-center md:text-left md:text-6xl md:mt-">
                    Sobre <span className="font-bold text-lighter">mí</span>
                </h1>
                <p className="text-lg text-center font-bold text-lighter md:text-left">
                    alejandroroseroc@gmail.com
                </p>
                <p className="mt-4 text-xl leading-relaxed text-left md:text-left md:text-2xl text-light">
                    Soy estudiante de Ingeniería de Software en quinto semestre con 
                    una pasión por el desarrollo frontend. Disfruto crear interfaces de 
                    usuario intuitivas y funcionales, y hasta ahora he trabajado con 
                    tecnologías como HTML, Tailwind CSS y Python, además de tener 
                    conocimientos básicos en Java. Estoy enfocado en seguir 
                    aprendiendo y perfeccionando mis habilidades en el desarrollo de 
                    soluciones web que ofrezcan una excelente experiencia de usuario.
                </p>
                <h2 className="mt-10 text-6xl font-bold text-center md:text-left text-lighter">
                    Skills
                </h2>
                <Skills />
            </ContainerPage>
        </>
    );
};

export default AboutMePage;
