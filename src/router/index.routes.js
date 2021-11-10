import { pages } from "../controllers/index";
let section = document.getElementById('root');


export const router = async( route ) => {

    section.innerHTML = '';
    switch (route){
        case '#/':
           return  section.appendChild(pages.home())
        break;
        case '#/pagina2':
            return  section.appendChild(await pages.paginaDos())
        break;
        case '#/pagina3':
            console.log('Pagina 3');
        break;
        default:
            console.log('404 !!!!');
        break;
    }

}