import React, { useState } from "react";
import { Container, BoxLogin } from "./styles";
import TextField from "components/TextField";
import Button from "components/Button";

function Login () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    return (
        <Container>
          <BoxLogin>
          <label for="emailaddress" class="font-weight-medium">E-Mail</label>
            <TextField
              type="text"
              value={username}
              onChange={setUsername}
              placeholder="E-Mail"
            />
            <label for="password" data-key="login_password" class="font-weight-medium">Senha</label>
            <TextField
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="Senha"
            />
            <Button variant="primary">
              Entrar
            </Button>
          </BoxLogin>
        </Container>
      );
}
export default Login;

// function Login({ isLoggin, message, setMessage, setIsLoggin, fetchLogin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   function validForm() {
//     if (username.trim() === "") {
//       setMessage({ type: "danger", text: "Preencha seu e-mail" });
//     } else if (password.trim() === "") {
//       setMessage({ type: "danger", text: "Preencha sua senha" });
//     } else {
//       fetchLogin({ email: username, password: password });
//     }
//   }

//   if (isLoggin) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <Container>
//       <BoxLogin>
//         <TextField
//           type="text"
//           value={username}
//           onChange={setUsername}
//           placeholder="email"
//         />
//         <TextField
//           type="password"
//           value={password}
//           onChange={setPassword}
//           placeholder="Password"
//         />
//         <Button variant="primary" onClick={validForm}>
//           Entrar
//         </Button>
//         <Alert show={message.type} type={message.type}>
//           {message.text}
//         </Alert>
//       </BoxLogin>
//     </Container>
//   );
// }

// const mapStateToProps = state => state.login;
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(loginActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
