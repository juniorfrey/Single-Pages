import { noFound } from "./404.controllers";
import { home } from "./home.controller";
import { pagina2 } from "./pagina2.controllers";

const pages = {
    home: home,
    paginaDos: pagina2,
    notfound: noFound
    
}

export {pages};