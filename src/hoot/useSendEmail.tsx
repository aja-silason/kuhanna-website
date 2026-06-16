import { useState, type FormEvent } from "react"

type props = {
    name: string,
    email: string,
    message: string
}

export const useSendEmail = () => {

    const [data, setDatas] = useState<props>({name: "", email: "", message: ""});
    const [status, setStatus] = useState<string>("");

    const handleChange = (e) => {
        setDatas((prevState) => (
            {...prevState, [e.target.name]: e.target.value}
        ))
    }


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const payload = {
            ...data,
            access_key: "716f6a61-d399-4889-bfb0-d85a9ac44b35"
        } 

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.success) {
                setStatus("Mensagem enviada com sucesso!");
                setDatas({ name: "", email: "", message: ""});
            } else {
                setStatus("Ocorreu um erro. Tente novamente.");
            }
            } catch (error) {
            console.error(error);
            setStatus("Erro de conexão. Verifique sua internet.");
        }

    }

    return {
        handleChange,
        handleSubmit,
        status,
        data
    }
}