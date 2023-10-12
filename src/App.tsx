import {useRoutes} from "react-router-dom";
import routes from "./routes.tsx";
import "./i18n"

export default function App() {
    return useRoutes(routes)
}
