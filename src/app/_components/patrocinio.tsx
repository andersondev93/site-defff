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
import mercado from '../../../public/mercado.png';


export function Patrocinio() {
    return (
        <section className="w-full overflow-hidden">

            <div>

                <h1 className='text-orange-600 mt-2 text-[32px] text-center font-bold md:text-4xl xl:text-5xl'>PATROCÍNIO</h1>

            </div>

            <div className="max-w-[1246px] mx-auto my-4 flex items-center justify-center">
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2' data-aos="zoom-in" data-aos-delay="200">
                    <div className='w-[180px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={smart}
                            alt='Smart'
                            className='w-[150px] h-[100px] object-contain'
                        />
                    </div>
                    <div className='w-[180px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={mercado}
                            alt='Mercado Pub'
                            className='w-[150px] h-[55px]'
                        />
                    </div>
                    <div className='w-[180px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={evolution}
                            alt='Evolution Fitness'
                            className='w-[150px] h-[100px]'
                        />
                    </div>
                    <div className='w-[180px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={daniel}
                            alt='Daniel Viana'
                            className='w-[180px] h-[100px] object-contain'
                        />
                    </div>
                    <div className='w-[180px] shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={paiva}
                            alt='Paiva Art Joias'
                            className='w-[180px] h-[100px]  rounded-3xl'
                        />
                    </div>
                    <div className='w-[180px] shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={fabricio}
                            alt='Fabricio Mecânico'
                            className='w-[180px] h-[100px] rounded-3xl'
                        />
                    </div>
                    <div className='w-[180px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={extreme}
                            alt='Extreme Academia'
                            className='w-[180px] h-[100px] rounded-3xl'
                        />
                    </div>
                    <div className='w-[180px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={posto}
                            alt='Posto Delta'
                            className='w-[150px] h-[100px]'
                        />
                    </div>
                    <div className='w-[180px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={wanderson}
                            alt='Wanderson ContHabil'
                            className='w-[180px] h-[100px] rounded-3xl'
                        />
                    </div>
                    <div className='w-[180px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={bruno}
                            alt='Bruno Viana'
                            className='w-[180px] h-[100px] object-contain'
                        />
                    </div>
                    <div className='w-[180px] bg-blue-800 shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={alberto}
                            alt='Alberto Carlos'
                            className='w-[150px] h-[100px] object-contain'
                        />
                    </div>
                    <div className='w-[180px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={gh}
                            alt='Marmoraria GH'
                            className='w-[180px] h-[100px] rounded-3xl'
                        />
                    </div>
                    <div className='w-[180px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={junior}
                            alt='Junior Aguiar'
                            className='w-[180px] h-[100px] object-contain'
                        />
                    </div>
                    <div className='w-[180px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={dantas}
                            alt='Dantas'
                            className='w-[120px] h-[100px] rounded-3xl'
                        />
                    </div>
                    <div className='w-[180px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={querido}
                            alt='Supermecado Querido'
                            className='w-[180px] h-[40px] '
                        />
                    </div>
                    <div className='w-[180px] shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={delta}
                            alt='Delta'
                            className='w-[180px] h-[100px] rounded-3xl'
                        />
                    </div>
                    <div className='w-[180px] bg-black shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={varanda}
                            alt='Varanda Burguer'
                            className='w-[180px] h-[100px] rounded-3xl'
                        />
                    </div>
                    <div className='w-[180px]  shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={number}
                            alt='Number'
                            className='w-[180px] h-[100px] rounded-3xl'
                        />
                    </div>
                    <div className='w-[180px]  shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={perpolpas}
                            alt='Perpolpas'
                            className='w-[180px] h-[100px] rounded-3xl'
                        />
                    </div>
                    <div className='w-[180px] bg-white shadow-2xl rounded-3xl border-2 flex items-center justify-center'>
                        <Image
                            src={maytha}
                            alt='Aluizio Santos'
                            className='w-[180px] h-[100px] rounded-3xl'
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}