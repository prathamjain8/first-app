import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!" ,"Success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase!" ,"Success");
    }
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared!" ,"Success");
    }
    const copyText = () => 
    {
        // let text = document.getElementById('my-box');   this is not needed because of the navigator Api we used
        // text.select();
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Text is copied to clipboard!" ,"Success");
    }

    const handleExtraSpaces = () =>
    {
        let newText = text.split(/[]+/);
        setText(newText.join(" "));
        props.showAlert("No extra spaces will be there!" ,"Success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // text = "hello"; wrong way to change the state
    // settext("Enter the text you want to edit") //this is the correct way to change the state

    return (
        <>
            <div className='container' style ={{color: props.mode==='dark'?'white':'#212529'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style ={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'#212529'}} value={text} id="my-box" rows="8"></textarea>
                    <button disabled={text.length===0} className={`btn btn-${props.mode === 'dark'?'light':'dark'} my-3 mx-2`} onClick={handleUpClick} >Convert to Uppercase</button>
                    <button className={`btn btn-${props.mode === 'dark'?'light':'dark'} my-3 mx-2`} disabled={text.length===0} onClick={handleLoClick} >Convert to Lowercase</button>
                    <button className={`btn btn-${props.mode === 'dark'?'light':'dark'} my-3 mx-2`} disabled={text.length===0} onClick={clearText} >Clear the text</button>
                    <button className={`btn btn-${props.mode === 'dark'?'light':'dark'} my-3 mx-2`} disabled={text.length===0} onClick={copyText} >Copy text</button>
                    <button className={`btn btn-${props.mode === 'dark'?'light':'dark'} my-3 mx-2`} disabled={text.length===0} onClick={handleExtraSpaces} >Remove extra spaces</button>
                </div>
            </div>
            <div className="container my-3" style ={{color: props.mode==='dark'?'white':'#212529'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} charcters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes to read the words</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!!"}</p>
            </div>
        </>
    )
}
