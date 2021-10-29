import kanojo3d from './3dkanojo.jpg';
import ahogirl from './ahogirl.jpg';
import asobi from './asobi.jpg';
import bento from './bento.jpg';
import demichan from './demichan.jpg';
import gamers from './gamers.jpg';
import gokusen from './gokusen.jpg';
import itazura from './itazura.jpg';
import kaguyasama from './kaguyasama.jpg';
import kyokou from './kyokou.jpg';
import maousama from './maousama.jpg';
import mobpsycho from './mobpsycho.jpg';
import netojuu from './netojuu.jpg';
import nogame from './nogame.jpg';
import noguns from './noguns.jpg';
import rec from './rec.jpg';
import servant from './servant.jpg';
import watamote from './watamote.jpg';
import wotaku from './wotaku.jpg';
import youjo from './youjo.jpg';

function chamarAnime(nome) {
    switch (nome) {
        case "3dkanojo":
            return kanojo3d;
        case "ahogirl":
            return ahogirl;
        case "asobi":
            return asobi;
        case "bento":
            return bento;
        case "demichan":
            return demichan;
        case "gamers":
            return gamers;
        case "gokusen":
            return gokusen;
        case "itazura":
            return itazura;
        case "kaguyasama":
            return kaguyasama;
        case "kyokou":
            return kyokou;
        case "maousama":
            return maousama;
        case "mobpsycho":
            return mobpsycho;
        case "netojuu":
            return netojuu;
        case "nogame":
            return nogame;
        case "noguns":
            return noguns;
        case "rec":
            return rec;
        case "servant":
            return servant;
        case "watamote":
            return watamote;
        case "wotaku":
            return wotaku;
        case "youjo":
            return youjo;
        default:
            return "";
    }
}

export default chamarAnime;