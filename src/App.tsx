import { Route, Routes } from "react-router";
import { Template1 } from "./layouts/template1"
import { Template2 } from "./layouts/template2"
import Dashboard from "./pages/dashboard";
import { Navigate } from "react-router";
import Register from "./pages/register";
import Login from "./pages/login/Login";

function App() {
  const user = {
    company: 'B'
  }

  let Template = Template1;
  switch (user.company) {
    case 'A': {
      Template = Template1;
      break;
    }
    case 'B': {
      Template = Template2;
      break;
    }
    default:
      break
  }

  return (
    <>
      {/* <Template>
        this is content 
      </Template> */}
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
