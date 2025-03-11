import React from 'react'


const RecentLogs = ({ target, initiator, action, createdAt }: Logs) => {

    const options: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit' };

  return (
    <li>
        <div className='flex flex-row justify-between items-center mt-1'>
            <div className='flex flex-row gap-1'>
                <h2 className='font-semibold'>{target}</h2>
                <h2>{action}</h2>
                <h2 className='font-semibold'>{initiator}</h2>
            </div>
            <h2 className='text-sm text-slate-500 '>{createdAt?.toLocaleDateString('en-us', options)}</h2>
        </div>
    </li>
  )
}

export default RecentLogs