import * as PIXI from 'pixi.js';
import { getState, subscribe } from '../../store';
import infoTextStyle from './infoTextStyle';



export default function ActivePlayer() {
    const Text = PIXI.Text;
    const activePlayer = new Text( `Xод: Игрок 1 - крестик`, infoTextStyle);


    subscribe(()=>{
        const {pictureNow,players} = getState();
        if(pictureNow === players.firstPlayer.picture ) {
            activePlayer.text = `Ход: Игрок 1 - ${players.firstPlayer.picture==='cross'?'крестик':'нолик'}`;
        } else {
            activePlayer.text = `Ход: Игрок 2 - ${players.secondPlayer.picture==='cross'?'крестик':'нолик'}`;
    
        }
    });

    return activePlayer;
}
