import "./SequenceLetters.css";

//hooks
import {useState, useEffect} from "react";
import CaptureChar from "../../../Hooks/CaptureChar";

// lista de letras
const list_letters = [" "," ","f", "j", "f", "j", "f", "j", "f", "j", "f"]

function SequenceLetter() {
    const [letters, setLetters] = useState([]);
    const [character, setCharacter] = useState(null);
    const char = CaptureChar();

    useEffect(() => {
        setLetters(list_letters);
        // const handleLetters = () => {
        //     const newLetters = [...letters];
        //     if (newLetters.length > 5) {
        //         newLetters.shift();
        //     } else if (newLetters.length <= 5) {
        //         newLetters.push(" ");
        //     }
        //     setLetters(newLetters);
        // };
    }, [letters]);

    useEffect(() => {
        setCharacter(letters[2]);
    }, [letters]);
    
    return (
        <article className="sequence-letters">
            {
                letters.slice(0,5).map((letter, index) => {
                    return (
                        <span key={index}>{letter}</span>
                    )
                })
            }
        </article>
    )
}
  
export default SequenceLetter;