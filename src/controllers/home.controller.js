import views from '../views/home.view.html';

export const home =  () => {

    const divElement = document.createElement('div');
    divElement.classList.add('fondo');
    divElement.innerHTML = views;

    const btnHome = divElement.querySelector('#btnCLick');
    btnHome.addEventListener('click', () => {
        alert('Click desde el boton de home');
    });

    return divElement;
};