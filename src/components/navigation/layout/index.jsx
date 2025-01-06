import styled from '@emotion/styled';

export const NavWrapper = styled.div`
    position: ${(props) => (props.fixed ? "fixed" : "inherit")};
    top: 0;
    left: 0;
    z-index: 1;
    width:100%; /* Specifies the width of the nav bar */
    display: flex; /* Enables flexbox layout */
    align-items: center; /* Vertically centers items within the bar */
    justify-content: space-between; /* Evenly spaces out items */
    padding: 0 10px; /* Adds padding inside the nav bar */
    background-color: #000000; /* Sets background color */
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: center; /* Center the contents inside */
    align-items: center; /* Vertically align the items */
    width: 100%; /* Ensures it spans the navbar's width */
`;

export const NavLink = styled.a`
    display: block;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    vertical-align: top;
    text-align: left;
    margin-right: 40px;
    color: ${(props) => (props.color ? color : "inherit")};

    &:hover, &.underline {
      text-decoration: underline;
    }
`;

export const SubLink = styled.a`
    display: block;
    padding: 5px 5px 5px 15px;
    cursor: pointer;
    vertical-align: top;
    text-align: left;
    color: ${(props) => (props.color ? color : "inherit")};

    &:hover, &.underline {
      text-decoration: underline;
    }

    .header {
      font-weight: bold;
      font-size: 18px;
      color: ${(props) => (props.color ? color : "inherit")};

      &:hover {
        text-decoration: none;
      }
   }
`;

export const SubHeader = styled.a`
    display: block;
    padding: 5px;
    cursor: pointer;
    vertical-align: top;
    text-align: left;
    font-weight: bold;
    font-size: 18px;
    color: ${(props) => (props.color ? color : "inherit")};

    &:hover {
      text-decoration: none;
      color: ${(props) => (props.color ? color : "inherit")};
    }
`;

export const Spacer = styled.div`
    height: 20px;
`;

export const Logo = styled.a`
  margin-top: -15px;
  position: absolute;
  top: 10px;
  left: 10px;
  background-image: url('../../assets/logo-trans.png');
  background-size: cover;
  height: 100px;
  width: 100px;
  cursor: pointer;
  z-index: 2;
`;

export const SubMenu = styled.div`
  position: absolute;
  height: auto;
  width: 300px;
  border: 1px solid #fff;
  top: 10px;
  left: -128px;
  background-color: #000;
  color: #fff;
  padding: 7px 12px;
`;

export const SubMenuWrapper = styled.div`
    position: relative;
`;
