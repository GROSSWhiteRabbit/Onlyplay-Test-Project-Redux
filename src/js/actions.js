

const setValueArr = (i,j, value) => ({
    type: 'SET_VALUE_ARR',
    i,
    j,
    value
});

const clearArr = () => ({
    type: 'CLEAR_ARR',
});

const incProgress = () => ({
    type: 'INC_PROGRESS',
});

const clearProgress= () => ({
    type: 'CLEAR_PROGRESS',
});

const setPictureNow = (value) => ({
    type: 'SET_PICTURENOW',
    value
});

const setStateGame = (value) => ({
    type: 'SET_STATE_GAME',
    value
});

const incWins = () => ({
    type: 'INC_WINS',
});

const choiceOn = () => ({
    type: 'CHOICE_ON',
});

const choiceOff = () => ({
    type: 'CHOICE_OFF',
});

const winTextShow = () => ({
    type: 'WIN_TEXT_SHOW',
});

const winTextHide = () => ({
    type: 'WIN_TEXT_HIDE',
});

const tieTextShow = () => ({
    type: 'TIE_TEXT_SHOW',
});

const tieTextHide = () => ({
    type: 'TIE_TEXT_HIDE',
});

const togglePicturePlayers = () => ({
    type: 'TOGGLE_PICTURE_PLAYERS',
});

const setStateAi = (value) => ({
    type: 'SET_STATE_AI',
    value
});

const setSquaresArr = (value) => ({
    type: 'SET_SQUARES_ARR',
    value
});


export {
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

};

