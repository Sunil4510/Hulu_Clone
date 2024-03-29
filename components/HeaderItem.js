import React from 'react'

const HeaderItem = ({title,Icon}) => {
    return (
        <div className="flex flex-col items-center cursor-pointer group
         w-12 sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100 hover:animate-bounce tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
