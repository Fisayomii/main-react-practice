import React, { Component, useState } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";


function CountButton(props) {
    const [currentCount, setCurrentCount] = useState(0)


    const handleClick = function () {
        setCurrentCount(currentCount + props.incrementBy)
        
        
    }

    const buttonStyles = {
        background: props.buttonColor,
    }
    console.log(currentCount)
   
    return (

        <div>
            <button style={buttonStyles}
                onClick={handleClick}> + {props.incrementBy} 
            </button>
            <div className="count-display">{currentCount}</div>
            <div><button
            state ={ {currentCount:currentCount} }>Enter</button></div>
        </div>
    )
}


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
        
    }
    const handleClearClick = () => {
        setSearchValue("")
        

    }

    /*const handleSubmit = (event) => {
        setData(event.target.value)
    }*/

    const shouldDisplayButton = searchValue.length > 0

    return <div>
        <form>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            {shouldDisplayButton && <button onClick={handleClearClick}>clear</button>}
            <br></br><button><Link to="success" 
            state={ { searchValue: searchValue} }
         >Submit</Link></button>
         
    </form>
    </div >

}

export { CountButton, SearchBar }
