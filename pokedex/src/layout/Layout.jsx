import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )

}