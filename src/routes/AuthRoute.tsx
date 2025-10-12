import React from 'react'
import { Navigate, useNavigate } from 'react-router';
import { PATH } from '../configs';
import { httpRequest } from '../services/initRequest';
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/userSlice';

function AuthRoute({ children }: React.PropsWithChildren) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const access_token = window.localStorage.getItem('access_token');
  const [initialized, setInitialized] = React.useState(false);

  React.useEffect(() => {
    if (initialized) return;
    
    async function getMe() {
      try {
        const data: any = await httpRequest('/api/auth', {
          method: 'POST',
        });
        const user = data?.user.user;
        setInitialized(true);
        dispatch(updateUser(user))
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