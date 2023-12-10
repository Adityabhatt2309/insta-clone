import React from 'react'

const Button = ({className,children ,type,onClick}) => {
  return (
    <button type={type} className={`${className} transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded m-2`} onClick={onClick}>
      {children}
    </button>
  )
}
export default Button