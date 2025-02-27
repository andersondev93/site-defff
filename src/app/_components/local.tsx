"use client";
import Image from 'next/image';
import mercado from '../../../public/mercado.png';
import ImageCarousel from "../_components/ImageCarousel"

const images = [
    "/02.jpeg",
    "/05.jpeg",
    "/06.jpeg",
    "/07.jpeg",
    ];

export function Local() {

    return (
        <section className="w-full h-[774px] overflow-hidden">
            <div className='flex items-center justify-center gap-8 flex-col'>
                <div>
                    <h1 className='text-orange-600 mt-2 text-[32px] text-center font-bold md:text-4xl xl:text-5xl'>LOCAL DO EVENTO</h1>
                </div>
                <div>
                    <Image
                        src={mercado}
                        alt='Mercado Pub'
                        className='w-[200px] h-[80px] bg-black p-2 shadow-2xl  rounded-3xl'
                    />
                </div>
            </div>

            <div className="h-[550px] flex flex-col items-center justify-center">
                <ImageCarousel images={images} />
            </div>

            <div>
                <p className='text-center text-base md:text-lg'>Endereço: Travessa Manoel leite, 15-C - Centro, Chapadinha - MA</p>
            </div>

        </section>
    )
}