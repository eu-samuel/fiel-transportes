import { IMaskInput } from 'react-imask'


export const ContactForm = () => {


    return (
        <div className="flex flex-col ml-[6vw]">
            <div
                className="bg-[#B51A3A] font-sans w-[25vw] h-[7vh] 
                        text-[1.6vw] font-bold text-white flex justify-center 
                        items-center"
            >
                Solicite sua cotação
            </div>
            <div className="bg-gray-800 h-[70vh] p-2 text-white w-[25vw]  
         flex flex-col items-center">
                <form className="flex flex-col gap-[.5vh] w-[25vw] items-center text-[1vw]">
                    <label htmlFor="name" className="label">
                        <span className="font-600 font-sans">Nome completo:</span>
                        <input
                            className="home-input"
                            name="name"
                            type="text"
                            placeholder="Meu Nome Completo"
                        />
                    </label>
                    <label htmlFor="phone" className="label">
                        <span className="font-600 font-sans">Telefone de contato:</span>
                        <IMaskInput
                            className="home-input"
                            mask={"(00) 00000-0000"}
                            name="phone"
                            type="phone" 
                            placeholder="(xx) xxxx-xxxx"
                        />
                    </label>
                    <label htmlFor="email" className="label">
                        <span className="font-600 font-sans">E-mail válido:</span>
                        <input
                            className="home-input"
                            name="email"
                            type="email"
                            placeholder="meuemail@email.com"
                        />
                    </label>
                    <label htmlFor="email" className="label">
                        <span className="font-600 font-sans">Sua mensagem:</span>
                        <textarea
                            className="textarea"
                            name="email"
                            type="email"
                            placeholder="Gostaria de saber sobre a disponibilidade e os preços. Preciso de ajuda com o seguinte:"
                        />
                    </label>

                    <span className="w-[20vw] mt-[2vh] text-[14px]">
                        Favor não incluir informações confidenciais como documentos ou dados bancários.
                    </span>

                    <button
                        type="button"
                        className="bg-[#B51A3A] font-sans hover:bg-[#A21733] w-[25vw] h-[7vh] 
                        text-[1.6vw] font-bold relative top-[2vh]"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}