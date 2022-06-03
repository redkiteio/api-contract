import "./App.css";
import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import View from "./pages/view/View";
import Create from "./pages/create/Create";
import Modal from "./components/modal/Modal";
import Loading from "./components/loading/Loading";

function App() {
    return (
        <Typography component="div">
            <Modal />
            <Loading />
            <Routes>
                <Route path="/" element={<Create />} />
                <Route path="/edit/:id" element={<Create />} />
                <Route path="/view" element={<View />} />
                <Route path="/view/:id" element={<View />} />
                <Route path="*" element={<Typography component="div"> PAGE NOT FOUND </Typography>} />
            </Routes>
        </Typography>
    );
}

export default App;
