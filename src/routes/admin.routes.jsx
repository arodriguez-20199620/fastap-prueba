import { lazy } from 'react';

const AdminDashboard = lazy(() => import('../pages/AdminDashboard'));
const UserManagement = lazy(() => import('../pages/UserManagement'));

const adminRoutes = [
  {
    path: "admin",
    element: <AdminDashboard />,
    children: [
      { path: "users", element: <UserManagement /> }
    ]
  }
];

export default adminRoutes;
