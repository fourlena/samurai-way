import {MainActionType, MessageDataPropsType, MessagePageType} from "./store";

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

export type UpdateMessageTextActionType = {
    type: "UPDATE-MESSAGE-TEXT"
    newMessage: string
}

export let AddMessageAC = (): AddMessageActionType => {
    return {type: 'ADD-MESSAGE'}
}

export let UpdateMessageTextAC = (newMessage: string): UpdateMessageTextActionType => {
    return {type: 'UPDATE-MESSAGE-TEXT', newMessage}
}

let initialState = {
    dialogData: [
        {id: 1, name: 'Lena'},
        {id: 2, name: 'Slava'},
        {id: 3, name: 'Liza'}
    ],
    messageData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'whats up?'},
        {id: 3, message: 'Goodbye'}
    ],
    newMessageText: 'HELLO'
}

const dialogReducer = (state: MessagePageType = initialState, action: MainActionType) => {
    switch (action.type) {
        case  'ADD-MESSAGE':
            return {
                ...state,
                messageData: [...state.messageData, {id: 3, message: state.newMessageText}],
                newMessageText: ''
            }

        case  'UPDATE-MESSAGE-TEXT': {
            return {
                ...state,
                newMessageText: action.newMessage
            };
        }
        default :
            return state;
    }

};

export default dialogReducer;