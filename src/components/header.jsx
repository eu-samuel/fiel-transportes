import { FaPhoneAlt } from "react-icons/fa";

export const Header = () => {
    return (
        <header className="flex w-full h-[8vh] items-center text-white bg-header">
    
                <ul className="flex gap-[3vw] items-center ml-[20vw]">
                    <li className="li w-[6vw]">Sobre nós</li>
                    <li className="li">Depoimentos</li>
                    <li className="li w-[6vw]">Galeria</li>
                    <li className="li">Atendimento</li>
                    <li className="li w-[9.5vw]">Trabalhe conosco</li>
                </ul>

    <div className="flex items-center 
    justify-center gap-[2vw] w-[20vw] ml-[11vw]">
                <FaPhoneAlt className="text-[1.3vw] relative left-[.5vw]" />
                <div className="flex flex-col">
                <span className="text-[.8vw] relative left-[.2vw] top-[.2vh]">
                    Dúvidas? Nos ligue.
                </span>
                <span className="text-[1.5vw] font-semibold relative top-[-.2vh]">
                    (22) 2665-2399
                </span>
                </div>
            </div>
        </header>
    )
}