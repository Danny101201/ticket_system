import React, { ChangeEventHandler } from 'react'

interface FormLableProps {
  label: string
  name?: string
  type?: InputType
  placeHolder: string
  required?: boolean,
  handleChangeInput?: ChangeEventHandler<HTMLInputElement>
}
function FormControl({ label, placeHolder, name, required, handleChangeInput, type = 'text' }: FormLableProps) {
  return (
    <div className="flex flex-col gap-2 my-5">
      <label className="text-md">{label}</label>
      <input type={type} name={name} onChange={handleChangeInput} required={required} className='input rounded-md' placeholder={placeHolder} />
    </div>
  )
}

export default FormControl