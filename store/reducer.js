import {SET_CHAT} from './actionTypes'

const initialState = {
  items: [
    {
      id: 1,
      item: 'Susu sapi',
      price: 15000
    },
    {
      id: 2,
      item: 'Susu Kuda Liar',
      price: 25000
    },
    {
      id: 3,
      item: 'Susu Kambing',
      price: 16000
    },
    {
      id: 4,
      item: 'Susu Kuda Nil',
      price: 100000
    },
    {
      id: 5,
      item: 'Susu Unta',
      price: 50000
    },
    {
      id: 6,
      item: 'Susu Kedelai',
      price: 10000
    },
    {
      id: 7,
      item: 'Susu Almond',
      price: 30000
    },
    {
      id: 8,
      item: 'Susu Kacang Tanah',
      price: 20000
    },
    {
      id: 9,
      item: 'Susu Keledai',
      price: 35000
    },
    {
      id: 10,
      item: 'Susu Kerbau',
      price: 23500
    }
  ],
  chats: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case SET_CHAT:
      let newChat = state.chats
      if(action.payload !== ''){
        newChat.push(action.payload)

      }
      const newState = {
        ...state, 
        chats: newChat
      }
      return newState
    default: 
      return state
  }
}