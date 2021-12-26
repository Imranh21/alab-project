import React, { useContext } from "react";
import { AppContext } from "../../state/Context";
import classes from "./BlogCard.module.css";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

const BlogCard = ({ data: { id, title, des, date } }) => {
  const { isAdmin, deleteBlog, findBlog } = useContext(AppContext);

  const handleDelete = () => {
    deleteBlog(id);
  };
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
        <p className={classes.des}>{des}</p>
        <p className={classes.date}>{date}</p>
      </div>

      {isAdmin && (
        <div className={classes.actions}>
          <HiPencil onClick={() => findBlog(id)} />
          <MdDelete onClick={handleDelete} />
        </div>
      )}
    </div>
  );
};

export default BlogCard;
