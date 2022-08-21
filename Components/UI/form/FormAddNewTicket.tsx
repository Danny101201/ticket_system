import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link'

import Button from '../Button'
import FormTitle from './FormTitle'
import FormControl from './FormControl'

import { validateForm } from 'utils/checkoutForm'
function FormAddNewTicket() {
  const [isSubmit, setIsSubmit] = useState<boolean>(false)
  const [formValue, setFormvalue] = useState<AddNewFormType>({
    subject: '',
    issue: '',
    details: '',
  })
  const [formErrors, setFormverrors] = useState<{ [key in keyof AddNewFormType]: string }>({
    subject: '',
    issue: '',
    details: '',
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormvalue(preState => ({
      ...preState,
      [e.target.name]: e.target.value
    }))
    // validate
    isSubmit && setFormverrors(validateForm(formValue));
  }

  const hangleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormverrors(validateForm(formValue));
    console.log(formValue)
  }
  return (
    <>
      <div className='bg-white rounded-md p-5 shadow-md lg:w-1/4 w-1/2'>
        <FormTitle title="Add New Tickets" />
        <hr className='my-2' />
        <form onSubmit={hangleSubmit}>

          <FormControl name='subject' handleChangeInput={handleChangeInput} label='subject' />
          <p className="text-red-500">{formErrors.subject}</p>
          <FormControl name='issue' handleChangeInput={handleChangeInput} label='issue found at' placeHolder="Password" type="date" />
          <p className="text-red-500">{formErrors.issue}</p>

          <FormControl name='details' handleChangeInput={handleChangeInput} required label='details' placeHolder="details" type="text" />
          <p className="text-red-500">{formErrors.details}</p>

          <Button type="submit" text="Add new Tickets" />
        </form>
        <hr className='my-2' />
      </div>
    </>
  )
}

export default FormAddNewTicket