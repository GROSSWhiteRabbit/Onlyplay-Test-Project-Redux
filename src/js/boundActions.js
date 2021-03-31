import {bindActionCreators} from 'redux';
import {dispatch} from './store';
import * as actions from './actions';


export const {
    setValueArr,
    clearArr,

    incProgress,
    clearProgress,

    setPictureNow,
    setStateGame,
    incWins,

    choiceOn,
    choiceOff,

    winTextShow,
    winTextHide,
    
    tieTextShow,
    tieTextHide,

    togglePicturePlayers,
    setStateAi,
    setSquaresArr

} =   bindActionCreators(actions,dispatch);
