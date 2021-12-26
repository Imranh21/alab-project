import React, {useState, useContext} from 'react'
import Input from '../formControll/Input'
import Textarea from '../formControll/Textarea'
import Button from '../formControll/Button'
import { AppContext } from '../../state/Context'
import classes from './FormStyles.module.css'
import Heading from '../heading/Heading'
import {MdClose} from 'react-icons/md'


const EditForm = () => {
    const {updateBlog, blog, modalHandler} = useContext(AppContext)
    const [title, setTitle] = useState(blog.title)
    const [des, setDes] = useState(blog.des)

    const editBlog = e => {
        e.preventDefault()
        updateBlog({
            id: blog.id,
            title,
            des
        })
    }

    return (
        <>
            <form className={classes.form} onSubmit={editBlog}>
                <div className={classes.closeIcon}>
                    <MdClose onClick={() => modalHandler(false)} />
                </div>
                
                <Heading title="Edit blog" />
                <Input value={title} setValue={setTitle}/>
                <Textarea value={des} setValue={setDes}/>
                <Button text="update"/>
            </form>
        </>
    )
}

export default EditForm
