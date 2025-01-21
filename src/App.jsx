import { useEffect } from "react";
import './App.css';
import Splash from "./views/splash/index.jsx";
import Products from "./views/products/index.jsx";
import Mission from "./views/mission/index.jsx";
import HeadlightMount from "./views/sub-products/headlight-mount/index.jsx";
import SpeedoConversion from "./views/sub-products/speedo-conversion/index.jsx";
import SpeedoCase from "./views/sub-products/speedo-case/index.jsx";
import SpeedoWireHarness from "./views/sub-products/speedo-wire-harness/index.jsx";
import BlinkerMounts from "./views/sub-products/blinker-mounts/index.jsx";
import RuckusPcvRings from "./views/sub-products/ruckus/pcv-rings/index.jsx";
import RuckusSideCaps from "./views/sub-products/ruckus/side-caps/index.jsx";
import RuckusDoubleBlinkerMounts from "./views/sub-products/ruckus/dbl-blinker-mounts/index.jsx";
import RuckusSingleBlinkerMounts from "./views/sub-products/ruckus/single-blinker-mounts/index.jsx";
import RuckusFrontBlinkerMounts from "./views/sub-products/ruckus/front-blinker-mounts/index.jsx";
import SpeedoMounts from "./views/sub-products/speedo-mounts/index.jsx";
import FuelPumpMount from "./views/sub-products/fuel-pump-mount/index.jsx";
import Navigation from "./components/navigation/index.jsx"
import Bios from "./views/bios/index.jsx";
import { useState } from "react";
import styled from "@emotion/styled";
import { NavLink, Spacer, SubHeader, SubLink, SubMenu } from "./components/navigation/layout/index.jsx";
import { NavLinkContainer, LeftSideLinks, RightSideLinks } from "./views/products/layout/index.jsx";

const ViewWrapper = styled.div`
    width: 100%;
    margin-top: 70px;
    height: calc(100vh);
`;

