import { Input } from "../login/style";
import StyledButton from "../../components/styledButton";
import { DivContainer } from "../../components/styledDiv";

const RegisterPage = () => {
  return (
    <DivContainer>
      <h2>Register</h2>

      <p>Name</p>
      <Input type="text" />

      <p>Email</p>
      <Input type="text" />

      <p>Password</p>
      <Input type="text" />

      <p>Confirm Password</p>
      <Input type="text" />

      <StyledButton bg_color="--color-brand3" bd_color="--color-brand2">
        Register
      </StyledButton>
    </DivContainer>
  );
};

export default RegisterPage;
