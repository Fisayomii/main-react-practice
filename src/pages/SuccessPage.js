import React from "react";
import { useLocation } from "react-router-dom";

function SuccessPage() {
    const location = useLocation();
    const currentCount = location.state?.currentCount;
    const searchValue = location.state?.searchValue;
    console.log(currentCount)

    

    return (
        <p>{searchValue ? searchValue: "go home"}
        {currentCount ? currentCount: ""}
        </p>
        
      //<div>Success
        //    <p>{ data ? data.text: searchValue}</p>
        //</div>
     
    )
       
}
 


export default SuccessPage