function App() {
    const [currentView, setCurrentView] = useState("SPLASH");
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        if (currentView === "SPLASH") {
            setShowLogo(false);
            setShowSubMenu(false);
        } else {
            setShowLogo(true);
        }
    }, [currentView]);

    const onSetCurrentView = (view) => {
        setCurrentView(view);
        setShowSubMenu(false);
    };

    const onNavClick = (view) => {
        setCurrentView(view);
    };

    const shouldUnderLine = (subView) => {
        if (currentView === subView) {
            return "underline";
        }
    }

    const renderView = () => {
        switch (currentView) {
        case "SPLASH":
            return <Splash onNavClick={onNavClick} />;
        case "MISSION":
            return <Mission onNavClick={onNavClick} />;
        case "BIOS":
            return <Bios onNavClick={onNavClick} />;
        case "PRODUCTS":
            return <Products setCurrentView={setCurrentView}/>;
        case "SPEEDO_CONVERSION":
            return <SpeedoConversion/>;
        case "SPEEDO_CASE":
            return <SpeedoCase/>;
        case "SPEEDO_WIRE_HARNESS":
            return <SpeedoWireHarness/>;
        case "BLINKER_MOUNTS":
            return <BlinkerMounts/>;
        case "RUCKUS_SIDE_CAPS":
            return <RuckusSideCaps/>;
        case "RUCKUS_RINGS":
            return <RuckusPcvRings/>;
        case "SPEEDO_MOUNTS":
            return <SpeedoMounts/>;
        case "RUCKUS_DOUBLE_BLINKER_MOUNTS":
            return <RuckusDoubleBlinkerMounts/>;
        case "RUCKUS_SINGLE_BLINKER_MOUNTS":
            return <RuckusSingleBlinkerMounts/>;
        case "RUCKUS_FRONT_BLINKER_MOUNTS":
            return <RuckusFrontBlinkerMounts/>;
        case "FUEL_PUMP_MOUNT":
            return <FuelPumpMount/>;
        case "HEADLIGHT_MOUNT":
            return <HeadlightMount/>;
        default:
            return <Splash onNavClick={onNavClick} />;
        }
  };

  return (
    <ViewWrapper>
      <Navigation
        currentView={currentView}
        onNavClick={onNavClick}
        showLogo={showLogo}
        setShowSubMenu={setShowSubMenu}
      >{showSubMenu && <SubMenu onMouseOut={() => setShowSubMenu(false)}>
          <NavLinkContainer onMouseOver={() => setShowSubMenu(true)}>
            <LeftSideLinks onMouseOver={() => setShowSubMenu(true)}>
            <SubHeader className="header" onMouseOver={() => setShowSubMenu(true)}>Maddog Gen 1</SubHeader>
                <SubLink className={shouldUnderLine("BLINKER_MOUNTS")} onClick={() => onSetCurrentView("BLINKER_MOUNTS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Double Blinker Mounts</SubLink>
                <Spacer onMouseOver={() => setShowSubMenu(true)}/>
            <SubHeader className="header" onMouseOver={() => setShowSubMenu(true)}>Maddog Gen 4 & 5</SubHeader>
                <SubLink className={shouldUnderLine("FUEL_PUMP_MOUNT")} onClick={() => onSetCurrentView("FUEL_PUMP_MOUNT")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Fuel Pump Mount</SubLink>
                <Spacer onMouseOver={() => setShowSubMenu(true)}/>
            <SubHeader onMouseOver={() => setShowSubMenu(true)}>Ruckus</SubHeader>
                <SubLink className={shouldUnderLine("RUCKUS_FRONT_BLINKER_MOUNTS")} onClick={() => onSetCurrentView("RUCKUS_FRONT_BLINKER_MOUNTS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Front Blinker Mounts</SubLink>
                <SubLink className={shouldUnderLine("RUCKUS_SINGLE_BLINKER_MOUNTS")} onClick={() => onSetCurrentView("RUCKUS_SINGLE_BLINKER_MOUNTS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Single Rear Blinker Mounts</SubLink>
                <SubLink className={shouldUnderLine("RUCKUS_DOUBLE_BLINKER_MOUNTS")} onClick={() => onSetCurrentView("RUCKUS_DOUBLE_BLINKER_MOUNTS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Double Rear Blinker Mounts</SubLink>
                <SubLink className={shouldUnderLine("RUCKUS_SIDE_CAPS")} onClick={() => onSetCurrentView("RUCKUS_SIDE_CAPS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Side Caps</SubLink>
                <SubLink className={shouldUnderLine("RUCKUS_RINGS")} onClick={() => onSetCurrentView("RUCKUS_RINGS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>PCV Plate Rings</SubLink>
                <Spacer onMouseOver={() => setShowSubMenu(true)}/>
              </LeftSideLinks>
              <RightSideLinks onMouseOver={() => setShowSubMenu(true)}>
            <SubHeader onMouseOver={() => setShowSubMenu(true)}>Universal</SubHeader>
                <SubLink className={shouldUnderLine("HEADLIGHT_MOUNT")} onClick={() => onSetCurrentView("HEADLIGHT_MOUNT")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Single Headlight Conversion Mount</SubLink>
                <SubLink className={shouldUnderLine("SPEEDO_CASE")} onClick={() => onSetCurrentView("SPEEDO_CASE")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Speedo Case</SubLink>
                <SubLink className={shouldUnderLine("SPEEDO_CONVERSION")} onClick={() => onSetCurrentView("SPEEDO_CONVERSION")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Speedo Conversion Kit</SubLink>
                <SubLink className={shouldUnderLine("SPEEDO_MOUNTS")} onClick={() => onSetCurrentView("SPEEDO_MOUNTS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Speedo Mounts</SubLink>
                <SubLink className={shouldUnderLine("SPEEDO_WIRE_HARNESS")} onClick={() => onSetCurrentView("SPEEDO_WIRE_HARNESS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Speedo Wire Harness</SubLink>
              </RightSideLinks>
            </NavLinkContainer>
          </SubMenu>}
      </Navigation>
      {renderView()}
    </ViewWrapper>
  )
}

export default App;
