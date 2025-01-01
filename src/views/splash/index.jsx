import React, { useState, useEffect } from "react";
import SocialIcon from "../../components/social-icon";
import TikTokIcon from "/assets/icon-tiktok.png";
import YouTubeIcon from "/assets/icon-youtube.png";
import FacebookIcon from "/assets/icon-facebook.png";
import InstagramIcon from "/assets/icon-instagram.png";
import Navigation from "../../components/navigation/index.jsx";
import {
  Background,
  Flag,
  Logo,
  Pole,
  SocialIcons,
  SocialMediaHandle,
  SubscribeForMore
} from "./layout/index.jsx";

const Splash = ({
    onNavClick
  }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <>
        <Background className={isActive ? "active" : ""}>
          <Logo className={isActive ? "active" : ""}/>
          <SocialIcons className={isActive ? "active" : ""}>
            <SocialIcon iconUrl={TikTokIcon} target="self" titleText="TikTok" socialUrl="https://www.tiktok.com/@revrendergarage"/>
            <SocialIcon iconUrl={YouTubeIcon} target="self" titleText="YouTube" socialUrl="https://www.youtube.com/@revrendergarage"/>
            <SocialIcon iconUrl={FacebookIcon} target="self" titleText="Facebook" socialUrl="https://www.facebook.com/profile.php?id=61567748733437"/>
            <SocialIcon iconUrl={InstagramIcon} target="self" titleText="Instagram" socialUrl="https://www.instagram.com/revrendergarage"/>
            <SocialMediaHandle>@REVRENDERGARAGE</SocialMediaHandle>
            <SocialMediaHandle><a href="mailto:revrendergarage@gmail.com" target="_blank">REVRENDERGARAGE@GMAIL.COM</a></SocialMediaHandle>
          </SocialIcons>
          <Flag className={isActive ? "active" : ""}><Pole/></Flag>
          <SubscribeForMore className={isActive ? "active" : ""}>SUBSCRIBE FOR MORE</SubscribeForMore>
        </Background>
      </>
  )
}

export default Splash