import React, { useState, useEffect } from "react"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config"
import { useNavigate } from "react-router-dom"

function CreatePost({ isAuth }) {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/");
    };

    const changeInputVal = (event) => setTitle(event.target.value)
    const changeTextAreaVal = (event) => setPostText(event.target.value)

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                    <label> Title:</label>
                    <input
                        placeholder="Title..."
                        onChange={changeInputVal}
                    />
                </div>
                <div className="inputGp">
                    <label> Post:</label>
                    <textarea
                        placeholder="Post..."
                        onChange={changeTextAreaVal}
                    />
                </div>
                <button onClick={createPost}> Submit Post</button>
            </div>
        </div>
    );
}

export default CreatePost
