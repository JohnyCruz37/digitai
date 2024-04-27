import "./Typing.css"
import CompKeyboard from "../../Componets/CompKeyboard/CompKeyboard";
import SequenceLetter from "../../Componets/CompKeyboard/SequenceLetters/SequenceLetters";

function Typing() {
    return (
        <main className="Typing">
            <section className="Typing-dashboard">
                <h3>Painel</h3>
                <SequenceLetter/>
            </section>
            <section className="Typing-keyboard">
                <CompKeyboard/>
            </section>
        </main>
    )
}
  
export default Typing;