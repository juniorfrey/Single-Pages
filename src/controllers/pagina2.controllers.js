import view from '../views/pagina2.view.html';


const getPost = async() => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await resp.json();
}

export const pagina2 = async() => {

    const divElement = document.createElement('div');
    divElement.classList.add('fondo');
    divElement.innerHTML = view;

    const publicaciones = divElement.querySelector('#post');
    const posts = await getPost();
    
    posts.forEach(post => {
        publicaciones.innerHTML += /*html*/`<li class="list-group-item border-primary bg-dark text-white">
                                                <h5>${post.title}</h5>
                                                <p>
                                                    ${post.body}
                                                </p>
                                            </li>`;
    });
    

    return divElement;
}
