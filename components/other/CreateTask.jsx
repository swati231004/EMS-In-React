import React, { useState } from 'react'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const data = JSON.parse(localStorage.getItem('employee')) || []

    const updatedData = data.map((employee) => {
    
      if (employee.firstname === asignTo) {
        // Ensure tasks array exists
        if (!Array.isArray(employee.tasks)) {
          employee.tasks = []
        }
        employee.tasks.push(newTask)
        console.log('Updated Employee:', employee)
      }
      return employee
    })
    

    localStorage.setItem('employee', JSON.stringify(updatedData))
  

    // Clear form fields
    setTaskTitle('')
    setTaskDate('')
    setAsignTo('')
    setCategory('')
    setTaskDescription('')
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form
        onSubmit={submitHandler}
        className='flex w-full items-start justify-between flex-wrap mt-5'
      >
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type='text'
              className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border border-gray-400 mb-4'
              placeholder='Make a UI design'
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              type='date'
              className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border border-gray-400 mb-4'
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              type='text'
              className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border border-gray-400 mb-4'
              placeholder='Employee Name'
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type='text'
              className='text-sm py-1 px-2 w-4/5 outline-none bg-transparent rounded border border-gray-400 mb-4'
              placeholder='Design, Dev, etc'
              required
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            cols='30'
            rows='10'
            className='w-full h-44 text-sm py-2 px-4 outline-none bg-transparent border border-gray-400 rounded'
            required
          ></textarea>

          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 text-sm rounded mt-4 w-full'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
