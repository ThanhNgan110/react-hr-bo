export const API_URL = 'http://localhost:8000';

export const STATUS = {
  NEW: 'New',
  PENDING_APPROVED: 'Pending Approved',
  APPROVED: 'Approved',
  REJECTED: 'Rejected'
}

export const USER_ROLE = {
  ADMIN: 'Admin',
  OPERATOR: 'Operator',
  MEMBER: 'Member'
}

export const PATH = {
  ROOT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  EMPLOYEE_LIST: '/employee/list',
  EMPLOYEE_CREATE: '/employee/create',
  EMPLOYEE_EDIT: '/employee/edit/:id',
  EMPLOYEE_SHOW: '/employee/show/:id'
}