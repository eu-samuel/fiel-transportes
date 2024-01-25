import { FaPhoneAlt } from "react-icons/fa";
import HeaderBG from '../assets/header.jpg'

export const Header = () => {
    return (
        <header className="flex w-[100vw] items-center text-white bg-header">
            <div className="h-[8vh]">
                <ul className="flex gap-10">
                    <li>Sobre nós</li>
                    <li>Depoimentos</li>
                    <li>Galeria</li>
                    <li>Fale conosco</li>
                </ul>
            </div>
    <div className="flex items-center 
    justify-center gap-[2vw] w-[20vw] h-[8vh] ml-[52vw]">
                <FaPhoneAlt className="text-[1.5vw]" />
                <div className="flex flex-col">
                <span className="text-[.8vw] relative left-[.2vw]">
                    Dúvidas? Nos ligue.
                </span>
                <span className="text-[1.6vw] font-semibold relative top-[-.6vh]">
                    (22) 2665-2399
                </span>
                </div>
            </div>
        </header>
    )
}