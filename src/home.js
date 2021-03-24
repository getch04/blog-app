
import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
const {data:blogs,isLoading,error}=useFetch('http://localhost:8080/blogs');
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==="mario")} title="Mario's Blogs!" handleDelete={handleDelete}/> */}
        </div>
    );
}

export default Home;
