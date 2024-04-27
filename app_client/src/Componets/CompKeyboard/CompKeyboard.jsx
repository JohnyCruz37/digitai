import "./CompKeyboard.css"
import {useState, useEffect} from "react";
import CaptureChar from "../../Hooks/CaptureChar";
import AtomButton from "../../Atoms/AtomButton/AtomButton";
import bntData from "../../assets/buttons.json";
function CompKeyboard() {
    const [buttons, setButtons] = useState([]);
    const char = CaptureChar();
    useEffect(() => {
        setButtons(bntData);
    }, []);
    return (
        <div className="keyboard">
                {buttons.map((button, index) => {
                    const isPressed = button.lowerCase === char ||
                                    button.capitalLetter === char ||
                                    button.specialCharacter === char;
                    return (
                        <AtomButton key={index} 
                        capital={button.capitalLetter} 
                        lowercase={button.lowerCase} 
                        special={button.specialCharacter}
                        pressed={isPressed? 'pressed' : ''}
                        />
                    )
                })}
        </div>
    )
}
  
export default CompKeyboard;
  