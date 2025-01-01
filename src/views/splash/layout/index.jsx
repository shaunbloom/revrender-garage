import styled from "@emotion/styled";

export const Background = styled.div`
  background-image: url('/assets/bg-image.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1.5s ease-in;
  margin-top: 30px;


  &.active {
    opacity: 1;
  }
`;

export const SocialIcons = styled.div`
  position: absolute;
  top: 375px;
  left: 33px;
  opacity: 0;
  transition: opacity 4.5s ease-in;

  & a {
    color: #fff;

    &:hover {
      color: blue;
    }
  }

  &.active {
    opacity: 1;

    @media (max-width: 1200px) {
      left: 23px;
      top: 250px;
    }

    @media (max-width: 1000px) {
      left: 0px;
      top: 230px;
    }

    @media (max-width: 900px) {
      left: 0;
      top: 215px;
    }

    @media (max-width: 800px) {
      left: 0px;
      top: 195px;
    }

    @media (max-width: 700px) {
      left: 0px;
      top: 185px;
    }

    @media (max-width: 600px) {
      left: 0px;
      top: 185px;
    }

    @media (min-width: 1201px) {
      left: 15px;
      top: 280px;
    }
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: -495px;
  left: 20px;
  background-image: url('/assets/logo-trans.png');
  background-size: contain;
  background-repeat: no-repeat;
  height: 495px;
  width: 495px;
  opacity: 0;
  transition: top 1.5s ease-out, opacity 1.5s ease-out;

  &.active {
    top: -78px;
    opacity: 1;

      @media (max-width: 1200px) {
        top: -50px;
        height: 320px;
        width: 320px;
      }

      @media (max-width: 1000px) {
        top: -45px;
        left: 0;
        height: 300px;
        width: 300px;
      }

     @media (max-width: 900px) {
       top: -40px;
       height: 280px;
       width: 280px;
     }

     @media (max-width: 800px) {
       top: -35px;
       height: 260px;
       width: 260px;
     }

     @media (max-width: 700px) {
       top: -30px;
       height: 240px;
       width: 240px;
     }

     @media (max-width: 600px) {
       top: -25px;
       height: 220px;
       width: 220px;
     }

      @media (min-width: 1201px) {
        top: -40px;
        height: 350px;
        width: 350px;
      }
    }
`;

export const SocialMediaHandle = styled.div`
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  font-size: 55px;

  @media (max-width: 1200px) {
    font-size: 31px;
  }

  @media (max-width: 1000px) {
    font-size: 28px;
  }

  @media (max-width: 900px) {
    font-size: 26px;
  }

  @media (max-width: 800px) {
    font-size: 24px;
  }

  @media (min-width: 1201px) {
    font-size: 35px;
  }  
`;

export const Flag = styled.div`
  background-image: url('/assets/flag.png');
  background-size: contain;
  height: 400px;
  width: 400px;
  posit
  right: 10px;
  position: absolute;
  top: 0;
  right: -600px;
  z-index: 0;
  opacity: 0;
  transition: right 1.5s ease-out, opacity 1.5s ease-out;

  &.active {
    right: 0;
    opacity: 1;

    @media (max-width: 1200px) {
     height: 350px;
     top: 0;
     width: 350px;
    }

    @media (max-width: 1000px) {
      height: 300px;
      width: 300px;
    }

    @media (max-width: 900px) {
      height: 260px;
      width: 260px;
    }

    @media (max-width: 800px) {
      height: 220px;
      width: 220px;
    }

    @media (max-width: 700px) {
      height: 180px;
      width: 180px;
    }

    @media (max-width: 600px) {
      height: 170px;
      width: 170px;
    }

    @media (min-width: 1201px) {
      height: 400px;
      width: 400px;
    }  
  }
`;

export const Pole = styled.div`
border: 3px solid #ABA9AC;
    width: 5px;
    height: calc(100vh - 55px);
    position: absolute;
    top: 55px;
    right: 46px;
    z-index: 2;

    @media (max-width: 1200px) {
      right: 26px;
      height: calc(100vh - 49px);
      top: 49px;
      width: 4px;
    }

    @media (max-width: 1000px) {
      right: 23px;
      height: calc(100vh - 42px);
      top: 42px;
      width: 3px;
    }

    @media (max-width: 900px) {
      right: 19px;
      height: calc(100vh - 35px);
      top: 35px;
      width: 3px;
    }

    @media (max-width: 800px) {
      right: 14px;
      height: calc(100vh - 30px);
      top: 30px;
      width: 3px;
    }

    @media (max-width: 700px) {
      right: 12px;
      height: calc(100vh - 25px);
      top: 29px;
      width: 2px;
    }

    @media (min-width: 1201px) {
      font-size: 35px;
      right: 30px;
      width: 4px;
    }  
`;

export const SubscribeForMore = styled.div` position: absolute;
  top: 600px;
  right: 205px;
  height: 400px;
  width: 650px;
  font-family: "Caveat", cursive;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-size: 155px;
  line-height: 120px;
  opacity: 0;
  transition: opacity 4.5s ease-in;

  &.active {
    opacity: 1;

    @media (max-width: 1200px) {
      font-size: 80px;
      top: 310px;
      right: 50px;
      width: 450px;
      line-height:90px;
    }

    @media (max-width: 1000px) {
      font-size: 70px;
      top: 270px;
      right: 60px;
      width: 350px;
      line-height:70px;
    }

    @media (max-width: 900px) {
      font-size: 60px;
      top: 230px;
      right: 70px;
      width: 250px;
      line-height: 60px;
    }

    @media (max-width: 800px) {
      font-size: 50px;
      top: 200px;
      right: 80px;
      width: 210px;
      line-height: 50px;
    }

    @media (max-width: 700px) {
      font-size: 40px;
      top: 170px;
      right: 90px;
      width: 170px;
      line-height: 40px;
    }

    @media (max-width: 600px) {
      font-size: 30px;
      top: 150px;
      right: 100px;
      width: 130px;
      line-height: 30px;
    }

    @media (min-width: 1201px) {
      font-size: 90px;
      width: 500px;
      top: 350px;
      right: 50px;
      line-height: 100px;
    }  
  }
`;