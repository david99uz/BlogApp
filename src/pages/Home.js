import React, { useState, useEffect } from 'react'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import "../App.css";
const Home = (isAuth) => {
    const [postList, setPostList] = useState([]);
    const postCollectionRef = collection(db, 'posts');
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postCollectionRef);

            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        }
        getPosts()
    }, [postCollectionRef])
    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };
    return (
        <div className="homePage">
            {postList.map((post, i) => {
                return <div className="post" key={i}>
                    <div className="postHeader">
                        <div className="title">
                            <h1 key={i}>
                                {post.title}
                            </h1>
                        </div>
                        <div className="deletePost">
                            {!isAuth && post.author.id === auth.currentUser.uid && (
                                <button
                                    onClick={() => {
                                        deletePost(post.id);
                                    }}
                                >

                                    &#128465;
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="postTextContainer" key={i}>

                        {post.postText}
                        <h3>{post.author.name}</h3>
                    </div>
                </div>
            })}
        </div >
    )
}

export default Home;