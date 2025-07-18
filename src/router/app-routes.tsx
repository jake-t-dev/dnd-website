import PageNotFound from "@/pages/page-not-found";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Landing />} /> */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;