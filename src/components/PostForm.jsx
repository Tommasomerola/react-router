// Hook di React per gestire lo stato del componente
import { useState, useEffect } from "react";
import axios from "axios"



const initialFormData = {
    title: "",
    content: "",
    image: "",
    tags: [],
};

const PostForm = () => {

    // utilizzo dello useState per la gestione dei data (array di oggetti post)
    const [posts, setPosts] = useState([]);

    // state per la gestione delle informazioni raccolte dai campi del form
    const [formData, setFormData] = useState(initialFormData)

    // function fetchPosts() {

    //     axios.get("http://localhost:3000/posts")
    //         .then((res) => {
    //             console.log(res.data)
    //             setPosts(res.data)
    //         })
    //         .catch((error) => {
    //             console.error(error)
    //         })
    // }

    // // chiamata API per ottenere i post     
    // useEffect(fetchPosts, [])



    // funzione di gestione delle info dei campi
    function handleFormData(e) {
        // se il campo è tags, lo splittiamo in un array
        const value = e.target.name === "tags" ? e.target.value.split(",") : e.target.value;

        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: value,
        }));
    }

    // funzione di gestione dell'invio dell'intero form 
    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:3000/posts", formData)
        .then(res => {
            setPosts((currentPosts) => [...currentPosts, res.data ]);
        })
        .catch(err =>console.log(err))

        // aggiungo il nuovo post alla lista      possiamo usare id: Date.now() per un id univoco
        // setPosts((currentPosts) => [...currentPosts, { id: currentPosts[currentPosts.length - 1].id + 1, ...formData }]);


        // resetto il form
        setFormData(initialFormData);

    }


    // function deletePost(idPost) {
    //     const updatePost = posts.filter((post) => post.id !== idPost)
    //     // chiamata delete per eliminare il post
    //     axios.delete(`http://localhost:3000/posts/${idPost}`)

    //     .then(res => {
    //         setPosts(updatePost)
    //     })

    //     .catch(err => console.log(err))
    // }



    // contenuto della pagina
    return (
        <>
            <form id="formPost" action="#" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    onChange={handleFormData}
                    value={formData.title}
                    placeholder="Inserisci titolo post"
                />

                <textarea
                    name="content"
                    onChange={handleFormData}
                    value={formData.content}
                    placeholder="Contenuto post"
                ></textarea>

                <input
                    type="text"
                    name="image"
                    onChange={handleFormData}
                    value={formData.image}
                    placeholder="immagine post"
                />

                <input
                    type="text"
                    name="tags"
                    onChange={handleFormData}
                    value={formData.tags}
                    placeholder="tags post"
                />

                {/* bottone di invio */}
                <button className="addButton">Aggiungi</button>

</form>



{/* <div className="containerPost">

    {posts.length === 0 ? (

        <h2>NON CI SONO POST</h2>
    ) : (

        posts.map((post) => (
            <div className="postItem" key={post.id}>
                <h2>{post.title}</h2>
                {/* <h3>{post.autore}</h3> */}
{/* <p className="contenuto">{post.content}</p>
<img src={post.image} alt={post.title} />
<p>{post.tags.join(', ')}</p> */}
{/* <span>{post.published ? "post pubblicato" : "post non pubblicato"}</span> */}
{/* <button className="deleteButton" onClick={() => deletePost(post.id)}>Cancella</button>
</div > */}
{/* ))
    )}
</div > */}
</>
)
}

export default PostForm