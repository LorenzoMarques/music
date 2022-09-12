import { Link } from "react-router-dom";
import StyledButton from "../../components/styledButton";
import { DivContainer } from "../../components/styledDiv";
import { CreateAccountDiv, Input } from "./style";

export const LoginPage = () => {
  return (
    <DivContainer>
      <h2>Login</h2>

      <p>Email</p>
      <Input type="text" />

      <p>Password</p>
      <Input type="text" />

      <StyledButton bg_color={"--color-brand3"} bd_color={"--color-brand2"}>
        Sign in
      </StyledButton>

      <CreateAccountDiv>
        <p>Not a member?</p>
        <Link to="/register">Create Account</Link>
      </CreateAccountDiv>
    </DivContainer>
  );
};

export default LoginPage;
