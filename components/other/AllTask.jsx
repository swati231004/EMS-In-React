import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const authData = useContext(AuthContext)

    return (
        <div id='alltask' className='bg-[#1c1c1c] p-5 mt-4 rounded'>
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h1 className='text-lg font-medium w-1/5'>Employee Name</h1>
                <h2 className='text-lg font-medium w-1/5'>New Task</h2>
                <h4 className='text-lg font-medium w-1/5'>Active Task</h4>
                <h4 className='text-lg font-medium w-1/5'>Completed</h4>
                <h4 className='text-lg font-medium w-1/5'>Failed</h4>
            </div>
            <div>
                {authData?.employee?.map((elem, index) => (
                    <div key={index} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                        <h1 className='text-lg font-medium w-1/5'>{elem.firstname}</h1>
                        <h2 className='text-lg font-medium w-1/5 text-blue-500'>{elem.taskNumber?.newTask}</h2>
                        <h4 className='text-lg font-medium w-1/5 text-yellow-500'>{elem.taskNumber?.active}</h4>
                        <h4 className='text-lg font-medium w-1/5 text-indigo-600'>{elem.taskNumber?.completed}</h4>
                        <h4 className='text-lg font-medium w-1/5 text-red-500'>{elem.taskNumber?.failed}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllTask
