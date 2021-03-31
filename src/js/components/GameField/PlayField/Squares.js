import * as PIXI from 'pixi.js';
import Zero from '../../additional/Zero';
import Cross from '../../additional/Cross';
import {
    setValueArr,
    incProgress,
    setPictureNow,
    setStateGame,
    choiceOff,
    setSquaresArr,
    setStateAi
    } from '../../../boundActions';
import { getState, subscribe } from '../../../store';


export default function Squares() {

    const Container = PIXI.Container;
    const Graphics = PIXI.Graphics;

    const squares =[];
    const squaresArr = [[],[],[]];



    const handleClickSquare = (i,j)=>{
        const {arr, stateGame, pictureNow, stateAi} = getState();

        if(stateGame != 'end'){
            setStateGame('play');
        }
        choiceOff();
        if(arr[i][j]==undefined){
            if(pictureNow == 'zero'){
                setValueArr(i, j, 0);
                incProgress();
                setPictureNow('cross'); 
                
            } else if(pictureNow == 'cross') {
                setValueArr(i, j, 1);
                incProgress();
                setPictureNow('zero'); 

            }
            
            if(stateAi ==='wait'){
                setStateAi('on');
            }

        }
        
    };


    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            const wrappSquare = new Container();
            wrappSquare.x = 100*j;
            wrappSquare.y = 100*i;
            wrappSquare.cursor = 'pointer'
            
            const square = new Graphics();
            square.beginFill(0xe9e9e9);
            square.lineStyle(2);
            square.drawRect(0,0,100,100);
            square.endFill();
            wrappSquare.addChild(square);



            
            subscribe(()=>{
                const {arr} = getState();
                if(arr[i][j] === 0){
                    wrappSquare.addChild(Zero());
                    
                } else if(arr[i][j] === 1) {
                    wrappSquare.addChild(Cross());
                }
            });


            squares.push(wrappSquare);
            squaresArr[i][j] = wrappSquare;

            wrappSquare.interactive = true;
            wrappSquare.on('pointerdown',()=> handleClickSquare(i,j));
        }

    }


    setStateGame('ready');
    setSquaresArr(squaresArr);

    return squares;

}
