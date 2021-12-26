import React, {useState, useContext} from 'react'
import { AppContext } from '../../state/Context'
import Heading from '../heading/Heading'
import Input from '../formControll/Input'
import Textarea from '../formControll/Textarea'
import Button from '../formControll/Button'
import { genid } from '../../helper/generateID'
import classes from './FormStyles.module.css'
import {MdClose} from 'react-icons/md'

const AddForm = () => {
    const {addNewBlog, modalHandler} = useContext(AppContext)
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    

    const publishBlog = e => {
        e.preventDefault()
        addNewBlog({
            id: genid(),
            date: new Date().toDateString(),
            title: title,
            des: des
        })
    }
    return (
        <>
            <form className={classes.form} onSubmit={publishBlog}>
                <div className={classes.closeIcon}>
                    <MdClose onClick={() => modalHandler(false)} />
                </div>
                <Heading title="Add New Blog"/>
                <Input label="Title" value={title} setValue={setTitle}/>
                <Textarea label="Description" value={des} setValue={setDes}/>
                <Button type="submit" bgColor="#34a0a4" text="Publish"/>
            </form>
        </>
    )
}

export default AddForm
