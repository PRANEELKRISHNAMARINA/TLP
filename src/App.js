import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({ title: '', author: '', description: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/books').then(res => setBooks(res.data));
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/books', form).then(res => setBooks([...books, res.data]));
    };

    return (
        <div>
            <h1>Bookstore</h1>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" onChange={handleChange} />
                <input name="author" placeholder="Author" onChange={handleChange} />
                <input name="description" placeholder="Description" onChange={handleChange} />
                <button type="submit">Add Book</button>
            </form>
            <ul>
                {books.map(book => (
                    <li key={book._id}>{book.title} by {book.author}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;