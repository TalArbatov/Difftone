import { CREATE_QUESTIONNAIRE } from "../actions/actionTypes";

const defaultState = {
  dummy: '',
  questionnaires: [],
  config: {}
};

const questionnaireReducer = (state = defaultState, action) => {
  switch(action.type) {
    
    // TODO: validate deep nesting (via lodash get or .?)
    case CREATE_QUESTIONNAIRE:
      return { 
        ...state, 
        questionnaires: [
          ...state.questionnaires,
          {
            title: action.payload.title, 
            questions: action.payload.questions
          }
        ]
      };
    default:
      return state;
  }
};

export default questionnaireReducer;