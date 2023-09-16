import { useState } from "react";
const TextForm = (props)=>{

    const [text, setText] = useState("");  // Initial text is empty. This state will handle the text in required way or form

    const handelOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        let newtext =text.toUpperCase();
        setText(newtext);
        props.showAlert("Text is converted into UpperCase !", "success");
    }

    const handleLoClick = ()=>{
        let newtext =text.toLowerCase();
        setText(newtext);
        props.showAlert("Text is converted into LowerCase !", "success");
    }

    const handleClearClick = ()=>{
        let newtext = "";
        setText(newtext);
        props.showAlert("Text is Cleared !", "success");
    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text is Copied !", "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);   // It will return an array of words that will store at newtext. It will split the text when one or more spaces will come
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been removed !", "success");
    }
    return(
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white':"#042743"}}>
                <h2 className="mb-4">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode === 'dark'?'#042743':'white', color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
            </div>
            <div className="container my-3" style={{color:props.mode === 'dark'?'white':"#042743"}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((Element)=>{return Element.length !==0}).length} words and {text.length} characters</p>
                <p>{0.008* (text.split(" ").filter((Element)=>{return Element.length !==0}).length)} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
        </>
    );
}
export default TextForm;