import CircleImage from "@/components/circle-image";
import SliderMyInterests from "@/components/slider-interests";
import TransitionPage from "@/components/transition-page";
import { Link } from "lucide-react";

const MyInterests = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-8 mx-auto md:grid-cols-2">
                {/* SLIDER */}
                <div>
                    <SliderMyInterests />
                </div>

                {/* TEXTO */}
                <div className="max-w-[450px]">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis <span className="font-bold text-secondary">Intereses.</span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Soy una persona alegre, tranquila y siempre dispuesta a disfrutar de lo que me apasiona. Me encanta mantenerme activo físicamente, ya sea practicando deportes al aire libre o en el gimnasio. Disfruto de los retos que me proponen las actividades físicas, ya que me permiten crecer tanto mental como físicamente. Mi enfoque siempre está en la calma y la positividad, buscando equilibrar mi vida con momentos de actividad y relajación. Para mí, el deporte es una forma de liberar energía, sentirme bien conmigo mismo y conectar con el entorno.
                    </p>
                </div>
            </div>
        </>
    );
};

export default MyInterests;
