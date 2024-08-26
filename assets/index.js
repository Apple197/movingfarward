import { sentData } from './module/communication.js';
import { icon__Library } from './module/icons.js';

//Header login here
const siteLogo = document.querySelector('.site-logo');
siteLogo.innerHTML = icon__Library.site__logo;
siteLogo.addEventListener('click', home);

function home(){
    let hostname = location.hostname;
    location.href = hostname;
}