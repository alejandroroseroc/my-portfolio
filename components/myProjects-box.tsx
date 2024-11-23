import Image from "next/image";
import Link from "next/link";

interface MyProjectsBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        description: string; 
    };
}

const MyProjectsBox = (props: MyProjectsBoxProps) => {
    const { data } = props;
    const { title, image, urlGithub, description } = data;

    return (
        <section className="p-4 border border-medium rounded-xl flex flex-col items-center text-center">
            {/* Título del proyecto */}
            <h3 className="mb-2 text-xl font-bold">{title}</h3>

            {/* Imagen del proyecto */}
            <Image
                src={image}
                alt={`Imagen del proyecto ${title}`}
                width={50}
                height={50}
                className="w-full md:w-[150px] rounded-2xl h-auto"
            />

            {/* Descripción del proyecto */}
            <section className="mt-2 text-sm text-lighter">
                {description}
            </section>

            {/* Botón de enlace a Github */}
            <section className="flex gap-5 mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-medium hover:bg-mediumDark text-lighter"
                >
                    Github
                </Link>
            </section>
        </section>
    );
};

export default MyProjectsBox;
