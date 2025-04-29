import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/main-layout';
import Dashboard from '../pages/dashboard';
import SignIn from '../pages/auth/sign-in';
import SignUp from '../pages/auth/sign-up';
import NotFound from '../pages/not-found';

const AppRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      {/* more nested routes */}
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    
  </Routes>
  )
}
;

export default AppRoutes;
