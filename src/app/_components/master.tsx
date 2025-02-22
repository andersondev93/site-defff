import Image from 'next/image';
import areal from '../../../public/patrocinadores/areal.png';
import altoflix from '../../../public/patrocinadores/altoflix.png';

export function Master() {
    return (
        <section className="w-full h-[474px] overflow-hidden">

            <div>
                <h1 className='text-orange-600 mt-2 text-[32px] text-center font-bold md:text-4xl xl:text-5xl'>PATROCÍNIO MASTER</h1>
            </div>

            <div className="max-w-[1246px] h-[410px] mx-auto flex items-center justify-center">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                    <Image
                        src={areal}
                        alt='Areal Construções'
                        className='w-[350px] h-[169px] shadow-2xl rounded-3xl border-2'
                        data-aos="fade-right"
                    />
                    <Image
                        src={altoflix}
                        alt='Areal Construções'
                        className='w-[350px] h-[169px] shadow-2xl rounded-3xl border-2'
                        data-aos="fade-left"
                    />
                </div>
            </div>

        </section>
    )
}