import { CREATE_QUESTIONNAIRE } from "./actionTypes"

export const createQuestionnaire = (title, questions) => {
  return {
    type: CREATE_QUESTIONNAIRE,
    payload: {
      title,
      questions
    }
  }
}