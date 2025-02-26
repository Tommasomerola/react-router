import axios from "axios";
import { useState, useEffect } from 'react';

// import della parte di ritorno parametro rotta FE
import { useParams } from "react-router-dom";

// aggiunta per uso link in listato (per dettaglio pizza)
import { Link } from "react-router-dom";

export default function PostDetail() {

    // destructuring per ritornare l'id (proprietà id dell'oggetto param)
    const { id } = useParams();

    // utilizzo dello useState per la gestione dei data
    const [post, setPost] = useState({});

    // funzione di gestione chiamata all'API
    function fetchPosts() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(error => console.log(error))
    }

    // richiamo la funzione di richiesta dati al caricamento del componente
    // Solo al primo rendering
    useEffect(() => fetchPosts(), [id])

    return (
        <>
            <nav>
                <Link to={`/posts/${parseInt(id) - 1}`}>Prev</Link>
                <Link to={`/posts/${parseInt(id) + 1}`}>Next</Link>
            </nav>
            <h2>Ciao sono la pagina di dettaglio dei post {post.name}</h2>
            <img src={post.image} alt={post.name} />

        </>
    );
}