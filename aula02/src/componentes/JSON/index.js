import josei from './josei.json';
import seinen from './seinen.json';
import shoujo from './shoujo.json';
import shounen from './shounen.json';

function demografia(tipo) {
    switch(tipo){
        case "Josei":
            return josei;
        case "Seinen":
            return seinen;
        case "Shoujo":
            return shoujo;
        case "Shounen":
            return shounen;
        default:
            return "";
    }
}

export default demografia;