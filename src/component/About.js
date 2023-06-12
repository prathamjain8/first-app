import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({      //making a state
    //     color: 'black',
    //     backgroundColor: 'white'            //this will be the initial style of the variable
    // });
    // const [btntext, setBtnTxt] = useState("Enable dark mode");
    let myStyle =
    {
        color : props.mode==='dark'?'white':'#212529',
        backgroundColor : props.mode==='dark'?'#212529':'white',
        // border: '1px solid',
        // borderColor: props.mode==='dark'?'white':'#212529',
    }
    
    // const toggleStyle = () => 
    // {
    //     if(myStyle.color === 'white')
    //     {
    //         setMyStyle({   
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnTxt("Enable dark mode")
    //         document.getElementById("p-btn").classList.remove("btn-primary");
    //         document.getElementById("p-btn").classList.add("btn-dark");
    //     }
    //     else{
    //         setMyStyle({   
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         document.getElementById("p-btn").classList.remove("btn-dark");
    //         document.getElementById("p-btn").classList.add("btn-primary");
    //         setBtnTxt("Enable light mode")
    //     }
    // }


    return (
        <div className='container'>
            <h1 className='my-3' style={{color : props.mode==='dark'?'white':'#212529'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                          TextEditor give you the way to analyze your text quickly and efficiently, be it a word count or a character count
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                           TextEditor is a free character counter tool that provides instant character count  word count statistics for a given text. TextEditor reports the number of words and characters. thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This TextEditor software works in any web browser such as chrome, firefox, opera, safari, internet explorer. It suits to count characters in facebook, blogs, books, excel, document, pdf document etc.
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="container">   
            <button onClick={toggleStyle} type="button" id='p-btn' className='btn btn-dark my-3'>{btntext}</button>
            </div> */}
        </div>
    )
}
