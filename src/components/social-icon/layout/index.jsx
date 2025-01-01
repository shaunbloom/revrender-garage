import styled from "@emotion/styled";

export const Icon = styled.a`
    display: inline;

    img {
      height: 120px;
      width: 120px;

      @media (max-width: 1200px) {
        height: 80px;
        width: 80px;
      }

      @media (max-width: 1000px) {
        height: 70px;
        width: 70px;
      }

      @media (max-width: 900px) {
        height: 67px;
        width: 67px;
      }

      @media (max-width: 800px) {
        height: 62px;
        width: 62px;
      }

      @media (max-width: 700px) {
        height: 57px;
        width: 57px;
      }

      @media (min-width: 1201px) {
        height: 90px;
        width: 90px;
      }
    }
`;