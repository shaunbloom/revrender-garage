import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;

export const Description = styled.div`
  color: #000;
  flex: 1;
  font-size: 16px;
  line-height: 1.5;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  height: auto;
  min-height: 381px;
  width: 650px;
  overflow-wrap: break-word;
  box-shadow: inset 0 0 0 5px black;
  text-align: left;
`;

export const ImageWrapper = styled.div`
  display: block;
  position: relative;
  width: 450px;
  height: 420px;
  border: 2px solid #fff;
  overflow: hidden;
`;

export const Notes = styled.div`
  margin: 10px 0;
`;

export const Links = styled.div`
  margin: 10px 0;
`;

export const Price = styled.div`
  margin: 10px 0;
`;

export const BoldText = styled.span`
  font-weight: bold;
  margin: 10px 5px 10px 0;
  display: inline;
`;
