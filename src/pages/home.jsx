import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ContactForm } from '../components/contactForm'

export const Home = () => {
    return (
        <>
            <Header />
            <section className="flex items-center w-[100vw] bg-home bg-cover 
            justify-center h-[92vh]">

                    <article className="text-white font-semibold w-[52vw] mt-[10vh] mr-[1.5vw]">
                        Somos uma empresa de transporte e armazenagem voltada para o setor de alimentos e rações. 
                        Localizados no município de Araruama, temos como meta diária a busca por atender as necessidades de nossos clientes 
                        e parceiros da melhor maneira possível. Entre em contato conosco para nos conhecer melhor!
                    </article>
                <ContactForm />
            </section>
            <section className="flex items-center w-[100vw] bg-green-600
            justify-center h-[100vh]">

                    <article className="text-white font-semibold w-[52vw] mt-[10vh] mr-[1.5vw]">
                        Somos uma empresa de transporte e armazenagem voltada para o setor de alimentos e rações. 
                        Localizados no município de Araruama, temos como meta diária a busca por atender as necessidades de nossos clientes 
                        e parceiros da melhor maneira possível. Entre em contato conosco para nos conhecer melhor!
                    </article>
            </section>
            <section className="flex items-center w-[100vw] bg-black
            justify-center h-[100vh]">

                    <article className="text-white font-semibold w-[52vw] mt-[10vh] mr-[1.5vw]">
                        Somos uma empresa de transporte e armazenagem voltada para o setor de alimentos e rações. 
                        Localizados no município de Araruama, temos como meta diária a busca por atender as necessidades de nossos clientes 
                        e parceiros da melhor maneira possível. Entre em contato conosco para nos conhecer melhor!
                    </article>
            </section>
            <section className="flex items-center w-[100vw] bg-yellow-600
            justify-center h-[100vh]">

                    <article className="text-white font-semibold w-[52vw] mt-[10vh] mr-[1.5vw]">
                        Somos uma empresa de transporte e armazenagem voltada para o setor de alimentos e rações. 
                        Localizados no município de Araruama, temos como meta diária a busca por atender as necessidades de nossos clientes 
                        e parceiros da melhor maneira possível. Entre em contato conosco para nos conhecer melhor!
                    </article>
            </section>
            <section className="flex items-center w-[100vw] bg-red-600
            justify-center h-[100vh]">

                    <article className="text-white font-semibold w-[52vw] mt-[10vh] mr-[1.5vw]">
                        Somos uma empresa de transporte e armazenagem voltada para o setor de alimentos e rações. 
                        Localizados no município de Araruama, temos como meta diária a busca por atender as necessidades de nossos clientes 
                        e parceiros da melhor maneira possível. Entre em contato conosco para nos conhecer melhor!
                    </article>
            </section>
            <section className="flex items-center w-[100vw] bg-blue-600
            justify-center h-[100vh]">

                    <article className="text-white font-semibold w-[52vw] mt-[10vh] mr-[1.5vw]">
                        Somos uma empresa de transporte e armazenagem voltada para o setor de alimentos e rações. 
                        Localizados no município de Araruama, temos como meta diária a busca por atender as necessidades de nossos clientes 
                        e parceiros da melhor maneira possível. Entre em contato conosco para nos conhecer melhor!
                    </article>
            </section>
        </>
    )
}