import { createBrowserRouter } from "react-router-dom"
import {  Main, Information, ErrorPage, Portfolio, Contact } from "./components"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/information",
        element: <Information/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/portfolio",
        element: <Portfolio/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contact",
        element: <Contact /> ,
        errorElement: <ErrorPage />,
        
    }
])
export default router;