import {useLocation} from "react-router-dom";
import {JSX, useLayoutEffect} from "react";

export default function ScrollController({children}: { children: JSX.Element }) {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({top: 0, left: 0})
    }, [location.pathname]);
    return children
}
