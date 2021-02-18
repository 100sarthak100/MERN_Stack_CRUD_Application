import React, {useState, useEffect} from 'react'
import axios from 'axios';

function FetchData() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [fromButtonId, setfromButtonId] = useState(1);

    const handleClick = () => {
        setfromButtonId(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${fromButtonId}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [fromButtonId]);

    return (
        <div>
            <div>
                <input type="text" value={id} onChange={e => setId(e.target.value)} />
                <button type="button" onClick={handleClick} >Fetch Data</button>
            </div>
            <div>
                {post.title}
            </div>
        </div>
    )
}

export default FetchData
