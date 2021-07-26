import { createStore, combineReducers } from 'redux'
import questionnaireReducer from './reducers/questionnaire';

const configStore = () => createStore(
  combineReducers({
    questionnaire: questionnaireReducer
  })
);

export default configStore;