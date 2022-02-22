import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js"
import { Pop } from "../Utils/Pop.js";
class QuestionService {
  async getQuestion() {
    // @ts-ignore
    const res = await axios.get('https://opentdb.com/api.php?amount=1&type=boolean')
    console.log('response data', res.data);
    let question = res.data.results.map(q => new Question(q))
    ProxyState.questions = question
    console.log(ProxyState.questions);
  }

  answer(reply, id) {
    let currentQuestion = ProxyState.questions.find(q => q.id == id)
    if (reply == currentQuestion.correctAnswer) {
      Pop.toast('NERD!')
    } else {
      Pop.toast('DUMMY!')
    }
  }
}


export const questionService = new QuestionService()