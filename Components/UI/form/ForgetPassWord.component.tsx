import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link'

import Button from '../Button'
import FormTitle from './FormTitle'
import FormControl from './FormControl'

import { useDebounce } from 'hooks/index'
import { PATH } from 'constants/Path'
function ForgetPassWord() {
  const [formValue, setFormvalue] = useState<Omit<LoginFormType, 'password'>>({
    email: '',
  })

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFormvalue(preState => ({
      ...preState,
      [e.target.name]: e.target.value
    }))
  }

  const hangleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formValue.email) {
      return console.error('Please enter a valid email')
    }
    console.log(formValue)
  }

  return (
    <div className='bg-white rounded-md p-5 shadow-md lg:w-1/4 w-1/2'>
      <FormTitle title="Forget Password" />
      <hr className='my-2' />
      <form onSubmit={hangleSubmit}>

        <FormControl type="email" name='email' handleChangeInput={handleChangeInput} required label='Email' placeHolder="example@com.tw" />
        <Button type="submit" text="Reset password" />
      </form>
      <hr className='my-2' />

      <p className='text-blue-400 py-4 '>
        <Link href={PATH.Login}>
          <span className="cursor-pointer active:text-blue-600">Login in</span>
        </Link>
      </p>
    </div>
  )
}

export default ForgetPassWord