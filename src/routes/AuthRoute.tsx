import React from 'react'
import { Navigate, useNavigate } from 'react-router';
import { PATH } from '../configs';
import { httpRequest } from '../services/initRequest';

function AuthRoute({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const access_token = window.localStorage.getItem('access_token');
  const [initialized, setInitialized] = React.useState(false);
  
  React.useEffect(() => {
    async function getMe() {
      try {
        await httpRequest('/api/auth', {
          method: 'POST',
        });
        setInitialized(true);
      } catch (err: any) {
        window.localStorage.clear();
        navigate(PATH.LOGIN);
      }
    }
    getMe();
  }, [])

  if (!access_token) {
    return <Navigate to={PATH.LOGIN} />
  }

  if (!initialized) return null;
  
  return children;
}

export default AuthRoute