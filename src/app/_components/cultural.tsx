import Image from 'next/image';
import elitton from '../../../public/patrocinadores/elitton.png';
import prefeitura from '../../../public/patrocinadores/prefeitura.png';
import aluizio from '../../../public/patrocinadores/aluizio.png';
import josimar from '../../../public/josimar.png';


export function Cultural() {
    return (
        <section className="w-full h-[374px] overflow-hidden">

            <div>

                <h1 className='text-orange-600 mt-2 text-[32px] text-center font-bold md:text-4xl xl:text-5xl'>APOIO CULTURAL</h1>

            </div>

            <div className="max-w-[1246px] h-[310px] mx-auto flex items-center justify-center">
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2' data-aos="zoom-in-down">
                        <div className=' bg-black shadow-2xl rounded-3xl border-2 w-[180px] flex items-center justify-center'>
                            <Image
                                src={elitton}
                                alt='Elitton Aguiar'
                                className='w-[150px] h-[100px] object-contain'
                            />
                        </div>
                        <div className=' bg-white shadow-2xl rounded-3xl border-2 w-[180px] flex items-center justify-center'>
                            <Image
                                src={prefeitura}
                                alt='Prefeitura de Chapadinha-MA'
                                className='w-[150px] h-[100px] object-contain'
                            />
                        </div>
                        <div className=' bg-white shadow-2xl rounded-3xl border-2 w-[180px] flex items-center justify-center'>
                            <Image
                                src={josimar}
                                alt='Josimar do Maranhãozinho'
                                className='w-[150px] h-[100px] object-contain'
                            />
                        </div>
                        <div className=' bg-white shadow-2xl rounded-3xl border-2 w-[180px] flex items-center justify-center'>
                            <Image
                                src={aluizio}
                                alt='Aluizio Santos'
                                className='w-[150px] h-[100px] object-contain'
                            />
                        </div>
                </div>
            </div>

        </section>
    )
}