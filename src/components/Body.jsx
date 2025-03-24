import { createBrowserRouter } from "react-router-dom";
import { Browse } from "./Browse";
import { Login } from "./Login"

//1. Create browserRounter for Login and Browse components.
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/browse",
        element: <Browse />
    }
]);
//2. Use RouterProvider to provide the router to the components.

export const Body = () => {
    return (
    <>
    <Login />
    <Browse />
    </>
    );
}