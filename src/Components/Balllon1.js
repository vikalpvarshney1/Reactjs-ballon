import React, { useState } from 'react'
import './balon.css'

const Balllon1 = () => {
    const [value, setvalue] = useState("")
    const [value1, setvalue1] = useState("")
    const handleSubmit = () => {
        if (value > 5 || value < 1) {
            alert('please enter a number 1 to 5')
        }
        else {
            document.getElementById(`circle-${value}`).style.display = "none"
            document.getElementById(`hide-${value}`).style.display = "block"
            setvalue("")
        };

    }

    const handleSubmit1 = () => {
        if (value1 > 5 || value1 < 1) {
            alert('please enter a number 1 to 5')
        }
        else {
            document.getElementById(`circle-${value1}`).style.display = "block"
            document.getElementById(`hide-${value1}`).style.display = "none"
            setvalue1("")
        };

    }

    const handle = (e) => {
        console.log(e.target.id);
        var val = e.target.id
        document.getElementById(`${val}`).style.display = "none"
        if (val == "hide-1") {
            document.getElementById(`circle-${1}`).style.display = "block"
        }
        if (val == "hide-2") {
            document.getElementById(`circle-${2}`).style.display = "block"
        }
        if (val == "hide-3") {
            document.getElementById(`circle-${3}`).style.display = "block"
        }
        if (val == "hide-4") {
            document.getElementById(`circle-${4}`).style.display = "block"
        }
        if (val == "hide-5") {
            document.getElementById(`circle-${5}`).style.display = "block"
        }
        // document.getElementById(`circle-${}`).style.display = "block"

    }

    return (
        <div>
            <div className="outercontainer">
                <div className="left">
                    <div style={{ marginLeft: "50px", fontWeight: "600" }}>empty div</div>
                    <div className="hide" onClick={(e) => handle(e)}>
                        <div
                            className='circle'
                            id='hide-1'
                            style={{ display: "none" }}
                        ></div>
                        <div
                            className='circle'
                            id='hide-2'
                            style={{ display: "none" }}
                        ></div>
                        <div
                            className='circle'
                            id='hide-3'
                            style={{ display: "none" }}
                        ></div>
                        <div
                            className='circle'
                            id='hide-4'
                            style={{ display: "none" }}
                        ></div>
                        <div
                            className='circle'
                            id='hide-5'
                            style={{ display: "none" }}
                        ></div>

                    </div>
                </div>
                <div className="center">
                    <div style={{ fontWeight: "600" }}>5 circles</div>
                    <div className="circle" id='circle-1'></div>
                    <div className="circle" id='circle-2'></div>
                    <div className="circle" id='circle-3'></div>
                    <div className="circle" id='circle-4'></div>
                    <div className="circle" id='circle-5'></div>
                </div>
                <div className='inputbox'>

                    <input type="number"
                        id='number'
                        placeholder='5 circle'
                        value={value}
                        onChange={(e) => {
                            setvalue(e.target.value)
                        }}
                    />
                    <button
                        className='submit'
                        onClick={handleSubmit}
                        style={{ padding: "4px" }}
                    > &#128165; shoot 5 circles  &#128165;</button>
                    <br />

                    <input type="number"
                        id='number'
                        placeholder='Empty div'
                        value={value1}
                        onChange={(e) => {
                            setvalue1(e.target.value)
                        }}
                    />
                    <button
                        className='submit'
                        onClick={handleSubmit1}
                        style={{ padding: "4px" }}
                    > &#128165; shoot empty div &#128165;</button>


                </div>

            </div>


        </div>
    )
}

export default Balllon1