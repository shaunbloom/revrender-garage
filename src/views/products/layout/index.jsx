import styled from "@emotion/styled";

export const ProductLink = styled.div`
    margin: 15px 0 0 15px;
    text-align: left;
    color: #fff;

    a {
      color: white;
      cursor: pointer;

      &:hover {
        color: #646cff;
        text-decoration: underline;
      }
    }
`;

export const ProductHeader = styled.div`
    margin: 25px 0 0 0;
    text-align: left;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const LinkContainer = styled.div`
  display: flex; /* Enable Flexbox for horizontal alignment */
  align-items: stretch; /* Makes all children the same height as the tallest one */
  gap: 10px; /* Add space between left and right containers */
`;

export const LeftSideLinks = styled.div`
display: flex; /* Ensures proper alignment within the individual containers */
  flex-direction: column; /* Stacks content inside each side vertically */
  align-items: flex-start; /* Align content to the top-left of each container */
  justify-content: flex-start; /* Ensures vertical alignment starts at the top */
  white-space: nowrap; /* Prevents text wrapping */
  padding:  0 20px 20px; /* Optional: Add padding for better visuals */
  border: 1px solid #ccc; /* Optional: Add a border for clarity */
`;

export const RightSideLinks = styled.div`
display: flex; /* Ensures proper alignment within the individual containers */
  flex-direction: column; /* Stacks content inside each side vertically */
  align-items: flex-start; /* Align content to the top-left of each container */
  justify-content: flex-start; /* Ensures vertical alignment starts at the top */
  white-space: nowrap; /* Prevents text wrapping */
  padding: 0 20px 20px; /* Optional: Add padding for better visuals */
  border: 1px solid #ccc; /* Optional: Add a border for clarity */
`;