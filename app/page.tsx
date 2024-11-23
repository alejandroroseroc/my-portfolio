
import { CoverParticles } from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";


export default function Home() {
  return (
    <main> 
      <TransitionPage />
      <section className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />

      </section>
          
    </main>
  );
}
