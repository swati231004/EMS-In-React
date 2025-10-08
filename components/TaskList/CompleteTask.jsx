import React from 'react'

const CompleteTask = ({data}) => {
    
  return (
     <div className='flex-shrink-0 h-full w-[300px] bg-teal-600 rounded-xl p-5'>
            <div className="flex justify-between items-center ">
                <h2 className='bg-red-600 py-1 px-3 rounded text-sm'>{data.category}</h2>
                <h3 className='text-sm'>{data.taskData}</h3>
            </div>
            <h2 className="text-2xl font-medium mt-5">{data.taskTitle} </h2>
            <p className=' text-sm mt-5'>{data.taskDescription} </p>
            <div className='mt-2'>
                <button className='w-full bg-yellow-500 py-1 px-2 text-sm'>Complete</button>
            </div>
        </div>
  )
}

export default CompleteTask
