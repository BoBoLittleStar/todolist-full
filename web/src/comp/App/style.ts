import styled from "@emotion/styled";

export const Arrow = styled.div<{ allTicked: boolean }>`
  display: inherit;
  color: ${props => props.hidden ? "transparent" : (props.allTicked ? "#737373" : "#e6e6e6")};
`;
export const Filter = styled.label<{ checked: boolean }>`
  border: 1px solid ${props => props.checked ? "#f0d6d7" : "transparent"};
  margin: 10px;
  padding: 4px 8px;
  border-radius: 3px;
  cursor: pointer;
 
  &:hover {
    border-color: ${props => props.checked ? "#f0d6d7" : "#f7ebea"};
  }
`;
export const Clear = styled.label`
  color: ${props => props.hidden ? "transparent" : "inherit"};
  display: inherit;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
  }
`;