import React, { useState } from 'react'
import ButtonCustum from '../components/ButtonCustum'
import Input from '../components/Input'
import TitleForm from '../components/TitleForm'
import {signInWithGoogle} from '../firebase/firebase'
function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form>
        <TitleForm title='I already have an account' subTitle='Signin with your email and password'/>
        <Input label='Email' value={email} type='email' onChange={({target})=>setEmail(target.value)} autoComplete='off'/>
        <Input label='Password' value={password} type='password' onChange={({target})=>setPassword(target.value)}/>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <ButtonCustum type='submit'>Sign In</ButtonCustum>
        <ButtonCustum isGoogleSignIn onClick={signInWithGoogle}>Signin with google</ButtonCustum>
        </div>
        </form>
    )
}

export default SignIn
