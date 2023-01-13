import React from "react";
import {Route, Routes} from "react-router-dom";
import Welcome from "./welcome";


const App = () =>{
    return (
        <Routes>
            <Route path={""} element={<Welcome/>}/>
        </Routes>
    )
}

export default React.memo(App);