import React from 'react'

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
  '/dashboard/action/delete': 'CAN_DELETE',

  '/employee/action/create': 'CAN_CREATE'
}

function AccessControl({ children, resource }: AccessControlProps) {
  const role = 'operator';
  const ROLES = roleUser[role] || [];

  if (!role) return null;

  // ['CAN_CREATE', 'CAN_UPDATE', 'CAN_READ', 'CAN_UPLOAD', 'CAN_EXPORT'].includes('CAN_CREATE')
  if (!ROLES.includes(permission[resource])) return null; 

  return children;
}

export default AccessControl