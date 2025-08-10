import {Routes, Route } from "react-router-dom"
import { ContainerLogin } from "../views/Login"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<inicio />} />
            <Route path="/login" element={<ContainerLogin />} />
            <Route path="/archivo" element={<archivo />} />
        </Routes>
    )
}
export {Router}