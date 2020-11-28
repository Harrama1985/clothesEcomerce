import React, { useState } from 'react'
import ButtonCustum from '../components/ButtonCustum'
import ErrorComponent from '../components/ErrorComponent'
import Input from '../components/Input'
import TitleForm from '../components/TitleForm'
import {auth,creatUserProfilDoc} from '../firebase/firebase'
function SignUp() {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState({})

    const validateSignup =(displayName,email,password,confirmPassword)=>{
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let errors = {}
        if(!displayName){
            errors.emptyDisplayName = 'Name is required !'
        }
        if(!email){
            errors.emptyEmail = 'Email adress is required !'
        }
        if (!password){
            errors.emptyPassword = 'password is required!'
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
        setError(errors)
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
                let err ={}
                err.msg = error.message
                setError(err)
            }
        }
    }
    return (
        <form onSubmit={handelSubmit}>
        <TitleForm title="I don't have an account" subTitle='Signup with your email and password'/>
        <Input label='displayName' value={displayName} type='text' onChange={({target})=>setDisplayName(target.value)} />
        {error.emptyDisplayName ? <ErrorComponent>{error.emptyDisplayName}</ErrorComponent>:null}
        <Input label='Email' value={email} type='email' onChange={({target})=>setEmail(target.value)} />
        {error.emptyEmail ? <ErrorComponent>{error.emptyEmail}</ErrorComponent>:error.email ? <ErrorComponent>{error.email}</ErrorComponent>:null}
        <Input label='Password' value={password} type='password' onChange={({target})=>setPassword(target.value)}/>
        {error.emptyPassword ? <ErrorComponent>{error.emptyPassword}</ErrorComponent>:error.password ? <ErrorComponent>{error.password }</ErrorComponent>:null}
        <Input label='confirmPassword' value={confirmPassword} type='password' onChange={({target})=>setConfirmPassword(target.value)}/>
        {error.confirmPassword ? <ErrorComponent>{error.confirmPassword}</ErrorComponent>:null}
        <ButtonCustum type='submit' inverted >Sign Up</ButtonCustum>
        {error.msg ? <ErrorComponent>{error.msg}</ErrorComponent>:null}
        </form>
    )
}

export default SignUp
