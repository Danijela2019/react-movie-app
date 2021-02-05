import { ImFilm } from "react-icons/im";
import { ImRocket } from "react-icons/im";
import {SiThemoviedatabase} from "react-icons/si";

const cardData = [
{
    id:1,
    title:'Easy to use',
    text:`Very user friendly and intuitive applicaiton.
    The users can search for movies they are interested in.`,
    icon: <ImFilm/>,

},
{ 
    id:2,
    title:'TMDB movie data base',
    text:`The app is built using the TMDB movie data base.An enormus source of some great titles.`,
    icon:<SiThemoviedatabase/>

},
{
    id:3,
    title:'Why this app',
    text:`As a huge movie fan and junior developer, I saw this as a perfect opportunity to work on a project that I love.`,
    icon:<ImRocket/>
}
]

export default cardData;