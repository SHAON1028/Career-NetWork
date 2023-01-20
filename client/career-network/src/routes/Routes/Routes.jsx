import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Jobs from "../../Pages/Jobs/Jobs";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Deshbord from "../../Pages/Deshbord/Deshbord";
import CreateJob from "../../Pages/Deshbord/Createjob/CreateJob";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/category/:name',
                element:<Jobs></Jobs>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.name}`)
            }
        ]
    },
    {
        path:"/deshbord",
        element: <Deshbord></Deshbord>,
        children:([
            {
                path: "/deshbord",
                element:<CreateJob></CreateJob>
            }
        ])
    }
])

export default router;