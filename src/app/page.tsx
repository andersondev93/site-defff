import { Hero } from "./_components/hero";
import { Sobre } from "./_components/sobre";
import { Atracoes } from "./_components/atracoes";
import { Abada } from "./_components/abada";
import { Master } from "./_components/master";
import { Cultural } from "./_components/cultural";
import { Patrocinio } from "./_components/patrocinio";
import { Defff } from "./_components/defff";
import { Footer } from "./_components/footer";
import BackgroundMusic from "./_components/BackgroundMusic";
import { Local } from "./_components/local";

export default function Home() {
  return (
    <main>
      <BackgroundMusic />
      <Hero />
      <Defff />
      <Sobre />
      <Defff />     
      <Atracoes />
      <Defff />     
      <Abada />
      <Defff />
      <Local /> 
      <Defff />   
      <Master />
      <Cultural />
      <Defff />    
      <Patrocinio />
      <Defff />    
      <Footer />

    </main>
  );
}
