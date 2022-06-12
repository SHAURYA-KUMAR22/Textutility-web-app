import React, {useState} from 'react'




export default function TextForm(props) {
    // to use states in function components
    const handleUpClick=()=>{
        //console.log("upper case clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleoClick=()=>{
        //console.log("upper case clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handlClearClick=()=>{
        //console.log("upper case clicked"+ text);
        let newText='';
        setText(newText);
    }
    const handleOnChange=(event)=>{
        //console.log(" on change");
        setText(event.target.value);//make current written value visible
    }
    const handleCopy=()=>{
        //console.log("copy");
        //var text=document.getElementById("myBox");
        //text.select();
        //document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);//text.value if above things used
        props.showAlert("copied to clpboard","success")

    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] =useState('');//default value to store in text variable
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#2d1f1f'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
    color: props.mode==='dark'?'white':'#2d1f1f'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleoClick}>convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy paste</button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleExtraSpaces}>remove extra space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#2d1f1f'}}>
        <h2>your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>preview</h2>
        <p><b> {text.length>0?text:"Enter something in text box to preview it here"} </b></p>

    </div>
    </> 
  )
}
//no of words
//color palet dark modes
