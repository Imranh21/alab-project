import React, { useContext } from 'react'
import { AppContext } from '../../state/Context'
import BlogCard from './BlogCard'
import classes from './BlogList.module.css'

const BlogList = () => {
    const {blogs} = useContext(AppContext)
    return (
        <div className={classes.listContainer}>
            {blogs?.map(blog => (
                <BlogCard key={blog.id} data={blog}/>
            ))}
        </div>
    )
}

export default BlogList
