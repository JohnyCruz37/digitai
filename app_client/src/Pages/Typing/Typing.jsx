import "./Typing.css"
import CompKeyboard from "../../Componets/CompKeyboard/CompKeyboard";

function Typing() {
    return (
        <main className="Typing">
            <section className="Typing-dashboard">
                <h3>Painel</h3>
            </section>
            <section className="Typing-keyboard">
                <CompKeyboard/>
            </section>
        </main>
    )
}
  
export default Typing;