import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ContactForm } from '../components/contactForm'

export const Home = () => {
    return (
        <>
            <Header />
            <section className="flex items-center w-[100vw] bg-home bg-cover 
            justify-center h-[92vh]">
                <article className="text-white w-[50vw] mt-[4vh] mr-[3.5vw]">
                    Somos uma empresa de transporte e armazenagem localizada em Araruama
                    que busca sempre atender as necessidades de nossos clientes e parceiros da
                    melhor maneira possível.
                </article>
                <ContactForm />
            </section>
        </>
    )
}