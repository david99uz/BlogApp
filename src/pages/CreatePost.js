import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const postsCollection = collection(db, "posts");
    let navigate = useNavigate();
    const createPost = async () => {
        await addDoc(postsCollection, {
            title, postText,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid,
            },
        });
        navigate("/")
    }
    useEffect(() => {
        if (!auth) {
            navigate("/login")
        }

    }, [])

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create a Post</h1>

                <div className="inputGp">
                    <label htmlFor="">Title:</label>
                    <input type="text" placeholder="title" onChange={(event) => { setTitle(event.target.value) }} />
                </div>
                <div className="inputGp">
                    <label htmlFor="">Post:</label>
                    <textarea placeholder="Post" onChange={(event) => { setPostText(event.target.value) }} />
                </div>
                <button onClick={createPost}>Submit Button</button>
            </div>
        </div>
    )
}

export default CreatePost;