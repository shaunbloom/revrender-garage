import React from "react";
import { Logo, NavBarContainer, NavWrapper, NavLink, PurchaseBanner, SubMenuWrapper } from "./layout";

const Navigation = ({
    children,
    currentView,
    fixed = true,
    onNavClick,
    showLogo,
    setShowSubMenu,
    product,
}) => {

const products = ["BLINKER_MOUNTS",
         "FUEL_PUMP_MOUNT",
         "BRAKE_LIGHT_RELOCATION_ADAPTOR",
         "RUCKUS_FRONT_BLINKER_MOUNTS",
         "RUCKUS_SINGLE_BLINKER_MOUNTS",
         "RUCKUS_DOUBLE_BLINKER_MOUNTS",
         "RUCKUS_SIDE_CAPS",
         "RUCKUS_RINGS",
         "HEADLIGHT_MOUNT",
         "SPEEDO_CASE",
         "SPEEDO_MOUNTS",
         "SPEEDO_CONVERSION",
         "SPEEDO_WIRE_HARNESS"
];

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

    const subLinksArr = ["SPEEDO_CONVERSION", "SPEEDO_CASE", "SPEEDO_WIRE_HARNESS", "SPEEDO_MOUNT", "BLINKER_MOUNTS"];

    const setClassName = (link) => {
        const found = subLinksArr.includes(currentView);
        if (link.value === "PRODUCTS" && found || currentView == link.value) {
           return "underline"
        }
    }

    const showBanner = () => {
        if (currentView == "SPLASH" || currentView === "PRODUCTS" || currentView === "MISSION" || currentView === "BIOS") {
            return false;
        }
        if (product && !products.indexOf(product) >= 0) {
            return false;
        }
        return true;
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
            { showBanner() && <PurchaseBanner>Purchases can be made through Venmo or Zelle. Please email us at <a>RevRenderGarage@gmail.com</a> or <a href="https://www.facebook.com/RevRenderGarage/" target="_blank">Message us on Facebook.</a></PurchaseBanner> }
        </NavWrapper>
      </>
    );
};

export default Navigation;