import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className=' flex mt-10 justify-between gap-5 screen'>
        <div className=' w-[45%] py-6 px-9 bg-red-400 rounded-xl'>
            <h1 className=' text-3xl font-semibold'>{data?.taskNumber.newTask}</h1>
            <h2 className=' text-xl font-medium'>New Task</h2>
        </div>
        <div className=' w-[45%] py-6 px-9 bg-blue-400 rounded-xl'>
            <h1 className=' text-3xl font-semibold'>{data?.taskNumber.completed}</h1>
            <h2 className=' text-xl font-medium'>Completed Task</h2>
        </div>
        <div className=' w-[45%] py-6 px-9 bg-green-400 rounded-xl'>
            <h1 className=' text-3xl font-semibold'>{data?.taskNumber.active}</h1>
            <h2 className=' text-xl font-medium'>Accepted Task</h2>
        </div>
        <div className=' w-[45%] py-6 px-9 bg-yellow-400 rounded-xl'>
            <h1 className=' text-3xl font-semibold'>{data?.taskNumber.failed}</h1>
            <h2 className=' text-xl font-medium'>Failed Task</h2>
        </div>
      
    </div>
  )
}

export default TaskListNumber
