"use client"
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <section className="z-20 w-full bg-primary/80 mt-1">
            <section className="z-20 mt-11 grid items-center h-full p-10 py-20 md:py-0 md:grid-cols-2">
                <Image src="/fotoHome.png" priority width="500" height="500" alt="Avatar" />
                <section className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-2">Diego Alejandro <br />
                        <p className="text-6xl font-bold">Rosero Cisneros</p><br/>
                        <p>Ingeniero de Software</p><br/>
                        <TypeAnimation
                            sequence={[
                                
                                'Me gusta programar',
                                1000,
                                'Me gusta los deportes',
                                1000,
                                'Me gusta la musica',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-medium"
                        />
                    </h1>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/about-me" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md text-light border-medium w-fit rounded-xl hover:shadow-xl hover:shadow-light/50">
                            Sobre mí                        </a>
                        <a href="/my-interests"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-light border-medium rounded-xl hover:shadow-xl hover:shadow-light" >
                            Mis Intereses
                        </a>
                    </div>
                    <div className="mt-16">
                        <Image 
                            src="/logoar.png" 
                            alt="Logo personal"
                            className="w-52 h-52 object-contain mx-auto" 
                        />
                    </div>



                </section>
            </section>
        </section>
    );
}

export default Introduction;