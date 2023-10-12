import {Navbar} from "@nextui-org/react";
import {useReducer} from "react";
import Domain from "./Domain.tsx";
import Menu from "./Menu.tsx";
import Setting from "./Setting.tsx";

export default function CialloHeader() {
    const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);
    return (
        <Navbar maxWidth="xl" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered>
            <Domain/>
            <Menu setIsMenuOpen={setIsMenuOpen}/>
            <Setting/>
        </Navbar>
    )
}
