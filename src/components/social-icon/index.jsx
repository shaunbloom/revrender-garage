import react from "react";
import { Icon, } from "./layout/index.jsx";

const SocialIcon = ({
	iconUrl,
	target,
	titleText,
	socialUrl,
}) => {
	return (
	  <Icon href={socialUrl} target={target} title={titleText}>
	    <img src={`${iconUrl}`}/>
	  </Icon>
	);
}

export default SocialIcon;