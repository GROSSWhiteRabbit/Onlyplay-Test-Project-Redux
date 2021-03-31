import * as PIXI from 'pixi.js';
import { getState, subscribe } from '../../store';
import infoTextStyle from './infoTextStyle';

export default function WinsContainer() {
    const Container = PIXI.Container;
    const Text = PIXI.Text;
    const winsContainer = new Container();


    const winsTitle = new Text( 'Победы:', infoTextStyle);
    winsContainer.addChild(winsTitle);


    const winsPlayer1 = new Text( 'Игрок 1: 0', infoTextStyle);
    winsPlayer1.y = 34;
    winsPlayer1.x = 20;
    winsContainer.addChild(winsPlayer1);

    const winsPlayer2 = new Text( 'Игрок 2: 0', infoTextStyle);
    winsPlayer2.y = 62;
    winsPlayer2.x = 20;
    winsContainer.addChild(winsPlayer2);

    winsContainer.y = 60;

    subscribe(()=>{
        const {players} = getState();
        winsPlayer1.text = `Игрок 1: ${players.firstPlayer.wins}`;
        winsPlayer2.text = `Игрок 2: ${players.secondPlayer.wins}`;
    });
    return winsContainer;

}
