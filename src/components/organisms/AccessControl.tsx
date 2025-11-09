import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store'

interface AccessControlProps extends React.PropsWithChildren {
  resource: string
}

// admin, operator, member
const roleUser: any = {
  admin: ['CAN_CREATE', 'CAN_UPDATE', 'CAN_DELETE', 'CAN_READ', 'CAN_UPLOAD', 'CAN_EXPORT'],
  operator: ['CAN_CREATE', 'CAN_UPDATE', 'CAN_READ', 'CAN_UPLOAD', 'CAN_EXPORT'],
  member: ['CAN_READ'],
}

const permission: any = {
  '/dashboard/action/create': 'CAN_CREATE',
  '/dashboard/action/delete': 'CAN_DELETE',

  '/employee/action/create': 'CAN_CREATE'
}

function AccessControl({ children, resource }: AccessControlProps) {
  const user = useSelector((state: RootState) => state.user)
  const role = user.user?.role;

  if (!role) return null;

  const ROLES = roleUser[role] || [];

  if (!ROLES.includes(permission[resource])) return null; 

  return children;
}

export default AccessControl