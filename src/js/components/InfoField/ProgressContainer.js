import * as PIXI from 'pixi.js';
import { getState, subscribe } from '../../store';
import infoTextStyle from './infoTextStyle';


export default function ProgressContainer() {
    const Container = PIXI.Container;
    const Text = PIXI.Text;


    const progressContainer = new Container();


    const progressTitle = new Text( 'Ходы:', infoTextStyle);
    progressContainer.addChild(progressTitle);

    const generalProgress = new Text( 'Общие: 0', infoTextStyle);
    progressContainer.addChild(generalProgress);

    generalProgress.y = 34;
    generalProgress.x = 20;

    progressContainer.addChild(generalProgress);

    const progressPlayer1 = new Text( 'Игрок 1: 0', infoTextStyle);
    progressPlayer1.y = 62;
    progressPlayer1.x = 20;
    progressContainer.addChild(progressPlayer1);

    const progressPlayer2 = new Text( 'Игрок 2: 0', infoTextStyle);
    progressPlayer2.y = 92;
    progressPlayer2.x = 20;
    progressContainer.addChild(progressPlayer2);


    progressContainer.x = 175;
    progressContainer.y = 60;

    subscribe(()=>{
        const {players} = getState();
        const progressFirst = players.firstPlayer.progress;
        const progressSecond = players.secondPlayer.progress;
        const progressGeneral = Math.max(progressFirst,progressSecond);
    
        generalProgress.text = `Общие: ${progressGeneral}`;
        progressPlayer1.text = `Игрок 1: ${progressFirst}`;
        progressPlayer2.text = `Игрок 2: ${progressSecond}`;
    });

    return progressContainer;
}
