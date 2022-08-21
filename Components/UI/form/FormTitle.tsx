import React from 'react'
interface FormTitleProps {
  title: string
 
}
function FormTitle({ title }: FormTitleProps) {
  return (
    <h1 className='text-center sm:text-left text-blue-500 text-3xl'>{title}</h1>
  )
}

export default FormTitle