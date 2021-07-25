import { CREATE_QUESTIONNAIRE } from "./actionTypes"

export const createQuestionnaire = () => {
  console.log('clicked')
  return {
    type: CREATE_QUESTIONNAIRE,
    payload: 'dummy'
  }
}