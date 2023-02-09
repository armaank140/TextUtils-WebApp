import React, {useState} from 'react'

export default function About() {

     const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
 })
 const [btnText, setBtnText] = useState("Enable Dark Mode")

 const toggleStyle = ()=>{
    if(myStyle.color ==='black'){
        setMyStyle({

            color: 'white',
            backgroundColor: 'black',
            border: '1px solid white'

        })
        setBtnText("Enable Light mode")
    }
    else{
        setMyStyle({

            color: 'black',
            backgroundColor: 'white'

        })
        setBtnText("Enable Dark mode")


    }
 }
        

  return (
            <div className='container my-3' style={myStyle}>
                <h1>About Us</h1>
            <div className="accordion" id="accordionExample" >
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Q: What is Text Utils?
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>A:</strong> Text Utils is a web application designed to simplify text editing and formatting tasks.
            </div>
            </div>
        </div>

        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Q: What kind of operations can be performed with Text Utils?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>A:</strong> Text Utils allows users to perform various operations such as text formatting, case conversion, and text manipulations such as removing duplicates, sorting, and more.
            </div>
            </div>
        </div>

        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Q: Who is Text Utils for?
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>A:</strong> Text Utils is for anyone who needs to quickly and easily format or manipulate text for various purposes, such as cleaning up data for analysis or formatting copy for publishing.
            </div>
            </div>
        </div>

        {/* <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Q: Is Text Utils user-friendly?
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>A:</strong> Yes, Text Utils has a user-friendly interface that makes it easy for users to perform various operations.
            </div>
            </div>
        </div> */}

        </div>
        <div className='container'>
        <button type="button"  onClick={toggleStyle} className="btn btn-primary my-2" >{btnText}</button>
        </div>
    </div>
  )
}
