import 'bootstrap/dist/css/bootstrap.min.css'
import { router } from './router/index.routes';
import './style.css';

//* Cuando se ingresa a la pagina prinicpal y cuando se recarga la pagina por url
if(window.location.hash == ''){
    router('#/');
}else{
    router(window.location.hash);
}

window.addEventListener('hashchange', () => {
    router(window.location.hash);
});