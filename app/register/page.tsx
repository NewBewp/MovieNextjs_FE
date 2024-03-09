import React from 'react'
const RegisterLayout = React.lazy(() => import( '../../src/components/auth/register/registerLayout')) 
export default function register ()  {
  return (
    <RegisterLayout/>
  )
}
