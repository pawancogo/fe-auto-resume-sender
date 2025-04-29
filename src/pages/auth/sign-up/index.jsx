import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useApi from '@/hooks/useApi'
const SignUp = () => {
  const { error, loading, request } = useApi();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone_number: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    phone_number: ''
  })

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const navigate = useNavigate();

  const handleSignUp = async(e) => {    
    e.preventDefault();
    
    // before submit validate form data 
    const payload = { user: formData }
    const response = await request('post', '/users/signup', payload, { authTokenRequired: false })
    if(response?.data){
      navigate('/signin')
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <input
          type="text"
          name='name'
          placeholder="Name"
          className="w-full p-2 mb-4 border rounded"
          value={formData.name}
          onChange={handleOnChange}
          required
        />

        <input
          name='email'
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
          value={formData.email}
          onChange={handleOnChange}
          required
        />

        <input
          name='password'
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          value={formData.password}
          onChange={handleOnChange}
          required
        />

        <input
          name='phone_number'
          type="phone_number"
          placeholder="Phone number"
          className="w-full p-2 mb-4 border rounded"
          value={formData.phone_number}
          onChange={handleOnChange}
          required
        />

        <div>{Object.values(errors).map((error, i) => <div key={Date.now() + i}> {error && `- ${error}`}</div>)}</div>
        {error?.errors?.length && <div>{error.errors.join(', ')}</div>}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
