import { useState } from 'react';
import {useHistory} from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history=useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsLoading(true);
        fetch('http://localhost:8080/blogs', {
            method: 'POST',
            headers: { 'Content-Type': "application/Json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('new blog Added!');
                setIsLoading(false);
                // history.go(-1);
                history.push('/');
            })

    }

    return (
        <div className="create">Add New Blogs!!
            <form onSubmit={handleSubmit}>
                <label >Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label >Blog Body</label>
                <textArea required value={body} onChange={(e) => setBody(e.target.value)} />
                <label> Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)} >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Blog adding...</button>}
                <p>{title}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;