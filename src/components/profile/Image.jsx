import React from 'react'
import classes from './Profile.module.css'

const Image = ({url}) => {
    return (
        <img className={classes.img} src={`${url}`} />
    )
}

export default Image
