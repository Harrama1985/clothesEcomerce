import React from 'react'
import Spinner from './Spinner'
const withSpinner =(WrappedComponent)=>{
    const Spn = ({isLoading,...restProps})=>{
        return isLoading ? ( 
       <Spinner />) : <WrappedComponent {...restProps}/>
    }
    return Spn
}
export default withSpinner