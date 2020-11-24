import React, { useState } from 'react'
import ButtonCustum from '../components/ButtonCustum'
import Input from '../components/Input'
import TitleForm from '../components/TitleForm'

function SignUp() {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <form>
        <TitleForm title="I don't have an account" subTitle='Signup with your email and password'/>
        <Input label='displayName' value={displayName} type='text' onChange={({target})=>setDisplayName(target.value)} />
        <Input label='Email' value={email} type='email' onChange={({target})=>setEmail(target.value)} />
        <Input label='Password' value={password} type='password' onChange={({target})=>setPassword(target.value)}/>
        <Input label='confirmPassword' value={confirmPassword} type='password' onChange={({target})=>setConfirmPassword(target.value)}/>
        <ButtonCustum type='submit' inverted>Sign Up</ButtonCustum>
        </form>
    )
}

export default SignUp
