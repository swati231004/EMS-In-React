import React, { useState } from 'react'


const Login = ({handleLogin}) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    handleLogin(email , password)
    setEmail("")
    setPassword("")

  }
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl'>
        <form 
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className='flex flex-col items-center justify-center'>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
           required 
           className=' autline-none bg-transparent border-2 font-medium text-lg border-emerald-600 rounded-full py-2 px-6 placeholder:text-gray-400 ' type="email" placeholder='Enter your email' />
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required
           className=' autline-none bg-transparent border-2 font-medium text-lg border-emerald-600 rounded-full py-2 px-6 mt-3 placeholder:text-gray-400 ' type="password" placeholder='Enter your Password' />
          <button className=' text-white border-none autline-none  text-lg hover:bg-emerald-700 font-semibold bg-emerald-600 w-full rounded-full py-2 px-8 mt-7  '>Log In</button>
        </form>

      </div>
      
    </div>
  )
}

export default Login
