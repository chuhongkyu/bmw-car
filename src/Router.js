import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";

function Router() {
    return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Router;