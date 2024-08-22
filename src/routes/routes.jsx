import { lazy } from "react";

const Home = lazy(() => import("../pages/home/HomePage"))
const About = lazy(() => import("../pages/about/AboutPage"))
const CasesPage = lazy(() => import("../pages/casesPage/CasesPage"))
const NotFound = lazy(() => import("../pages/utils/NotFound"))
const Contact = lazy(() => import("../pages/contact/ContactPage"))
//ADMIN-ROUTES
const CategoryPage = lazy(() => import("../pages/adminPages/CategoryPage"))

const routes = [
    { path: '/', element: <Home /> },
    { path: '/nosotros', element: <About /> },
    { path: '/contacto', element: <Contact /> },
    { path: '/fastap-cases', element: <CasesPage /> },
    { path: "*", element: <NotFound /> },
    { path: '/adminInsano', element: <CategoryPage /> }

]

export default routes;