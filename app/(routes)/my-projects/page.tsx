import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";

import MyProjectsBox from "@/components/myProjects-box"; // Verifica esta importación
import { dataMyProjects } from "@/data";

const MyProjectsPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />
            <CircleImage />
            
            <div className="flex flex-col justify-center h-full">
                
                <div className=" grid max-w-5xl gap-11 mx-auto mt-0 md:grid-cols-3">
                    {dataMyProjects.map((data) => (
                        <MyProjectsBox key={data.id} data={data} />
                    ))}
                </div>
                
            </div>
            <h1 className="text-2xl leading-tight text-left md:text-4xl md:mb-5">Mis últimos <br></br><span className="font-bold text-secondary">trabajos realizados</span></h1>
        </ContainerPage>
        
    );
};

export default MyProjectsPage;
