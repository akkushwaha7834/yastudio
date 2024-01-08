import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChnage = ()=>{
        // console.log("On Chnage");
        setText(event.target.value);
    }
  return (
    <>
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <h3>{props.heading}</h3>
                    <div className="mb-3">
                        <textarea className="form-control" id="myBox" onChange={handleOnChnage} placeholder={text} value={text} rows="10"></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                        Convert to Uppercase
                    </button>
                    <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
                        Convert to Lower Case
                    </button>
                </div>
                <div className="col-md-6">
                    <h2 className="summary">
                        Text Summary
                    </h2>
                    <p>
                        {text.split(" ").length} words and {text.length} characters
                    </p>
                    <p>
                        {0.008 * text.split(" ").length} Minutes Read
                    </p>
                    <h3 className='preview'>
                        Preview
                    </h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    </>
  )
}
