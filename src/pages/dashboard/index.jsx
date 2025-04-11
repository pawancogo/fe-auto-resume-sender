// src/pages/Dashboard.jsx
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Shows Profile or Settings based on route */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
