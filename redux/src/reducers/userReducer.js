export default function userReducer(state = '', {type, payload}){
    switch(type){
      case 'updateuser':
        return payload;
    }
    return state;
  }