import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produto from "../Pages/Produto.jsx";
import NavBar from "../Pages/home.jsx";
import CardProduto from "../Pages/CardProduto.jsx";


export function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />} />
                <Route path="/produto" element={<Produto />} />
                <Route path="/CardProduto" element={<CardProduto />} />
            </Routes>
        </BrowserRouter>
    );
}
