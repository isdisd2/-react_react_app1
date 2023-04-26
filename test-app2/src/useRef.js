import { useRef, useState } from "react";

const UseRef1 = (props) => {
    const refInput = useRef(null);
    const [inputVal, setInputVal] = useState("");

    function handleClick() {
        refInput.current.focus();
        inputVal && setInputVal("type again");
    }
    function handleChange(val) {
        setInputVal(val);
    }
    return (
        <>
            <input
                ref={refInput}
                onChange={(e) => handleChange(e.target.value)}
                value={inputVal}
            />
            <button className="btn" onClick={handleClick}>Set focus & clear </button>
            {" " + inputVal}
        </>
    );
};
export default UseRef1;
