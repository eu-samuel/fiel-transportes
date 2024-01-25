import { Header } from "../components/header"
import { Footer } from "../components/footer"
import Logo from '../assets/logo.gif'

export const Home = () => {
    return (
        <>
        <Header/>
        <img src={Logo} alt="Logo da Fiel Transportes"
            className="w-[50vw]"
            />
        </>
    )
}