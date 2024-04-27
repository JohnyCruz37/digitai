import "./CompKeyboard.css"
import {useState, useEffect} from "react";
import AtomButton from "../../Atoms/AtomButton/AtomButton";
import bntData from "../../assets/buttons.json"
function CompKeyboard() {
    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        setButtons(bntData);
    }, []);
    return (
        <div className="keyboard">
                {buttons.map((button, index) => {
                    return (
                        <AtomButton key={index} 
                        capital={button.capitalLetter} 
                        lowercase={button.lowerCase} 
                        special={button.specialCharacter}/>
                    )
                })}
        </div>
    )
}
  
export default CompKeyboard;
  