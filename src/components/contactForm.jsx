export const ContactForm = () => {

    return (
        <div className="bg-red-600 h-[60vh] p-2 text-white w-[30vw] absolute top-[20vh] left-[15vw] flex flex-col items-center">
            <p>
                Formulário de cotação.
                </p>
            <form className="flex flex-col gap-2 w-[25vw]">
                <label htmlFor="name" className="mt-[2vh] ">
                    <input
                        className="input"
                        name="name"
                        type="text"
                        placeholder="Nome completo"
                    />
                </label>
                <label htmlFor="phone">
                    <input
                        className="input"
                        name="phone"
                        type="phone"
                        placeholder="Número de telefone"
                    />
                </label>
                <label htmlFor="email">
                    <input
                        className="input"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                    />
                </label>
                <label htmlFor="email">
                    <textarea
                        className="textarea"
                        name="email"
                        type="email"
                        placeholder="Gostaria de saber sobre a disponibilidade e os preços. Preciso de ajuda com o seguinte:"
                    />
                </label>

                <span className="w-[25vw] text-[12px]">
                Favor não incluir informações confidenciais como documentos ou dados bancários. Este é um espaço para você iniciar seu contato conosco.
            </span>

                <button
                    type="button"
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}