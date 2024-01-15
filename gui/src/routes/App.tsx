import { Route, Routes } from "react-router-dom";
import GetTb01 from "../pages/GetTb01";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import PostTb01 from "../pages/PostTb01";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tb01" element={<GetTb01 />} />
            <Route path="/tb01/create" element={<PostTb01 />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App;