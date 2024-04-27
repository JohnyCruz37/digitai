import { useEffect, useState } from "react";

function CaptureChar() {
    const [keyPressed, setKeyPressed] = useState(null);

    useEffect(() => {
        function handleKeyDown(e) {
            setKeyPressed(e.key);
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return keyPressed;
}

export default CaptureChar;
