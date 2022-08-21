import React from 'react'

interface ButtonProps {
  text: string
  type?: 'button' | 'submit' | 'reset'
}
function Button({ text, type = 'button' }: ButtonProps) {
  return (
    <button type={type} className="bg-green-300 py-2 px-5 rounded-sm text-white mb-2 active:bg-purple-500">{text}</button>
  )
}

export default Button