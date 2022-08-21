import React, { ChangeEvent, FormEvent, useState } from 'react'
import Link from 'next/link'

import Button from '../Button'
import FormTitle from './FormTitle'
import FormControl from './FormControl'

import { useDebounce } from 'hooks/index'
import { PATH } from 'constants/Path'
function Login() {
  const [formValue, setFormvalue] = useState<LoginFormType>({
    email: '',
    password: ''
  })
  const debouncFormValue = useDebounce<LoginFormType>(formValue, 1000)

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
    if (!formValue.password) {
      return console.error('Please enter a valid password')
    }
    console.log(formValue)
  }

  return (
    <div className='bg-white rounded-md p-5 shadow-md lg:w-1/4 w-1/2'>
      <FormTitle title="Client Login" />
      <hr className='my-2' />
      <form onSubmit={hangleSubmit}>

        <FormControl name='email' handleChangeInput={handleChangeInput} required label='Email' placeHolder="Please Enter your email" />
        <FormControl name='password' handleChangeInput={handleChangeInput} required label='Password' placeHolder="Password" type="password" />
        <Button type="submit" text="login" />
      </form>
      <hr className='my-2' />
      <p className='text-blue-400 py-4 '>
        <Link href={PATH.forgetPassWord}>
          <span className="cursor-pointer active:text-blue-600">Forget password ?</span>
        </Link>
      </p>
    </div>
  )
}

export default Login