import Image from 'next/image';
import abada from '../../../public/abada-03.jpeg'
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";


export function Abada() {
    return (
        <section className="w-full h-[790px] lg:h-[704px] xl:h-[704px] overflow-hidden flex">

            <div className="flex items-center justify-center lg:justify-around w-full max-w-[1246px] px[15px] mx-auto flex-col lg:flex-row">

                <div className='flex-1 max-w-[350px] lg:max-w-[497px] md:ml-4' data-aos="zoom-out">
                    <h1 className='text-orange-600 mt-2 mb-4 text-[32px] text-center font-bold lg:text-4xl lg:text-left xl:text-5xl'>ABADÁ</h1>
                    <p className='text-black text-lg mb-8 text-justify lg:text-lg'>Este será nosso abadá, relembrando o abadá de nossa primeira edição. Vem curtir essa Carnaval com a gente.</p>
                    <p className='text-black text-lg mb-8 text-justify lg:text-lg'>Adquira seu abadá pelo preço promocional de R$25. O Bloco do DEFFF 2025 será realizado no dia 02 de março, domingo de Carnaval, no Mercado Pub, a partir das 16:00hrs.</p>
                    <div className="flex items-center justify-center lg:justify-normal  text-white mb-8">
                        <a
                            target='blank'
                            href={`https://wa.me/5598981334954?text=Olá vim pelo site e gostaria de mais informações`} className="bg-orange-600 px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2">
                            <WhatsappLogo className='w-5 h-5' />
                            Adquira seu abadá pelo WhatsApp
                        </a>
                    </div>
                </div>
                <Image
                    src={abada}
                    alt='Foto do abada 2'
                    className='w-[378px] h-[343px] shadow-2xl xl:w-[662px] xl:h-[604px] rounded-3xl mb-4 lg:mb-0'
                    data-aos="zoom-in"
                />



            </div>

        </section>
    )
}