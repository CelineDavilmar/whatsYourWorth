import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Helmet } from "react-helmet";
//import Home from './Home';
import Questions from './Questions';
import LogIn from './login';
import Landing from './Welcome/screens/Landing';
import Contact from './Contact';
import Submit from './Submit';
import SignUp from './Signup';
import Option from './LogSign';
import Dashboard from './DashboardPanel/dashboard';
//import { ThemeProvider } from "@mui/material/styles";
//import CssBaseline from "@mui/material/CssBaseline";
//import theme from "assets/theme";

function App() {

  //const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/Home" element={<Dashboard />} />
        <Route exact path="/WelcomeQuestions" element={<Questions />} />
        <Route exact path="/Login" element={<LogIn />} />
        <Route exact path="/Register" element={<SignUp />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Submit" element={<Submit />} />
        <Route exact path="/Welcome" element={<Option />} />
      </Routes>
    </div>
  )
}

export default App;
