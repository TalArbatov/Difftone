import { CREATE_QUESTIONNAIRE } from "../actions/actionTypes";

const defaultState = {
  dummy: '',
  questionnaires: []
};

const questionnaireReducer = (state = defaultState, action) => {
  console.log(action.type);
  switch(action.type) {
    
    case CREATE_QUESTIONNAIRE:
      return { ...state, dummy: action.payload };
    default:
      return state;
  }
};

export default questionnaireReducer;