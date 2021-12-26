import React from 'react'
import classes from './Heading.module.css'

const Heading = ({title, shortDescription}) => {
    return (
        <div className={classes.heading}>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.shortDescription}>{shortDescription}</p>
        </div>
    )
}

export default Heading
