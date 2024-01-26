import { FaPhoneAlt } from "react-icons/fa";

export const Header = () => {
    return (
        <header className="flex w-[100vw]  h-[8vh] items-center text-white bg-header">
    
                <ul className="flex gap-[4vw] relative items-center left-[38vw]">
                    <li className="li">Sobre nós</li>
                    <li className="li">Depoimentos</li>
                    <li className="li">Galeria</li>
                    <li className="li">Fale conosco</li>
                </ul>

    <div className="flex items-center 
    justify-center gap-[2vw] w-[20vw] relative left-[47vw]">
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