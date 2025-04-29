import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import useApi from '@/hooks/useApi';
import { useAuth } from '@/context/AuthContext';

const SignIn = () => {
  const { setUser }  = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const { error, loading, request } = useApi();

  const handlechange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSignIn = async(e) => {
    e.preventDefault();
    const payload = {
      user: formData
    }
    const response = await request('post', 'users/signin', payload, { authTokenRequired: false })
    console.log(response)
    if(response?.data){
      Cookies.set('authtoken', response?.data?.token, { expires: 1 });
      setUser(response.data);
      navigate('/');
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignIn}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <input
          name='email'
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={formData.email}
          onChange={handlechange}
          required
        />

        <input
          name='password'
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={formData.password}
          onChange={handlechange}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign In
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
