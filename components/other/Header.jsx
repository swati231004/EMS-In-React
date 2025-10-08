import React from 'react'

const Header = (props) => {
  // const [username , setUsername] =  useState('')
  // if(!data){
  //   setUsername('admin')
  // }
  // else{
  //   setUsername(data?.firstname)
  // }
  // console.log(data)
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className=' flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className=' text-3xl font-semibold'>{props.data?.firstname}</span> 👋</h1>
      <button onClick={logOutUser} className=' bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
