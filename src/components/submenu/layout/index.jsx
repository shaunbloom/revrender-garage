import styled from '@emotion/styled';

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
    cursor: inherit;
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
    cursor: pointer;
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
