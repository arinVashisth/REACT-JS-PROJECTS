import React,{ useState } from 'react'

export default function Textutils(props) {
    const [text,setText] = useState("")
    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = ()=>{
        setText("");
        props.showAlert("Text Cleared!", "success");
    }
    return (
        <>
        <div className="container my-3" style={{backgroundColor : props.mode==='light'?'dark':'light', color:props.mode=== 'dark'?'white': 'black'}}>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" style={{backgroundColor : props.mode==='light'?'light':'dark', color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>LowerCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
        </div>
        <div className="container" style={{backgroundColor : props.mode==='light'?'dark':'light', color:props.mode=== 'dark'?'white': 'black'}}>
            <h2>Text Length:{text.length}</h2>
        </div>
        </>
    )
}