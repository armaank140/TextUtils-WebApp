import React, {useState} from 'react'

export default function TextForm(props) {
  
    const handleUpperClick = ()=>{
   // console.log("upper case was clicked"+ Text);
   if(Text.length===0){
    props.showAlert("Please enter your text in text area!","danger");

   }
   else{
    let newText= Text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case!","success");
   }
}
   const handleLCaseClick = ()=>{
    // console.log("upper case was clicked"+ Text);
    if(Text.length===0){
        props.showAlert("Please enter your text in text area!","danger");
    
       }
       else{
    let newText= Text.toLocaleLowerCase();
     setText(newText)
     props.showAlert("Converted to lower case!","success");

    }
}
    const handleLClearClick = ()=> {
        if(Text.length===0){
            props.showAlert("Please enter your text in text area!","danger");
        
           }
           else{
        let newText = "";
        setText(newText)
        props.showAlert("Text is cleared","success");

    }
}
     const handleExtraSpaces = ()=>{
        if(Text.length===0){
            props.showAlert("Please enter your text in text area!","danger");
        
           }
           else{
        let newText = Text.split(/[ ]+/);
         setText(newText.join (" "))
         props.showAlert("Extra spaces Removed","success");

     }
    }
    const handleCopy = ()=>{
        if(Text.length===0){
            props.showAlert("Please enter your text in text area!","danger");
        
           }
           else{
        // let Text = document.getElementById("myBox");
        // Text.select();
        navigator.clipboard.writeText(Text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to clipboard","success");

    }
}  
   

   const handleOnchange = (event)=>{
    //console.log("On Change");
    setText(event.target.value)
   }


    const [Text, setText] = useState("");

    return (
        <>
         <div className="container mb-3 my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handleOnchange}  
                style={{backgroundColor:props.mode==='dark' ? 'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea>
             </div>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpperClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLCaseClick} >Convert to Lowercase</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Space</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
                <button type="button" className="btn btn-primary mx-1 my-1" onClick={handleLClearClick} >Clear Text</button>

         </div>
                <div className="container"style={{color:props.mode==='dark' ? 'white':'#042743'}}>
                    <h2> Your Text Summery </h2>
                    <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {Text.length} Charachters</p>
                    <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                    <h2>Preview</h2>
                    <p>{Text.length>0? Text :'Nothing to Preview!'}</p>

                </div>

       </> 
  )
}
