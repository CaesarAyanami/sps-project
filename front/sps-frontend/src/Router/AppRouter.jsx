import {Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { Archive } from "../views/Archive"
import { ContainerLogin } from "../views/Login"

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<ContainerLogin />} />
            <Route path="/archive" element={<Archive />} />
        </Routes>
    )
}
export default AppRouter
