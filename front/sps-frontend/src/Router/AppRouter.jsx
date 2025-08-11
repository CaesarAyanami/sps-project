import {Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { Archive } from "../views/Archive"


function AppRouter(){
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
        </Routes>
    )
}
export default AppRouter
