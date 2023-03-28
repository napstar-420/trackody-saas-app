import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthFooter from '../components/authFooter'
import WelcomePanel from '../components/welcomePanel'
import ThemeContext from '../themeContext'

export default function ForgotPassword() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} max-w-screen min-h-screen lg:h-screen grid grid-rows-[auto_1fr] lg:grid-rows-none grid-cols-1 xl:grid-cols-[auto_1fr] lg:grid-cols-[1fr_1fr]`}>
      <WelcomePanel />
      <div className='bg-white dark:bg-dark_600 h-full flex flex-col py-8 px-4'>
        <div className='grow flex flex-col justify-center items-center'>
          <h1 className='text-light_text dark:text-white text-2xl font-bold'>Forgot Password?</h1>
          <p className='text-light_600 dark:text-dark_300 text-lg mt-2 text-center'>Enter you email to reset your password</p>
          <form className='w-full max-w-sm mt-8'>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" name="email" className="form-control" />
            <div className="mt-7 flex items-center justify-center gap-4">
              <button className='px-6 py-3 bg-primary hover:bg-primary_darken text-white font-medium rounded-lg transition-colors'>
                  Submit
              </button>
              <NavLink to={'/'} className='px-6 py-3 bg-primary bg-opacity-20 text-primary hover:text-white hover:bg-primary font-medium rounded-lg transition-colors'>
                  Cancel
              </NavLink>
            </div>
          </form>
        </div>
        <AuthFooter />
      </div>
    </div>
  )
}
