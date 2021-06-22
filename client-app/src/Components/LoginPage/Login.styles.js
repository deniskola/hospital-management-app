import styled from "@emotion/styled";

export const LoginContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  p {
    font-size: 12px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .background-img {
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .transparent-background {
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 0.6;
    background-color: #c4acf3;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .welcome-box {
    opacity: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 373px;
    height: 420px;
    text-align: center;
    -webkit-box-shadow: 8px 6px 25px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.4);
  }

  .login-form {
    width: 350px;
    height: 500px;
    background-color: #c4acf3;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    -webkit-box-shadow: 8px 6px 25px -1px rgba(0, 0, 0, 0.4);
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.4);
  }

  .login-header {
    width: 100%;
    height: 30%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .login-header > * {
    margin-bottom: 20px;
  }
  form {
    margin-bottom: 50px;
  }

  form input {
    margin-bottom: 15px;
  }
  input {
    display: block;
    width: 250px;
    height: 40px;
    border-radius: 50px;
    border: none;
    padding-left: 20px;
  }

  button {
    border-radius: 50px;
    width: 250px;
    height: 40px;
    border: none;
  }

  .logo {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50px;
    top: 38px;
  }

  .menu-crf > * {
    display: inline-block;
  }

  .checkbox:hover,
  button:hover {
    cursor: pointer;
  }
  input {
    font-size: 11px;
  }

  input:focus {
    outline: none;
    border: 1px solid black;
  }
`;
