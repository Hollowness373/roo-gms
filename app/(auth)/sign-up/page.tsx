"use client";

import AuthForm from '@/components/AuthForm'
import { signUp } from '@/lib/actions/auth';
import { signUpSchema } from '@/lib/validations'
import React from 'react'

const page = () => (
  <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      inGameName: '',
      email: '',
      password: '',
      classId: '',

    }}
    onSubmit={signUp}
  />
)

export default page;