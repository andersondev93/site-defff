import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import abadaImg from '../../../public/abada-05.png'
import Image from 'next/image';
import { Container } from "./container"

export function Hero() {
    return (
        <section className="w-full h-[704px] md:h-[416px] xl:h-[704px] bg-img_bg_hero bg-no-repeat bg-center bg-cover overflow-hidden">
            <Container>
                <div className='flex-1 max-w-[350px] md:max-w-[497px]  md:ml-4'>
                    <h1 className='text-white mt-2 mb-4 text-[32px] font-bold md:text-4xl xl:text-7xl'
                        data-aos="fade-down" data-aos-delay="200">BLOCO DO DEFFF 2025</h1>
                    <p className='text-white text-lg mb-8 text-justify lg:text-lg'
                        data-aos="fade-right" data-aos-delay="200">O Melhor Bloco de Chapadinha-MA chega à sua 10ª edição e, claro, você não pode ficar de fora de um dos mais tradicionais da nossa cidade.</p>

                    <div className="flex text-white mb-8">
                        <a
                            target='blank'
                            href={`https://wa.me/5598991270266?text=Olá vim pelo site e gostaria de mais informações`} className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2"
                            data-aos="fade-right" data-aos-delay="200">
                            <WhatsappLogo className='w-5 h-5' />
                            Contato via WhatsApp
                        </a>
                    </div>

                </div>

                <Image
                    src={abadaImg}
                    alt='Foto do abada'
                    className='w-[378px] h-[416px] xl:mr-[-41px] xl:w-[640px] xl:h-[704px] ml-0'
                    data-aos="fade-left"
                    data-aos-delay="200"
                />
            </Container>

        </section>
    );
}