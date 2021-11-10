import 'bootstrap/dist/css/bootstrap.min.css'
import { router } from './router/index.routes';
import './style.css';

router('#/');
window.addEventListener('hashchange', () => {
    router(window.location.hash);
});