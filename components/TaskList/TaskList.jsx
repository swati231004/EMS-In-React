import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
    // console.log(data);

    return (
        <div id='tasklist' className='h-[54%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-14 py-5'>
            {data?.tasks?.length > 0 ? (
                data.tasks.map((elem, index) => {
                    if (elem.active) {
                        return <AcceptTask key={index} task={elem} data={elem}/>;
                    }
                    if (elem.newTask) {
                        return <NewTask key={index} task={elem} data={elem} />;
                    }
                    if (elem.completed) {
                        return <CompleteTask key={index} task={elem} data={elem}/>;
                    }
                    if (elem.failed) {
                        return <FailedTask key={index} task={elem} data={elem}/>;
                    }
                    return null;
                })
            ) : (
                <p className='text-gray-500'>No tasks available</p>
            )}
        </div>
    );
};

export default TaskList;
