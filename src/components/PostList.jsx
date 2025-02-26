import { useState, useEffect } from 'react';
import axios from "axios";

// aggiunta per uso link in listato (per dettaglio pizza)
import { Link } from "react-router-dom";

const PostList = () => {

    // utilizzo dello useState per la gestione dei data (array degli oggetti post)
    const [posts, setPosts] = useState([]);


    // funzione di gestione chiamata all'API
    function fetchPosts() {
        axios.get("http://localhost:3000/posts")
            .then((res) => {
                setPosts(res.data);
            })
            .catch(function (error) {
                console.log(error);

            }
            )
    }

    // richiamo la funzione di richiesta dati al caricamento del componente
    // Solo al primo rendering
    useEffect(fetchPosts, []);



    // funzione per la cancellazione dei post
    function deletePost(idPost) {
        const updatePost = posts.filter((post) => {
            return post.id !== idPost;
        })

        // chiamata axios alla rotta di delete
        axios.delete(`http://localhost:3000/posts/${idPost}`)
            .then(res =>
                // lo settiamo anche nel FE
                setPosts(updatePost)
            )
            .catch(err => console.log(err)
            )


    }

    return (
        <>
            <div className="containerPost">

                {posts.length === 0 ? (

                    <h2>NON CI SONO POST</h2>
                ) : (

                    posts.map((post) => (
                        <div className="postItem" key={post.id}>
                            <h2>{post.title}</h2>
                            {/* <h3>{post.autore}</h3> */}
                            <p className="contenuto">{post.content}</p>
                            <img src={post.image} alt={post.title} />
                            <p>{post.tags.join(', ')}</p>
                            <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
                            {/* <span>{post.published ? "post pubblicato" : "post non pubblicato"}</span> */}
                            <button className="deleteButton" onClick={() => deletePost(post.id)}>Cancella</button>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default PostList