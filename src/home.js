import { useState,useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
    //interactive variavble
    const [blogs, setBlog] = useState(null);
    const [isLoading, setIsLoading]=useState(true);
  
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
          .then(res=>{
             return res.json();
          })
          .then((data)=>{
              console.log(data);
              setBlog(data);
              setIsLoading(false);
          })
          .catch(err=>{
              console.log(err.message)
          })
    },[]);

    return (
        <div className="home">
            {isLoading && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="Mario's Blogs!" handleDelete={handleDelete}/> */}
        </div>
    );
}

export default Home;
