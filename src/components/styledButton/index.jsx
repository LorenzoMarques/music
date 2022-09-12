import { ButtonContainer } from "./style";

const StyledButton = ({ children, ...rest }) => {
  return <ButtonContainer {...rest}>{children}</ButtonContainer>;
};

export default StyledButton;
