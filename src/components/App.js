import React from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"


const App = () => {
    return (
        <div>
            <CountButton incrementBy={1} buttonColor = {"lightblue"}/>
            <CountButton incrementBy={5} buttonColor = {"pink"}/>
        
        
            <SearchBar />
        </div>
    )
  }
  
export default App