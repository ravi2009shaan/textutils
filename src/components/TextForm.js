import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase", "success")
    }

    const handleLoClick = ()=>{
        // console.log("clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }

    const captialFirstWord = ()=>{
        
        let newText="";
        let str="";
       for(let i=0; i < text.length; i++){
          
            if(text.charAt(i)==="."){
               str= text.charAt(i+2).toUpperCase();
               newText +=". ";
               newText += str;
               i +=2;
            }
           else{
           newText += text.charAt(i);
           }
    
           
       }
       setText(newText);
        
      
    }

    const handleOnChange = (event)=>{
        // console.log("clickeddfdf");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className ="container" style={{color:props.mode === 'dark'? 'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white':'#042743' }} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={captialFirstWord}>Captial First Word</button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'? 'white':'#042743'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
