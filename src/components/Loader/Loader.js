import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loader.scss'

export const Loader = () => {

    return (
        <div className="loader">
            <Spinner animation="border" variant="primary"/>
            <h2 className="my-3">Loading...</h2>
        </div>
    )
}
