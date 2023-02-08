import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Jobs from "../../Pages/Jobs/Jobs";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Deshbord from "../../Pages/Deshbord/Deshbord";
import UnderDeshbord from "../../Pages/Deshbord/UnderDeshbord/UnderDeshbord";
import Inbox from "../../Pages/Deshbord/Inbox/Inbox";
import Recruitments from "../../Pages/Deshbord/Recruitments/Recruitments";
import Employess from "../../Pages/Deshbord/Employees/Employess";
import Reports from "../../Pages/Deshbord/Reports/Reports";
import Setting from "../../Pages/Deshbord/Setting/Setting";
import CreateJob from "../../Pages/Deshbord/Recruitments/Createjob/CreateJob";
import EmployeeDeshbord from "../../Pages/EmployeeDeshbord/EmployeeDeshbord";
import EmployeeDetails from "../../Pages/EmployeeDeshbord/EmployeeDetails/EmployeeDetails";
import ResumeManager from "../../Pages/EmployeeDeshbord/ResumeManager/ResumeManager";
import EmployeJobs from "../../Pages/EmployeeDeshbord/EmployeJobs/EmployeJobs";
import MyAccount from "../../Pages/EmployeeDeshbord/MyAccount/MyAccount";
import AdminDeshbord from "../../Pages/Admin/AdminDeshbord";
import AdminData from "../../Pages/Admin/AdminData/AdminData";
import JobPage from "../../Pages/JobPage/JobPage"
import RecruiteTable from "../../Pages/Admin/UserTabel/RecruiteTable";
import JobSeekerTabel from "../../Pages/Admin/UserTabel/JobSeekerTabel";
import AdminTable from "../../Pages/Admin/UserTabel/AdminTable";
import DisplayError from "../../Pages/DisplayError/DisplayError";
import JobDetails from "../../Pages/Jobs/JobDetails";
<<<<<<< HEAD
import AdminRoute from "../../PrivateRoute/AdminRoute";
import Profile from "../../Pages/Profile/Profile";
import ContactWithEmail from "../../Pages/ContactUs/ContactWithEmail";

=======
import ContactWithEmail from "../../Pages/ContactWithEmail/ContactWithEmail";
>>>>>>> 4a6af1b0a7791d615472d7e3be058504a43b98ac


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
<<<<<<< HEAD
                path:'/contact/email',
                element:<ContactWithEmail></ContactWithEmail>
=======
                path: '/contact/email',
                element: <ContactWithEmail></ContactWithEmail>
>>>>>>> 4a6af1b0a7791d615472d7e3be058504a43b98ac
            },
            {
                path: '/category/:name',
                element: <Jobs></Jobs>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path: '/alljobs',
                element: <JobPage></JobPage>,
                loader: () => fetch('http://localhost:5000/alljobs')
            },
            {
                path: '/jobdetails/:jobId',
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/alljobs/${params.jobId}`)
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Deshbord></Deshbord>,
        errorElement: <DisplayError></DisplayError>,
        children: ([
            {
                path: "/dashboard",
                element: <UnderDeshbord></UnderDeshbord>
            },
            {
                path: "/dashboard/inbox",
                element: <Inbox></Inbox>
            },
            {
                path: "/dashboard/recruitment",
                element: <Recruitments></Recruitments>,
            },
            {
                path: "/dashboard/recruitment/createjob",
                element: <CreateJob></CreateJob>
            },
            {
                path: "/dashboard/employees",
                element: <Employess></Employess>
            },
            {
                path: "/dashboard/reports",
                element: <Reports></Reports>
            },
            {
                path: "/dashboard/setting",
                element: <Setting></Setting>
            }
        ])
    },
    {
        path: "/employedashboard",
        element: <EmployeeDeshbord></EmployeeDeshbord>,
        errorElement: <DisplayError></DisplayError>,
        children: ([
            {
                path: "/employedashboard",
                element: <EmployeeDetails></EmployeeDetails>
            },
            {
                path: "/employedashboard/resumemanager",
                element: <ResumeManager></ResumeManager>
            },
            {
                path: "/employedashboard/employejobs",
                element: <EmployeJobs></EmployeJobs>
            },
            {
                path: "/employedashboard/myaccount",
                element: <MyAccount></MyAccount>
            },
        ])
    },
    {
        path: "/admin",
        element: <AdminDeshbord></AdminDeshbord>,
        errorElement: <DisplayError></DisplayError>,
        children: ([
            {
                path: "/admin",
                element:<AdminData></AdminData>
            },
            {
                path:"/admin/recruiter",
                element:<RecruiteTable></RecruiteTable>
            },
            {
                path: "/admin/jobseerker",
                element:<JobSeekerTabel></JobSeekerTabel>
            },
            {
                path: "/admin/admintable",
                element:<AdminRoute><AdminTable></AdminTable></AdminRoute>
            }
        ])
    }
])

export default router;