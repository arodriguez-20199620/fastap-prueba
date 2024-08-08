import { lazy } from "react";

const Home = lazy(() => import("../pages/home/Home"))
//const About = lazy(() => import("../pages/about/About"))
const CasesPage = lazy(() => import("../pages/casesPage/CasesPage"))
const NotFound = lazy(() => import("../pages/utils/NotFound"))
//ADMIN-ROUTES
const CategoryPage = lazy(() => import("../pages/adminPages/CategoryPage"))

const routes = [
    { path: '/', element: <Home /> },
   // { path: '/about', element: <About /> },
    {path: '/fastap-cases', element: <CasesPage/>},
    { path: "*", element: <NotFound /> },
    {path: '/adminInsano', element: <CategoryPage/>}

]

export default routes;