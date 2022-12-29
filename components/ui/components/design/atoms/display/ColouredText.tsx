import { styled } from "solid-styled-components";

/**
 * Coloured text
 */
export const ColouredText = styled.span<{ colour?: string; clip?: boolean }>`
  color: ${(props) => props.colour ?? props.theme?.colours["foreground-100"]};
  background: ${(props) => (props.clip ? props.colour! : "none")};
  -webkit-text-fill-color: ${(props) => (props.clip ? "transparent" : "unset")};
  background-clip: ${(props) => (props.clip ? "text" : "unset")};
  -webkit-background-clip: ${(props) => (props.clip ? "text" : "unset")};
`;
