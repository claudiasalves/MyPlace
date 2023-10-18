import LoginForm from "./components/Login/LoginForm";
import SignUpForm from "./components/Signup/SignupForm";
import Homepage from "./components/Homepage/Homepage";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
import {authApi} from '../src/utils/api';

function App() {

  const navigate = useNavigate();

  function onSignUp(data){
    authApi.signUp(data)
      .then(() => {
        console.log("success")
      })
      .catch((err) => {
        console.log(`Error: ${err}`)
      })
  }

  function onLogIn(data) {
    authApi.logIn(data)
    .then((res) => {
      console.log(res)
      localStorage.setItem('token', res.token)
    })
    .then(()=> {
      navigate("/")
    })
    .catch((err) => {
      console.log(`Error: ${err.message}`)
    })
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage navigate={useNavigate()} />} />
      <Route path="/login" element={<LoginForm onLogIn={onLogIn} navigate={useNavigate()} />} />
      <Route path="/signup" element={<SignUpForm onSignUp={onSignUp} navigate={useNavigate()} />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
