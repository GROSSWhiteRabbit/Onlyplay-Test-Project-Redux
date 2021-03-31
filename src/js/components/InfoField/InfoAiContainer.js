import * as PIXI from 'pixi.js';
import infoTextStyle from './infoTextStyle';
import {setStateAi} from '../../boundActions';
import { getState, subscribe } from '../../store';
import callAi from '../../ai';


export default function InfoAiContainer() {
    const Container = PIXI.Container;
    const Text = PIXI.Text;
    const Graphics = PIXI.Graphics;


    const infoAiContainer = new Container();
    infoAiContainer.y = 285;
    infoAiContainer.cursor = 'pointer';



    const textAi = new Text('AI:', infoTextStyle);
    infoAiContainer.addChild(textAi);

    const wrappSquareAi = new Container();
    infoAiContainer.addChild(wrappSquareAi);
    wrappSquareAi.x = 38;
    wrappSquareAi.y = 5;
    wrappSquareAi.scale.set(0.8);

    const squareAi = new Graphics();
    squareAi.beginFill(0xe9e9e9);
    squareAi.lineStyle(2);
    squareAi.drawRect(0,0,30,30);
    squareAi.endFill();

    wrappSquareAi.addChild(squareAi);

    const checkMark = new Graphics();
    checkMark.lineStyle(4);
    checkMark.moveTo(2,15);
    checkMark.lineTo(15,28);
    checkMark.lineTo(34,2);
    checkMark.visible = false;
    wrappSquareAi.addChild(checkMark);



    subscribe(()=>{
        const {stateAi, pictureNow, players,arr,squaresArr, stateGame} = getState();
        checkMark.visible = stateAi==='off'?false:true;
        if(stateAi === 'on' && pictureNow === players.secondPlayer.picture && stateGame !=='end' ) {
            setStateAi('wait');
            callAi(arr,squaresArr ,players.secondPlayer.picture);
        }
    });

    const handleToggleAi =  ()=>{
        const {stateAi} = getState();
        if (stateAi == 'off') {
            setStateAi('on');

        } else {
            setStateAi('off');

        }
    };

    infoAiContainer.interactive = true;
    infoAiContainer.on('pointerdown', handleToggleAi);
    return infoAiContainer;
}
