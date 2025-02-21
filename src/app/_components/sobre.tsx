import Image from 'next/image';
import logo from '../../../public/logo-02.jpeg'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function Sobre() {
    return (

        <section className="w-full h-[754px] md:h-[704px] xl:h-[704px] overflow-hidden flex">

            <div className="flex items-center justify-center md:justify-around w-full max-w-[1246px] px[15px] mx-auto flex-col md:flex-row">
                <Image
                    src={logo}
                    alt='Logo'
                    className='w-[220px] h-[300px] lg:w-[332px] lg:h-[416px] xl:w-[420px] xl:h-[525px] shadow-2xl rounded-3xl mt-4'
                    data-aos="flip-left"
                    data-aos-delay="200"
                />
                <div className='flex-1 max-w-[350px] md:max-w-[497px]  md:ml-4' data-aos="fade-left" data-aos-delay="200">
                    <h1 className='text-orange-600 mt-2 mb-4 text-[32px] text-center font-bold md:text-4xl md:text-left xl:text-5xl'>SOBRE O DEFFF</h1>
                    <p className='text-black text-lg mb-8 text-justify lg:text-lg'>Somos um grupo formado por 8 amigos. A sigla DEFFF tem origem das iniciais dos nomes dos 5 primeiros amigos que cumpunha esse grupo originalmente.</p>
                    <p className='text-black text-lg mb-8 text-justify lg:text-lg'>São 10 anos de Bloco DEFFF e você é nosso principal convidado pra celebrar conosco com muita folia. Traga família e amigos pois seu domingo de Carnaval já está garantido no melhor bloco da cidade.</p>
                    <div className="flex items-center justify-center md:justify-normal  text-white mb-8">
                        <a href="#" className="bg-orange-600 px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2">
                            <WhatsappLogo className='w-5 h-5' />
                            Adquira seu abadá pelo WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>


    )
}    