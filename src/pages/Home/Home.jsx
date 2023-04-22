import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../config";

function Home({ isAuth }) {
    const [postLists, setPostList] = useState([])
    const postsCollectionRef = collection(db, "posts")

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    }

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, [deletePost]);

    return (
        <div className="homePage">
            {!postLists.length && <h1>No posts now</h1>}
            {postLists.map((post) => {
                return (
                    <div key={post.id} className="post">
                        <div className="postHeader">
                            <div className="title">
                                <h1> {post.title}</h1>
                            </div>
                            <div className="deletePost">
                                {isAuth && post.author.id === auth.currentUser.uid && (
                                    <button
                                        onClick={() => deletePost(post.id)}
                                    >
                                        &#128465;
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className="postTextContainer"> {post.postText} </div>
                        <h3>@{post.author.name}</h3>
                    </div>
                );
            })}
        </div>
    );
}

export default Home
