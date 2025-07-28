import Character from "@/pages/character/character";
import Layout from "@/pages/character/layout/layout";
import Spells from "@/pages/character/spells/spells";
import Landing from "@/pages/landing";
import PageNotFound from "@/pages/page-not-found";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/character" element={<Layout />}>
          <Route index element={<Character />} />
          <Route path="inventory" element={<Spells />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
