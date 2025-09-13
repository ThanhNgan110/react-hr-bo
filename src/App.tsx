import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router";

import { PATH } from "./configs";

import { Template1 } from "./layouts/template1"
import { Template2 } from "./layouts/template2"
import AuthRoute from "./routes/AuthRoute";
import GuestRoute from "./routes/GuestRoute";


const Dashboard = React.lazy(() => import('./pages/dashboard').then(module => ({ default: module.default })))
const Login = React.lazy(() => import('./pages/login').then(module => ({ default: module.default })))
const Register = React.lazy(() => import('./pages/register').then(module => ({ default: module.default })))
const EmployeeCreate = React.lazy(() => import('./pages/employee/Create').then(module => ({ default: module.default })))
const EmployeeList = React.lazy(() => import('./pages/employee/List').then(module => ({ default: module.default })))
const EmployeeShow = React.lazy(() => import('./pages/employee/Show').then(module => ({ default: module.default })))
const EmployeeEdit = React.lazy(() => import('./pages/employee/Edit').then(module => ({ default: module.default })))

const NotFound = React.lazy(() => import('./pages/not-found').then(module => ({ default: module.default })))

function App() {
  const user = {
    company: 'A'
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
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={PATH.ROOT} element={<Navigate to={PATH.DASHBOARD} />} />
          <Route path={PATH.DASHBOARD} element={<AuthRoute><Template><Dashboard /></Template></AuthRoute>} />
          <Route path={PATH.LOGIN} element={<GuestRoute><Login /></GuestRoute>} />
          <Route path={PATH.REGISTER} element={<GuestRoute><Register /></GuestRoute>} />
          <Route path={PATH.EMPLOYEE_CREATE} element={<AuthRoute><Template><EmployeeCreate /></Template></AuthRoute>} />
          <Route path={PATH.EMPLOYEE_LIST} element={<AuthRoute><Template><EmployeeList /></Template></AuthRoute>} />
          <Route path={PATH.EMPLOYEE_EDIT} element={<AuthRoute><Template><EmployeeEdit /></Template></AuthRoute>} />
          <Route path={PATH.EMPLOYEE_SHOW} element={<AuthRoute><Template><EmployeeShow /></Template></AuthRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
