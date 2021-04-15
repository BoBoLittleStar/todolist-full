import styled from "@emotion/styled";

export const Button = styled.button<{ checked: boolean, editing: boolean }>`
  border-color: ${props => props.editing ? "transparent" : (props.checked ? "#cbdfdb" : "#f0f0f0")};;
`;
export const Div = styled.div<{ checked: boolean, editing: boolean }>`
  border-color: ${props => props.editing ? "transparent" : (props.checked ? "#5dc2ae" : "transparent")};
`;
export const P = styled.p<{ checked: boolean }>`
  color: ${props => props.checked ? "lightgray" : "black"};
  text-decoration-line: ${props => props.checked ? "line-through" : "none"};
`;