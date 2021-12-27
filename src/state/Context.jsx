import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllBlogs } from "../data/blogs";

export const AppContext = createContext();

const Context = ({ children }) => {
  // Application's state
  const [user, setUser] = useState({
    email: "hello@gmail.com",
    password: "123456"
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isNotif, setIsNotif] = useState(false);
  const [notifMsg, setNotifMsg] = useState(null)
  const [isEdit, setIsEdit] = useState(false);
  const [blog, setBlog] = useState({});
  const [blogs, setBlogs] = useState(AllBlogs);

  const navigate = useNavigate();

  // this function is responsible for open/close the modal
  const modalHandler = status => {
    setIsModal(status)
    setIsEdit(false)
  }

  //this function will notify us with message  
  const notify = (status, msg) => {
    setIsNotif(status)
    setNotifMsg(msg)
    setTimeout(() => {
      setIsNotif(!status)
    }, 2000)
  }

  //will check the credientials if matches then credentails will stored, change isAdmin value to true, and navigate the route
  const loginUser = (val) => {
    if(val.email === user.email && val.password === user.password){
      setIsAdmin(true);
      navigate("/admin");
    } else {
      notify(true, "User not found")
    }
    
  };

  //add new blog
  const addNewBlog = (blog) => {
    if(blog.title && blog.des !== ""){
      setBlogs([blog, ...blogs]);
      modalHandler(false)
      notify(true, "Blog published")
    } else {
      notify(true, "Fields cannot be empty")
    }
    
  };

  //this function finds single blog
  const findBlog = (id) => {
    const item = blogs.find((el) => el.id === id);
    setBlog(item);
    modalHandler(true)
    setIsEdit(true);
  };


  // this function is responsible for handles changes and update the blog
  const updateBlog = (value) => {
    if(value.title && value.des){
      blogs.filter((el) => {
        if (el.id === value.id) {
          el.title = value.title;
          el.des = value.des;
        }
      });
      notify(true, "Blog updated")
      setIsEdit(false);
      modalHandler(false)
    } else {
      notify(true, "Fields cannot be empty")
    }
    
    
  };


  //delete
  const deleteBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs([...newBlogs]);
  };


  return (
    <AppContext.Provider
      value={{
        user,
        findBlog,
        updateBlog,
        deleteBlog,
        loginUser,
        isAdmin,
        addNewBlog,
        blogs,
        blog,
        isModal,
        isEdit,
        isNotif,
        notifMsg,
        modalHandler
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
