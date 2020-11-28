import React, { useState } from 'react'
import ButtonCustum from '../components/ButtonCustum'
import ErrorComponent from '../components/ErrorComponent'
import Input from '../components/Input'
import TitleForm from '../components/TitleForm'
import {auth, signInGoogle} from '../firebase/firebase'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})

    const validateSignin =(email,password)=>{
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        let errors = {}
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
        setError(errors)
        return errors
    }

    const handlerClick = (event)=>{
        event.preventDefault();
        signInGoogle()
    }
    const handlerSubmit=async(event)=>{
        event.preventDefault();
        if(!Object.keys(validateSignin(email,password)).length){
            try {
                await auth.signInWithEmailAndPassword(email,password)
                setEmail('') ; setPassword('') ; 
                
            } catch (error) {
                let err ={}
                err.msg = error.message
                setError(err)
            }
        }
    }
    return (
        <form onSubmit={handlerSubmit}>
        <TitleForm title='I already have an account' subTitle='Signin with your email and password'/>
        <Input label='Email' value={email} type='email' onChange={({target})=>setEmail(target.value)} autoComplete='off'/>      
        {error.emptyEmail ? <ErrorComponent>{error.emptyEmail}</ErrorComponent>:error.email ? <ErrorComponent>{error.email}</ErrorComponent>:null}
        <Input label='Password' value={password} type='password' onChange={({target})=>setPassword(target.value)}/>
        {error.emptyPassword ? <ErrorComponent>{error.emptyPassword}</ErrorComponent>:error.password ? <ErrorComponent>{error.password }</ErrorComponent>:null}
        <div style={{display:"flex",justifyContent:"space-between", paddingTop:"2rem"}}>
        <ButtonCustum type='submit'>Sign In</ButtonCustum>
        <ButtonCustum isGoogleSignIn onClick={handlerClick}>Signin with google</ButtonCustum>
        </div>
        {error.msg ? <ErrorComponent>{error.msg}</ErrorComponent>:null}
        </form>
    )
}

export default SignIn
