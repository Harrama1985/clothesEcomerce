import React, { useState } from 'react'
import ButtonCustum from '../components/ButtonCustum'
import Input from '../components/Input'
import TitleForm from '../components/TitleForm'
import {auth,creatUserProfilDoc} from '../firebase/firebase'
function SignUp() {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const validateSignup =(displayName,email,password,confirmPassword)=>{
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let errors = {}
        if (!displayName && !email && !password && !confirmPassword){
            errors.empty = 'All inputs are required'
        }
        if (!pattern.test(email)) {
            errors.email = ' Invalid email'
        }
        if(password.length<6){
            errors.password = 'password should be at least 6 characters'
        }
        if(password !== confirmPassword){
            errors.confirmPassword = 'confirmPassword and password arent equal'
        }
        return errors
    }

    const handelSubmit = async (event)=>{
        event.preventDefault();
        if(!Object.keys(validateSignup(displayName,email,password,confirmPassword)).length){
            try {
                const user = await auth.createUserWithEmailAndPassword(email,password)
                creatUserProfilDoc(user,displayName)
                setEmail('') ; setPassword('') ; setDisplayName('') ; setConfirmPassword('')
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <form onSubmit={handelSubmit}>
        <TitleForm title="I don't have an account" subTitle='Signup with your email and password'/>
        <Input label='displayName' value={displayName} type='text' onChange={({target})=>setDisplayName(target.value)} />
        <Input label='Email' value={email} type='email' onChange={({target})=>setEmail(target.value)} />
        <Input label='Password' value={password} type='password' onChange={({target})=>setPassword(target.value)}/>
        <Input label='confirmPassword' value={confirmPassword} type='password' onChange={({target})=>setConfirmPassword(target.value)}/>
        <ButtonCustum type='submit' inverted >Sign Up</ButtonCustum>
        </form>
    )
}

export default SignUp
