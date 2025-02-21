import Image from 'next/image';
import atracoes from '../../../public/atracoes.jpeg';
import kassio from '../../../public/kassio.png';
import jade from '../../../public/jade.png';
import defff from '../../../public/defff.png';
import mercado from '../../../public/patrocinadores/mercado.png'


export function Atracoes() {
    return (

        <section className="w-full h-[785px] lg:h-[704px] lg:bg-img_bg_atr bg-no-repeat bg-center bg-cover overflow-hidden">


            <div className="flex items-center justify-center xl:justify-around w-full max-w-[1246px] px[15px] mx-auto flex-col">
                <div className="mt-4">
                    <h1 className='text-orange-600 lg:text-white lg:hidden mt-2 mb-4 text-[32px] text-center font-bold md:text-4xl xl:text-5xl' data-aos="fade-down">ATRAÇÕES</h1>
                    <p className='text-black lg:text-white lg:hidden max-w-[350px] md:max-w-[700px] lg:max-w-[1194px] text-lg md:text-2xl mb-8 text-justify' data-aos="fade-down">Vamos comemorar um década de muita festa e alegria com as atrações:</p>
                    <div className='w-[353px] flex items-center justify-center'>
                        <Image
                            src={defff}
                            alt='Logo do DEFFF'
                            className='w-[200px] h-[85px] hidden lg:block'
                            data-aos="fade-down"
                        />
                    </div>
                    <div className='hidden lg:block' data-aos="fade-down">
                        <div className='flex gap-6 mt-6'>
                            <div className='text-center'>
                                <p className='text-white font-bold text-3xl'>02 - MARÇO</p>
                                <p className='bg-yellow-500 text-black font-bold pl-2 pr-2'>DOMINGO 16:00 H</p>
                            </div>
                            <div>
                                <Image
                                    src={mercado}
                                    alt='Logo do DEFFF'
                                    className='w-[180px] h-[60px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src={atracoes}
                    alt='Atrações'
                    className='w-[456px] h-[570px] lg:hidden rounded-3xl mb-5'
                    data-aos="fade-up"
                    data-aos-duration="3000"
                />

            </div>

            <div className=" max-w-[1246px] px[15px] mx-auto flex items-center justify-center md:flex-col md:h-[552px] lg:flex-row">

                <div className="relative flex overflow-x-hidden">
                    <Image
                        src={kassio}
                        alt='Kássio Ventury'
                        className='w-[546px] h-[486px] rounded-3xl hidden lg:block relative'
                        data-aos="zoom-in-right"
                    />
                    <h2 className='bg-orange-600 text-white font-bold text-3xl p-2 absolute bottom-10 left-60'>KÁSSIO VENTURY</h2>
                </div>

                <div className="relative flex overflow-x-hidden">
                    <Image
                        src={jade}
                        alt='Jade Lima'
                        className='w-[546px] h-[486px] rounded-3xl hidden lg:block relative'
                        data-aos="zoom-in-left"
                    />
                    <h2 className='bg-yellow-500 text-white font-bold text-3xl p-2 absolute bottom-10 left-60'>JADE LIMA</h2>
                </div>

            </div>




        </section>

    )
}  