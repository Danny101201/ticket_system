import { ChangeEvent, useState } from 'react';

import FormWrapper from 'Components/UI/form/FormWrapper';
import Login from 'Components/UI/form/Login.component';
import Layout from 'Components/element/Layout/Layout';

import { useAppSelector } from 'app/hooks'

import { NextPageWithLayout } from '../_app'
const LoginPage: NextPageWithLayout = () => {

  const userInfo = useAppSelector(state => state.user)
  return (
    <FormWrapper>
      <Login />
    </FormWrapper>
  )
}
LoginPage.getLayout = (page) => {
  return (
    <Layout title="Login page">
      {page}
    </Layout>
  )

}

export default LoginPage
