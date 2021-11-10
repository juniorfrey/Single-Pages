import view from '../views/pagina2.view.html';

export const pagina2 = () => {

    const divElement = document.createElement('div');
    divElement.classList.add('fondo');
    divElement.innerHTML = view;

    return divElement;
}
