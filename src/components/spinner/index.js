import React from 'react'
import { SpinnerOverlay,SpinnerContainer } from './styles/spinner'

const withSpinner =(WrappedComponent)=>{
    const Spinner = ({isLoading,...restProps})=>{
        return isLoading ? ( 
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>) : <WrappedComponent {...restProps}/>
    }
    return Spinner
}
export default withSpinner