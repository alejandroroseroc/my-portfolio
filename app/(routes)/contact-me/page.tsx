"use client";

import { contactLinks } from "@/data";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";

const ContactMe = () => {
    return (
        <>
            <TransitionPage />
            <div className="flex flex-col items-center justify-center h-screen mx-auto space-y-6 text-center max-w-5xl">
                <CircleImage />
                <h1 className="text-2xl leading-tight md:text-4xl">
                    Contáctame
                    <span className="block font-bold text-secondary">a través de:</span>
                </h1>
                <ul className="grid gap-4 md:grid-cols-2">
                    {contactLinks.map(({ id, name, icon, url }) => (
                        <li key={id} className="p-4 transition transform rounded-lg shadow-md bg-[rgba(6,20,27,1)] hover:scale-105 hover:bg-[rgba(74,92,106,0.7)]">
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-3 text-lg text-gray-300"
                            >
                                <span className="text-secondary text-3xl">{icon}</span>
                                <span>{name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ContactMe;
