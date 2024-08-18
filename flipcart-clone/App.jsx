import React from "react";
import Homepage from "./src/pages/Homepage";
import Loginpage from "./src/pages/Loginpage";
import { BrowserRouter , Routes, Route } from "react-router-dom";

const App =()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/homepage" element={<Homepage/>} />
            <Route  path="/login" element={<Loginpage/>} />
        </Routes>
        </BrowserRouter>
        
        
        </>
    );
};

export default App;