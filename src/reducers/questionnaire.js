import { CREATE_QUESTIONNAIRE } from "../actions/actionTypes";

const defaultState = {
  dummy: '',
  questionnaires: [],
  config: {}
};

const questionnaireReducer = (state = defaultState, action) => {
  console.log(action.type);
  switch(action.type) {
    
    // TODO: validate deep nesting (via lodash get or .?)
    case CREATE_QUESTIONNAIRE:
      console.log('tal', action.payload.title, action.payload.questions);
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