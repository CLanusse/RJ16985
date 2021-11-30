import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loader.scss'

export const Loader = () => {

    return (
        <div className="loader">
            <Spinner 
                animation="border" 
                size="lg" 
                variant="primary"
            />
        </div>
    )
}
