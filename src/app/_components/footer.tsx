import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr'
import { FacebookLogo } from '@phosphor-icons/react/dist/ssr'

export function Footer() {
    return (
        <section className="xl:h-[416px] bg-orange-600 text-white border-t border-yellow-300 mx-auto">
            <div className="max-w-[1246px] mx-auto pl-4">
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div className='border-r'>
                        <h3 className="text-2xl font-semibold mb-2">Bloco do DEFFF 10 anos</h3>
                        <p className='mb-4'>O Maior e Melhor Bloco de Chapadinha-MA</p>
                        <a href="#" className="bg-green-500 px-5 py-2 max-w-[250px] rounded-md font-semibold flex items-center justify-center gap-2">
                            <WhatsappLogo className='w-5 h-5' />
                            Contato via WhatsApp
                        </a>
                    </div>
                    <div className='border-r'>
                        <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
                        <p>Email: defffentretenimentos@hotmail.com</p>
                        <p>Telefone: (98) 991270266</p>
                        <p>Endereço: Bairro: Areal - Chapadinha-MA</p>
                    </div>
                    <div className='border-r'>
                        <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
                        <div className='flex gap-4'>
                            <a href="#" target="_blank"><InstagramLogo className='w-8 h-8' /></a>
                            <a href="#" target="_blank"><FacebookLogo className='w-8 h-8' /></a>

                        </div>
                    </div>
                </footer>

            </div>

            <div className="max-w-[1246px] h-[220px] mx-auto flex items-center justify-end flex-col">
                <div className="xl:w-[1246px] lg:w-[768px] md:w-[700px] border-t text-center">
                    <p>Todos os Direitos Reservados © 2024 Bloco do DEFFF</p>
                </div>
                <div>
                    <p>Criado por Anderson Gonçalves</p>
                </div>
            </div>

        </section>
    )
}