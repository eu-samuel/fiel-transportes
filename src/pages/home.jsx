import { Header } from "../components/header"
import { Footer } from "../components/footer"
import Logo from '../assets/logo.gif'
import { ContactForm } from '../components/contactForm'

export const Home = () => {
    return (
        <>
            <Header />
            <div className="flex items-center">
                <ContactForm/>
                <img src={Logo} alt="Logo da Fiel Transportes"
                    className="w-[45vw] ml-[50vw]"
                />
            </div>
        </>
    )
}