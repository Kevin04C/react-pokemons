import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SearchPokemon } from "../pages/SearchPokemon";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<SearchPokemon />} />

        <Route path="/*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};
