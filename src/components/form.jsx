import { Link, useNavigate } from 'react-router-dom'
import { register, logIn } from '../api/methods'
import PropTypes from 'prop-types'
import { useState } from 'react'

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const formText = {
    logIn: {
      welcomeText: 'Welcome Back!',
      changeBetween: 'You do not have an account? Register!',
      customButton: 'Log In'
    },
    register: {
      welcomeText: 'Welcome!',
      changeBetween: 'You already have an account? Log In!',
      customButton: 'Register'
    }
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleRegisterClick = async () => {
    try {
      const response = await register(username, password)
      navigate("/", {state:{username}})
      console.log(response)
    } catch (error) {
      console.error(error)
    } 
  }

  const handleLoginClick = async () => {
    try {
      const response = await logIn(username, password)
      navigate("/", {state:{username}})
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex w-full h-screen bg-[#1d1d1d]">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="px-10 py-20 rounded-3xl border-2 border-gray-600 bg-[#2c2c2c]">
          <h1 className="text-5xl font-semibold text-center text-white ">
            <Link to="/">{formText[type].welcomeText}</Link>
          </h1>
          <p className="font-medium text-lg text-gray-500 mt-4 text-center">
            Please enter your details.
          </p>
          <div className="mt-8">
            <div>
              <label htmlFor="" className="text-white text-lg font-medium">
                Username
              </label>
              <input
                type="text"
                className="text-white w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Type your Username"
                onChange={handleUsernameChange}
                value={username}
              />
            </div>
            <div>
              <label htmlFor="" className="text-white text-lg font-medium">
                Password
              </label>
              <input
                type="password"
                className="text-white w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                placeholder="Type your Password"
                onChange={handlePasswordChange}
                value={password}
              />
            </div>
          </div>
          <div className="mt-2">
            <Link
              className="font-medium text-base text-red-600"
              to={type === 'register' ? '/login' : '/register'}
            >
              {formText[type].changeBetween}
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <button
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-red-800 text-white text-lg font-bold w-full"
              onClick={type === 'register' ? handleRegisterClick : handleLoginClick}
            >
              {formText[type].customButton}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-[#202020]">
        <div className="w-60 h-60 bg-gradient-to-tr from-red-500 to-white-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  )
}

AuthForm.propTypes = {
  type: PropTypes.string
}

export default AuthForm
