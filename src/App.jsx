import { useEffect } from "react";
import './App.css';
import Splash from "./views/splash/index.jsx";
import Products from "./views/products/index.jsx";
import Mission from "./views/mission/index.jsx";
import SpeedoConversion from "./views/sub-products/speedo-conversion/index.jsx";
import SpeedoCase from "./views/sub-products/speedo-case/index.jsx";
import SpeedoWireHarness from "./views/sub-products/speedo-wire-harness/index.jsx";
import BlinkerMounts from "./views/sub-products/blinker-mounts/index.jsx";
import RuckusRings from "./views/sub-products/ruckus-rings/index.jsx";
import RuckusDoubleBlinkerMounts from "./views/sub-products/ruckus/dbl-blinker-mounts/index.jsx";
import SpeedoMounts from "./views/sub-products/speedo-mounts/index.jsx";
import Navigation from "./components/navigation/index.jsx"
import Bios from "./views/bios/index.jsx";
import { useState } from "react";
import styled from "@emotion/styled";
import { NavLink, Spacer, SubHeader, SubLink, SubMenu } from "./components/navigation/layout/index.jsx";

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
        case "RUCKUS_RINGS":
            return <RuckusRings/>;
        case "SPEEDO_MOUNTS":
            return <SpeedoMounts/>;
        case "RUCKUS_DOUBLE_BLINKER_MOUNTS":
            return <RuckusDoubleBlinkerMounts/>;
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
            <SubHeader className="header" onMouseOver={() => setShowSubMenu(true)}>Maddog</SubHeader>
            <SubLink className={shouldUnderLine("BLINKER_MOUNTS")} onClick={() => onSetCurrentView("BLINKER_MOUNTS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Double Blinker Mounts</SubLink>
            <Spacer/>
            <SubHeader onMouseOver={() => setShowSubMenu(true)}>Ruckus</SubHeader>
            <SubLink className={shouldUnderLine("RUCKUS_DOUBLE_BLINKER_MOUNTS")} onClick={() => onSetCurrentView("RUCKUS_DOUBLE_BLINKER_MOUNTS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Double Blinker Mounts</SubLink>
            <SubLink className={shouldUnderLine("RUCKUS_RINGS")} onClick={() => onSetCurrentView("RUCKUS_RINGS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>PCV Plate Rings</SubLink>
            <Spacer/>
            <SubHeader onMouseOver={() => setShowSubMenu(true)}>Universal</SubHeader>
            <SubLink className={shouldUnderLine("SPEEDO_CASE")} onClick={() => onSetCurrentView("SPEEDO_CASE")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Speedo Case</SubLink>
            <SubLink className={shouldUnderLine("SPEEDO_CONVERSION")} onClick={() => onSetCurrentView("SPEEDO_CONVERSION")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Speedo Conversion Kit</SubLink>
            <SubLink className={shouldUnderLine("SPEEDO_MOUNTS")} onClick={() => onSetCurrentView("SPEEDO_MOUNTS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Speedo Mounts</SubLink>
            <SubLink className={shouldUnderLine("SPEEDO_WIRE_HARNESS")} onClick={() => onSetCurrentView("SPEEDO_WIRE_HARNESS")} onMouseOver={() => setShowSubMenu(true)} onMouseOut={() => setShowSubMenu(false)}>Speedo Wire Harness</SubLink>
          </SubMenu>}</Navigation>
      {renderView()}
    </ViewWrapper>
  )
}

export default App;
