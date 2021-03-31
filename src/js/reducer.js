const initialState = {
    stateGame:'start',
    pictureNow:'cross',
    players: {
        firstPlayer: {
            picture:'cross',
            wins: 0,
            progress:0
        },
        secondPlayer: {
            picture:'zero',
            wins: 0,
            progress:0
        }
    },
    stateAi: 'off',
    arr: [[],[],[]],
    choice: true,
    winTextVisible: false,
    tieTextVisible: false,
    squaresArr: [[],[],[]],
};


export default function reducer(state = initialState, action){
    switch(action.type){

        case 'SET_VALUE_ARR': 
            const newArr = [...state.arr];
                    newArr[action.i][action.j] = action.value;
            return {
                ...state,
                arr: newArr
            };
        
        case 'CLEAR_ARR': 
            return {
                ...state,
                arr: [[],[],[]]
            };

        case 'INC_PROGRESS': 
            const newPlayers = {...state.players};
            if(newPlayers.firstPlayer.picture === state.pictureNow){
                newPlayers.firstPlayer.progress += 1;
            } else {
                newPlayers.secondPlayer.progress += 1;
            }
            return {
                ...state,
                players: newPlayers
            };
            
        case 'CLEAR_PROGRESS':
            const newwPlayers = {...state.players};
            newwPlayers.firstPlayer.progress = 0;
            newwPlayers.secondPlayer.progress = 0;
            return {
                ...state,
                players: newwPlayers
            };

        case 'SET_PICTURENOW':
            return {
                ...state,
                pictureNow: action.value
            };

        case 'SET_STATE_GAME':
            return {
                ...state,
                stateGame: action.value
            };

        case 'INC_WINS': 
            const players = {...state.players};
            if(players.firstPlayer.picture === state.pictureNow){
                players.firstPlayer.wins += 1;
            } else {
                players.secondPlayer.wins += 1;
            }
            return {
                ...state,
                players: players
            }; 

        case 'CHOICE_ON':
            return {
                ...state,
                choice: true
            };

        case 'CHOICE_OFF':
            return {
                ...state,
                choice: false
            };

        case 'WIN_TEXT_SHOW':
            return {
                ...state,
                winTextVisible: true
            };

        case 'WIN_TEXT_HIDE':
            return {
                ...state,
                winTextVisible: false
            };

        case 'TIE_TEXT_SHOW':
            return {
                ...state,
                tieTextVisible: true
            };

        case 'TIE_TEXT_HIDE':
            return {
                ...state,
                tieTextVisible: false
            };
        
        case 'TOGGLE_PICTURE_PLAYERS':
            const newwwPlayers = {...state.players};
            if(newwwPlayers.firstPlayer.picture === 'cross'){
                newwwPlayers.firstPlayer.picture = 'zero';
                newwwPlayers.secondPlayer.picture = 'cross';
            } else {
                newwwPlayers.firstPlayer.picture = 'cross';
                newwwPlayers.secondPlayer.picture = 'zero';
            }
            return {
                ...state,
                players: newwwPlayers
            };
        
        case 'SET_STATE_AI':
            return {
                ...state,
                stateAi: action.value
            };

        case 'SET_SQUARES_ARR':
            return {
                ...state,
                squaresArr: action.value
            };
            
        default: return state;
    
    }   
}