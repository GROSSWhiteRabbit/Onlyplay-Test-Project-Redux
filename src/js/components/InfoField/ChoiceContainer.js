import * as PIXI from 'pixi.js';
import infoTextStyle from './infoTextStyle';
import Zero from '../additional/Zero';
import Cross from '../additional/Cross';
import {
    togglePicturePlayers,
} from '../../boundActions';
import { getState, subscribe } from '../../store';


export default function ChoiceContainer() {


    const Container = PIXI.Container;
    const Text = PIXI.Text;

    const choiceContainer = new Container();
    choiceContainer.y = 250;
    choiceContainer.x = 70;
    choiceContainer.cursor = 'pointer';

    const choiceTitleText = new Text('Ваш выбор:',infoTextStyle);
    choiceTitleText.x = 30;
    choiceTitleText.y = -40;
    choiceContainer.addChild(choiceTitleText);

    const choiceEndText = new Text('Изменить',{...infoTextStyle, fill: 0x006000});
    choiceEndText.x = 30;
    choiceEndText.y = 80;
    choiceContainer.addChild(choiceEndText);


    const choicePlayer1 = new Container();
    choiceContainer.addChild(choicePlayer1);

    const textChoicePlayer1 = new Text('Игрок 1 это -',infoTextStyle);
    choicePlayer1.addChild(textChoicePlayer1);

    const wrapPicture1 = new Container();
    wrapPicture1.scale.set(0.4);
    wrapPicture1.x = 200;
    wrapPicture1.addChild(Cross());
    choicePlayer1.addChild(wrapPicture1);

    const choicePlayer2 = new Container();
    choicePlayer2.y = 34; 
    choiceContainer.addChild(choicePlayer2);

    const textChoicePlayer2 = new Text('Игрок 2 это -',infoTextStyle);
    choicePlayer2.addChild(textChoicePlayer2);

    const wrapPicture2 = new Container();
    wrapPicture2.scale.set(0.4);
    wrapPicture2.x = 200;
    wrapPicture2.addChild(Zero());
    choicePlayer2.addChild(wrapPicture2);

    subscribe(()=>{
        const {choice} = getState();
        if(choice){
            choiceContainer.cursor = 'pointer';
        } else {
            choiceContainer.cursor = 'not-allowed';
        }
    });


    const handleChangeChoice = ()=>{
        const {players, stateGame,choice} = getState();

        if(choice){
            togglePicture();
        }

        function togglePicture(){
            if(players.firstPlayer.picture == 'cross'){
                togglePicturePlayers();

                wrapPicture1.removeChildren();
                wrapPicture1.addChild(Zero());
                wrapPicture2.removeChildren();
                wrapPicture2.addChild(Cross());
            } else {
                togglePicturePlayers();

                wrapPicture1.removeChildren();
                wrapPicture1.addChild(Cross());
                wrapPicture2.removeChildren();
                wrapPicture2.addChild(Zero());


            }
        }
        
    };

    choiceContainer.interactive = true;
    choiceContainer.on('pointerdown',handleChangeChoice );
    return choiceContainer;
}
