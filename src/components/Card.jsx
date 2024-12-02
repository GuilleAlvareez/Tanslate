import { useContext, useEffect, useRef, useState } from "react"
import { IconTranslate, IconCopy } from "./Icons"
import { Languajes } from "../contexts/Languajes"

export function Card() {
    const languajes = ["English", "French", "Spain"]
    const textToTranslate = useRef(null)
    const [text, setText] = useState('')
    const { languajesSelected, setLanguajesSelected, userWantTranslate } = useContext(Languajes)

    const changeText = (event) => {
        setText(event.target.value)
    }

    useEffect(() => {
        setLanguajesSelected((prevState) => ({
            ...prevState,
            msg: textToTranslate.current.value
        }))
    }, [text])

    const languajeChange = (languajeCode) => {
        setLanguajesSelected(prevState => ({
            ...prevState,
            src: languajeCode,
        }));
    };

    const copyClipboard = () => {
        const text = textToTranslate.current.value 

        if (text.trim() !== "") {
            navigator.clipboard.writeText(text)
                .then(() => { console.log("copiado") })
                .catch(() => { console.log("error") })
        }
    }

    return (
        <article className="flex flex-col relative bg-fondoCard bg-opacity-60 h-72 w-2/5 border-white border rounded-3xl backdrop-blur-md px-9 py-6">
            <ul className="h-10 flex justify-start items-center gap-8 mb-2">
                {
                    languajes.map((languaje, index) => {
                        const languajeCode = languaje === 'English' ? 'en' : languaje === 'French' ? 'fr' : 'es';
                        return (
                            <li key={index}>
                                <button 
                                    onClick={() => languajeChange(languajeCode)} 
                                    className={`${ languajeCode !== languajesSelected.src ? 
                                        `text-letraIdioma font-semibold rounded-xl px-3 py-2 hover:text-white hover:bg-grisClarito transition-all ease-linear duration-100` : 
                                        `text-white bg-grisClarito font-semibold rounded-xl px-3 py-2 transition-all ease-linear duration-100` }`}>
                                    {languaje}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

            <div className='border-linea border-t w-full mb-5' />

            <form className="flex-grow">
                <textarea onChange={changeText} ref={textToTranslate} placeholder="Type or paste the text here" className="bg-transparent h-full text-white font-semibold resize-none w-full"/>
            </form>

            <div className="flex justify-between items-center mt-3">
                <button onClick={copyClipboard} className="h-10 w-10 hover:bg-grisClarito flex items-center justify-center transition-all duration-100 ease-linear rounded-xl">
                    <IconCopy/>
                </button>
            </div>
        </article>
    )
}
