import * as PIXI from 'pixi.js';
import { getState, subscribe } from '../../store';


export default function EndText() {
    const Text = PIXI.Text;

    const winTextStyle = {
    
        fontSize: 54,
        fill: 'rgb(0,200,0)',
        stroke: 'black',
        strokeThickness: 4,
        
    };
    
    const winText = new Text( 'winText', winTextStyle);
    
    winText.anchor.set(0.5,0.5);
    winText.x = 150;
    winText.y = 150;
    winText.visible = false;
    
    
    
    const tieTextStyle = {
        
        fontSize: 72,
        fill: 'rgb(200,0,0)',
        stroke: 'black',
        strokeThickness: 4,
        
    };
    const tieText = new Text( 'Tie', tieTextStyle);
    
    
    tieText.anchor.set(0.5,0.5);
    tieText.x = 150;
    tieText.y = 150;
    tieText.visible = false;

    subscribe(()=>{
        const {winTextVisible, tieTextVisible,players, pictureNow} = getState();

        if(pictureNow === players.firstPlayer.picture) {
            winText.text = `Игрок 2 win`;
        } else {
            winText.text = `Игрок 1 win`;
        }

        winText.visible = winTextVisible;
        tieText.visible = tieTextVisible;
    });

    return {winText, tieText};
}

