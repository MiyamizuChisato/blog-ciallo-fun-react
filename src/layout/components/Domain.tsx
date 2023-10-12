import {NavbarContent, NavbarMenuToggle} from "@nextui-org/react";
import Ciallo from "../../components/Ciallo.tsx";

export default function Domain() {
    return (
        <NavbarContent justify="start">
            <NavbarMenuToggle className="block md:hidden"/>
            <Ciallo/>
        </NavbarContent>
    )
}
