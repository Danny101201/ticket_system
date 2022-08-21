import React from 'react'

interface FormWrapperProps {
  children: React.ReactNode
}
function FormWrapper({ children }: FormWrapperProps) {
  return (
    <div className="bg-blue-300 flex items-center justify-center h-[calc(100vh_-_7.5rem)]">
      {children}
    </div>
  )
}

export default FormWrapper