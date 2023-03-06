import React, { useState } from "react"
//import CountButton from "./CountButton/CountButton"
import {SearchBar, CountButton} from "./SearchBar/SearchBar"


const App = () => {
const [sth, setSth] = useState("currentCount")

    return (
        <div>
            <CountButton incrementBy={1} buttonColor = {"lightblue"} />
            <CountButton incrementBy={5} buttonColor = {"pink"}/>
        
        
            <SearchBar CountButton setSth = {setSth}/>
        </div>
    )
    }  
  
export default App