import { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
    //interactive variavble
    const [blogs, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('could not find resource!');
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setBlog(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err.message);

            })
    }, []);

    return (
        <div className="home">
            {setError && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="Mario's Blogs!" handleDelete={handleDelete}/> */}
        </div>
    );
}

export default Home;
