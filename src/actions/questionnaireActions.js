import { CREATE_QUESTIONNAIRE } from "./actionTypes"

export const createQuestionnaire = questionnaire => {
  return {
    type: CREATE_QUESTIONNAIRE,
    payload: questionnaire
  }
}
