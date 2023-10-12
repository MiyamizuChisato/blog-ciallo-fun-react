import CialloHeader from "./components/CialloHeader.tsx";
import CialloBody from "./components/CialloBody.tsx";
import CialloFooter from "./components/CialloFooter.tsx";
import LoginModal from "../components/LoginModal.tsx";

export default function Layout() {
    return (
        <>
            <CialloHeader/>
            <CialloBody/>
            <CialloFooter/>
            <LoginModal/>
        </>
    )
}
