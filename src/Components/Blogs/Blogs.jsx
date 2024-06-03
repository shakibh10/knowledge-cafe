import { useEffect } from "react";
import { useState } from "react";
// import Header from "../Header/Header";


const Blogs = () => {

    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data =>setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">

            <h1 className="4xl">Blogs:{blogs.length}</h1>
          

            {/* {
                blogs.map(blog=>(<Header key={blog.id} blog={blog}></Header>))
            } */}
        </div>
    );
};

export default Blogs;