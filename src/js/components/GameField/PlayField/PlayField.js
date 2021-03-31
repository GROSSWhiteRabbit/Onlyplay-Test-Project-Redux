import * as PIXI from 'pixi.js';
import Squares from './Squares';
import {
    setStateGame,
    setPictureNow,
    incWins,
    choiceOn,
    winTextShow,
    winTextHide,
    tieTextShow,
    tieTextHide,
    clearArr,
    clearProgress
    } from '../../../boundActions';
import { getState, subscribe } from '../../../store';

export default function PlayField() {
    
    const Container = PIXI.Container;

    const playField = new Container();
    playField.interactive = true;
    playField.cursor = 'pointer';
    playField.interactive = false;

    const checkWin =  function(){
        const {arr} = getState();

        for(let i=0; i<3; i++){
    
                if((arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) && arr[i][0] !== undefined ){
                    return true;
                }          
            
        }
        for(let j=0; j<3; j++){
    
            if((arr[0][j] === arr[1][j] && arr[1][j] === arr[2][j]) && arr[0][j] !== undefined ){
                return true;
            }          
        
        }
        if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]  && arr[0][0] !== undefined){
            return true;
        }
        if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]  && arr[1][1] !== undefined){
            return true;
        }
        return false;
    };

    const checktie = function(){
        const {players} = getState();

        if(players.firstPlayer.progress === 5 || players.secondPlayer.progress === 5){
            return true;
        }
        return false;
    };

    const handleRestartGame =  ()=>{
        setPictureNow('cross');
        winTextHide();
        tieTextHide();
        clearArr();
        clearProgress();
        setStateGame('start');
        choiceOn();

        playField.interactive = false;
        playField.off('pointerdown', handleRestartGame);
    };

    subscribe(()=>{
        const {stateGame} = getState();
        console.log(stateGame);
        if(stateGame != 'end' && checkWin()){
            setStateGame('end');
            incWins();
            winTextShow();
            playField.interactive = true;
            playField.on('pointerdown', handleRestartGame);

        } else if(stateGame != 'end' && checktie()){
            setStateGame('end');
            tieTextShow();

            playField.interactive = true;
            playField.on('pointerdown', handleRestartGame);


        }
    });

    

    subscribe(()=>{
        const {stateGame} = getState();
        if(stateGame ==='start'){
            playField.removeChildren();
            playField.addChild(
                ...Squares()
            );
        }
    });

    playField.addChild(
        ...Squares()
    );

    return playField;
    
}
