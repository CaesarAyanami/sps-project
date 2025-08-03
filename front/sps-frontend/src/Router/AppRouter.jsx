import {Routes, Route } from "react-router"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<inicio />} />
            <Route path="/login" element={<login />} />
            <Route path="/archivo" element={<archivo />} />
        </Routes>
    )
}
export {Router}