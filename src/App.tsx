import React from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router";

import { PATH } from "./configs";

import { Template1 } from "./layouts/template1"
import { Template2 } from "./layouts/template2"
import AuthRoute from "./routes/AuthRoute";
import GuestRoute from "./routes/GuestRoute";
import RoleRoute from "./routes/RoleRoute";


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

  const routeConfig  = [
    {
      path: PATH.DASHBOARD,
      component: Dashboard,
      guard: AuthRoute,
      layout: Template,
      requireRole: ['admin', 'operator']
    },
    {
      path: PATH.LOGIN,
      component: Login,
      guard: GuestRoute,
    },
    {
      path: PATH.REGISTER,
      component: Register,
      guard: GuestRoute,
    },
    {
      path: PATH.EMPLOYEE_CREATE,
      component: EmployeeCreate,
      guard: AuthRoute,
      layout: Template,
      requireRole: ['admin', 'operator']
    },
    {
      path: PATH.EMPLOYEE_LIST,
      component: EmployeeList,
      guard: AuthRoute,
      layout: Template,
      requireRole: ['admin', 'operator']
    },
    {
      path: PATH.EMPLOYEE_EDIT,
      component: EmployeeEdit,
      guard: AuthRoute,
      layout: Template,
      requireRole: ['admin', 'operator']
    },
    {
      path: PATH.EMPLOYEE_SHOW,
      component: EmployeeShow,
      guard: AuthRoute,
      layout: Template,
      requireRole: ['admin', 'operator']
    },
    {
      path: PATH.NOT_FOUND,
      component: NotFound,
    },
  ]

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={PATH.ROOT} element={<Navigate to={PATH.DASHBOARD} />} />
          {routeConfig.map(route => {
            const Guard = route?.guard || React.Fragment;
            const Layout = route?.layout || React.Fragment;
            const Component = route?.component || React.Fragment;

            return (
              <Route 
                key={route.path}
                path={route.path} 
                element={
                  <Guard>
                    <Layout>
                      <RoleRoute requireRoles={route.requireRole}>  
                        <Component />
                      </RoleRoute>
                    </Layout>
                  </Guard>
                } 
              />
            )
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  )
}

export default App
