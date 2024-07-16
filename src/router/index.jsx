import { Route, Routes } from "react-router-dom"
import { Home } from "../HomeLayout"
import { Dashboard } from "../components/Dashboard"

export const RouterComponent = ()=>{
    return(
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="/dashboard" element = {<Dashboard/>}/>
            <Route path="/reportmanage" element = {<Home/>}/>
        </Routes>
    )
}