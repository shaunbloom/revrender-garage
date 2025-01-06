import { MissionStatement } from "./layout/index.jsx";
import styled from "@emotion/styled";

const Title = styled.h2`
    text-align: left;
`;


const Mission = ({
    onNavClick
    }) => {
    return (
        <>
          <Title>Welcome to RevRender Garage</Title>
          <MissionStatement>
            At RevRender Garage, we are a passionate team of creators, builders, and innovators dedicated to sharing our
            love for hands-on projects with the world. Our mission is to empower DIY enthusiasts and hobbyists by
            teaching them new skills, offering creative solutions, and inspiring confidence in their own projects.

            <p>
            We specialize in a wide range of disciplines, from advanced 3D printing and precision plasma cutting to CAD
            design for custom motorcycle parts and small engine work. Whether it’s designing unique upgrades for
            scooters or flipping rare and exciting finds, we bring creativity and expertise to every project.
            </p>
            <p>
            Our latest focus is on creating custom parts and performance upgrades for scooters. These enhancements are
            designed to elevate your ride beyond the ordinary, offering both standout aesthetics and practical benefits
            like improved safety and performance. We aim to help your bike reflect your personality and outshine the
            competition, ensuring it's a head-turner on every road.
            </p>
            <p>
            At RevRender Garage, we do more than just build—we educate. Our instructional videos, troubleshooting
            guides, and detailed walkthroughs are crafted to help you tackle projects with confidence. From resolving
            common issues to making intricate upgrades, we guide you step-by-step through the process, ensuring your
            success.
            </p>
            <p>
            Join us as we explore the world of DIY, diving into creative builds, innovative projects, and all things
            mechanical. Whether you're a seasoned builder or just starting out, RevRender Garage is here to inspire,
            educate, and fuel your passion for creating. Follow along as we turn ideas into reality, one project at a
            time.
            </p>
            <p>
            Let’s build something extraordinary together!
            </p>
            <p>~ RevRender Garage</p>
          </MissionStatement>
        </>
    )
}

export default Mission;