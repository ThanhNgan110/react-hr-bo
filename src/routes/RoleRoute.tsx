import React from 'react'
import { useNavigate } from 'react-router';
import { PATH } from '../configs';

interface RoleRoute extends React.PropsWithChildren {
  requireRoles?: string[]
}

function RoleRoute({ children, requireRoles = [] }: RoleRoute) {
  const navigate = useNavigate();
  const role = 'operator';

  React.useEffect(() => {
    if (!role || requireRoles.length === 0) return;

    // ['admin', 'operator'].includes('operator')
    const checkRole = requireRoles.includes(role);
    if (!checkRole) {
      navigate(PATH.NOT_FOUND)
    }

  }, [role]);

  return children
}

export default RoleRoute