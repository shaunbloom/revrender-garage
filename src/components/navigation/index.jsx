import React from "react";
import { Logo, NavBarContainer, NavWrapper, NavLink, SubMenuWrapper } from "./layout";

const Navigation = ({
    children,
    currentView,
    fixed = true,
    onNavClick,
    showLogo,
    setShowSubMenu,
}) => {
    console.log("showLogo: ", showLogo);
    const navLinks = [
        { label: "Mission", value: "MISSION", mouseIn: () => null, mouseOut: () => null },
        { label: "Bios", value: "BIOS", mouseIn: () => null, mouseOut: () => null },
        {
            label: "Products",
            value: "PRODUCTS",
            mouseIn: () => setShowSubMenu(true),
            mouseOut: () => null
        },
    ];

    const subLinksArr = ["SPEEDO_CONVERSION", "SPEEDO_CASE", "SPEEDO_WIRE_HARNESS", "SPEEDO_MOUNT", "BLINK_MOUNTS"];

    const setClassName = (link) => {
        const found = subLinksArr.includes(currentView);
        if (link.value === "PRODUCTS" && found || currentView == link.value) {
           return "underline"
        }
    }

    return (
        <>
        {showLogo && <Logo onClick={() => onNavClick("SPLASH")} />}
        <NavWrapper fixed={fixed}>
            <NavBarContainer>
            {navLinks.map((link, index) => (
                <NavLink
                    className={setClassName(link)}
                    key={index}
                    onClick={() => {
                        onNavClick(link.value);
                        setShowSubMenu(false);
                    }}
                    onMouseOver={() => link.mouseIn(true)}
                    onMouseOut={() => {
                        if (currentView === "SPLASH" && link.value !== "PRODUCTS") {
                            setShowSubMenu(false);
                        }
                    }}
                >
                    {link.label}
                </NavLink>
            ))}
            <SubMenuWrapper>{children}</SubMenuWrapper>
            </NavBarContainer>
        </NavWrapper>
      </>
    );
};

export default Navigation;
