import { CREATE_QUESTIONNAIRE } from "../actions/actionTypes";

const defaultState = {
  dummy: '',
  questionnaires: []
};

// {
//   title:
//   questions: [
//     {
//       name: '',
//       options: [

//       ]
//     }

//   ]
// }

const questionnaireReducer = (state = defaultState, action) => {
  console.log(action.type);
  switch(action.type) {
    
    case CREATE_QUESTIONNAIRE:
      return { 
        ...state, 
        questionnaires: [...state.questionnaires, action.payload]
      };
    default:
      return state;
  }
};

export default questionnaireReducer;