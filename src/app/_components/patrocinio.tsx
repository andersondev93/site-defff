import Image from 'next/image';
import smart from '../../../public/patrocinadores/smart.png';
import evolution from '../../../public/patrocinadores/evolution.png';
import daniel from '../../../public/patrocinadores/daniel.png';
import varanda from '../../../public/patrocinadores/varanda.png';
import paiva from '../../../public/patrocinadores/paiva.jpeg';
import fabricio from '../../../public/patrocinadores/fabricio.jpeg';
import extreme from '../../../public/patrocinadores/extreme.jpeg';
import posto from '../../../public/patrocinadores/posto.png';
import number from '../../../public/patrocinadores/number.jpeg';
import wanderson from '../../../public/patrocinadores/wanderson.jpeg';
import bruno from '../../../public/patrocinadores/bruno.png';
import alberto from '../../../public/patrocinadores/alberto.png';
import gh from '../../../public/patrocinadores/gh.png';
import perpolpas from '../../../public/patrocinadores/perpolpas.png';
import junior from '../../../public/patrocinadores/junior.png';
import dantas from '../../../public/patrocinadores/dantas.jpeg';
import querido from '../../../public/patrocinadores/querido.png';
import delta from '../../../public/patrocinadores/delta.jpeg';
import maytha from '../../../public/patrocinadores/maytha.png';
import mercado from '../../../public/patrocinadores/mercado.png'

export function Patrocinio() {
    return (
        <section className="w-full lg:h-[784px]">

            <div>

                <h1 className='text-orange-600 mt-2 text-[32px] text-center font-bold md:text-4xl xl:text-5xl'>PATROCÍNIO</h1>

            </div>

            <div className='max-w-[1246px] px[15px] mx-auto flex-wrap flex items-center justify-center flex-row gap-4 mt-8 mb-8' data-aos="zoom-in">
                <div className='w-[200px] h-[100px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={smart}
                        alt='Elitton Aguiar'
                        className='w-[150px] h-[50px]'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={mercado}
                        alt='Prefeitura de Chapadinha-MA '
                        className='w-[150px] h-[50px]'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={evolution}
                        alt='Josimar do Maranhãozinho'
                        className='w-[150px] h-[80px]'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={daniel}
                        alt='Aluizio Santos'
                        className='w-[180px] h-[50px]'
                    />
                </div>


            </div>

            <div className='max-w-[1246px] px[15px] mx-auto flex flex-wrap items-center justify-center flex-row gap-4 mt-8 mb-8' data-aos="zoom-in">
                <div className='w-[200px] h-[100px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={paiva}
                        alt='Elitton Aguiar'
                        className='w-[200px] h-[100px] rounded-3xl'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={fabricio}
                        alt='Prefeitura de Chapadinha-MA '
                        className='w-[200px] h-[100px] rounded-3xl'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={extreme}
                        alt='Josimar do Maranhãozinho'
                        className='w-[200px] h-[100px] rounded-3xl'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={posto}
                        alt='Aluizio Santos'
                        className='w-[200px] h-[100px]'
                    />
                </div>


            </div>

            <div className='max-w-[1246px] px[15px] mx-auto flex-wrap flex items-center justify-center flex-row gap-4 mt-8 mb-8' data-aos="zoom-in">
                <div className='w-[200px] h-[100px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={wanderson}
                        alt='Elitton Aguiar'
                        className='w-[200px] h-[100px] rounded-3xl'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={bruno}
                        alt='Prefeitura de Chapadinha-MA '
                        className='w-[200px] h-[100px]'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-blue-800 shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={alberto}
                        alt='Josimar do Maranhãozinho'
                        className='w-[150px] h-[50px]'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={gh}
                        alt='Aluizio Santos'
                        className='w-[200px] h-[100px] rounded-3xl'
                    />
                </div>


            </div>

            <div className='max-w-[1246px] px[15px] mx-auto flex-wrap flex items-center justify-center flex-row gap-4 mt-8 mb-8' data-aos="zoom-in">
                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={junior}
                        alt='Elitton Aguiar'
                        className='w-[150px] h-[80px]'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={dantas}
                        alt='Prefeitura de Chapadinha-MA '
                        className='w-[120px] h-[95px]'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={querido}
                        alt='Josimar do Maranhãozinho'
                        className='w-[200px] h-[40px]'
                    />
                </div>
                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={delta}
                        alt='Aluizio Santos'
                        className='w-[200px] h-[100px] rounded-3xl'
                    />
                </div>


            </div>

            <div className='max-w-[1246px] px[15px] mx-auto flex-wrap flex items-center justify-center flex-row gap-4 mt-8 mb-8'>
                <div className='w-[200px] h-[100px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={varanda}
                        alt='Aluizio Santos'
                        className='w-[180px] h-[100px]'
                    />
                </div>

                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={number}
                        alt='Aluizio Santos'
                        className='w-[200px] h-[100px] rounded-3xl'
                    />
                </div>

                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={perpolpas}
                        alt='Aluizio Santos'
                        className='w-[200px] h-[100px] rounded-3xl'
                    />
                </div>

                <div className='w-[200px] h-[100px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                    <Image
                        src={maytha}
                        alt='Aluizio Santos'
                        className='w-[180px] h-[80px]'
                    />
                </div>

            </div>

        </section>
    )
}