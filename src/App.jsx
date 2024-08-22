import Header from "./components/Header/Header.jsx";
import Footer from './components/Footer/Footer.jsx'
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/home", element: <Home />},
    {path: "/shop", element: <Shop />}
]);

export default function App(){
    return <>  
        <Header />

        <RouterProvider router={router} />

        <Footer />
    </>
}