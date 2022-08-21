import type { NextPage } from 'next'
import React, { ChangeEvent, useState } from 'react';

import FormWrapper from 'Components/UI/form/FormWrapper';
import ForgetPassWord from 'Components/UI/form/ForgetPassWord.component';
import Layout from 'Components/element/Layout/Layout';
const ForgetPassPage: NextPageWithLayout = () => {
  
  return (
    <FormWrapper>
      <ForgetPassWord />
    </FormWrapper>
  )
}
ForgetPassPage.getLayout = (page: React.ReactNode) => {
  return (
    <Layout title="Forget Page ">
      {page}
    </Layout>
  )

}

export default ForgetPassPage

