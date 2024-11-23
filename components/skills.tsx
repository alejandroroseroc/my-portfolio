"use client";

import Image from "next/image";

const skills = [
    { name: "django", src: "/django.png" },
    { name: "Java", src: "/foto4.png" },
    { name: "Nextjs", src: "/nextjs.png" },
    { name: "mongodb", src: "/mongodb.png" },
    { name: "mysql", src: "/mysql.png" },
    { name: "python", src: "/python.png" },
    { name: "spring", src: "/spring.png" },
    { name: "tailwind", src: "/tailwind.png" },
    
];

const Skills = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-3 md:justify-start">
            {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                    <Image
                        src={skill.src}
                        width={80}
                        height={80}
                        alt={`${skill.name} logo`}
                        className="w-20 h-20"
                    />
                    <p className="mt-2 text-sm text-center text-light">{skill.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Skills;
