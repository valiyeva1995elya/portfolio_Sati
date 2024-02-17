import { createBrowserRouter } from "react-router-dom"
import {  Main, ErrorPage, Portfolio, Contact,Photo } from "./components"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage />,
    },
    
    {
        path: "/portfolio",
        element: <Portfolio/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/portfolio/:img",
        element: <Photo/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contact",
        element: <Contact /> ,
        errorElement: <ErrorPage />,
        
    }
])
export default router;