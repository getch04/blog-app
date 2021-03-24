import { useParams ,useHistory } from "react-router";
import useFetch from "./useFetch";
// import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8080/blogs/' + id);
    const history=useHistory();
   const handleDelete =()=>{
       fetch('http://localhost:8080/blogs/' + blog.id,{
           method:"DELETE"
       }).then(()=>{
             history.push('/');
       })
   }

    return (
        <div className=" blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h1>{ blog.title }</h1>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}

        </div>
    );
}

export default BlogDetails;