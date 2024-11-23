"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import { MyInterestData } from "@/data";

const SliderMyInterests = () => {
    return (
        <Swiper
            slidesPerView={1} // Mostrar solo 1 cuadro por diapositiva
            spaceBetween={30} // Separación entre diapositivas
            pagination={{
                clickable: true, // Activar puntos de navegación
            }}
            modules={[Pagination]} // Agregar paginación como módulo
            className="h-auto w-full" // Slider responsive
        >
            {MyInterestData.map((item, index) => (
                <SwiperSlide key={index}>
                    {/* Contenedor del cuadro con margen superior */}
                    <div className="mt-40 p-3 border border-medium rounded-lg bg-[rgba(6,20,27,1)] hover:bg-[rgba(74,92,106,0.7)] transition-all duration-600">
                        {/* Icono */}
                        <div className="flex items-center justify-center mb-2 text-6xl text-lighter">
                            {item.icon}
                        </div>
                        
                        {/* Título */}
                        <h3 className="mb-4 text-lg text-center">{item.title}</h3>
                        
                        {/* Imagen grande */}
                        <div className="flex items-center justify-center">
                            <Image
                                src={item.imageUrl}
                                alt={`Interés: ${item.title}`}
                                width={600}
                                height={600}
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderMyInterests;
