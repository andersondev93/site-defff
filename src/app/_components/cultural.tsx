import Image from 'next/image';
import elitton from '../../../public/patrocinadores/elitton.png';
import prefeitura from '../../../public/patrocinadores/prefeitura.png';
import aluizio from '../../../public/patrocinadores/aluizio.png';


export function Cultural() {
    return (
        <section className="w-full h-[374px]">

            <div>

                <h1 className='text-orange-600 mt-2 text-[32px] text-center font-bold md:text-4xl xl:text-5xl'>APOIO CULTURAL</h1>

            </div>

            <div className='max-w-[1246px] mx-auto flex flex-wrap items-center justify-center flex-row h-[296px] my-4 gap-4' data-aos="zoom-in-down">
                    <div className='w-[200px] h-[100px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={elitton}
                            alt='Elitton Aguiar'
                            className='w-[150px] h-[80px]'
                        />
                    </div>
                    <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={prefeitura}
                            alt='Prefeitura de Chapadinha-MA '
                            className='w-[180px] h-[50px]'
                        />
                    </div>
                    <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={"/patrocinadores/josimar.png"}
                            alt='Josimar do Maranhãozinho'
                            className='w-[150px] h-[50px]'
                        />
                    </div>
                    <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={aluizio}
                            alt='Aluizio Santos'
                            className='w-[180px] h-[50px]'
                        />
                    </div>


            </div>

        </section>
    )
}