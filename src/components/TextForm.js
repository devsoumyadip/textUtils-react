import React, {useState} from 'react'

export default function TextForm(props) {

    //handling upper case 
    const handleUpClick=()=>{
        // console.log("up click pressed"+text)
        let newText=text.toLocaleUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase","success")
    }
    //handling lowercase
    const handleLoClick=()=>{
        // console.log("up click pressed"+text)
        let newText=text.toLocaleLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }
    //handling clear
    const handleClear=()=>{
        let newText=''
        setText(newText)
        props.showAlert("text removed","warning")
    }
    //handling reverse
    const handleRev=()=>{
        let newText=''
        for (let index = text.length-1; index >=0 ; index--) {
         newText+=text[index]
          
        }
        setText(newText)
        props.showAlert("Text reversed","success")
    }
    //handling copy
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied","success")
    }
    //handling remove extra spaces
    const handleRemExtraSpace=()=>{
       let newText=text.split(/[ ]+/)
       setText(newText.join(" "))
       props.showAlert("Extra spaces removed","success")
    }
    //handle on change
    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const[text,setText]=useState("Enter text here")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea name="" id="myBox" className="form-control" style={{backgroundColor:props.mode==='dark'?'#11121e':'white',color:props.mode==='dark'?'white':'black'}} rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>To Uppercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>To Lowercase</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleRev}>Reverse Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2 my-1" onClick={handleRemExtraSpace}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(".").length} sentences</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Write something to preview it'}</p>
    </div>
    </>
  )
}
