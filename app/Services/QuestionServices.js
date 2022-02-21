import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js"
class QuestionService {
  async getQuestion() {
    // @ts-ignore
    const res = await axios.get('https://opentdb.com/api.php?amount=1')
    console.log('response data', res.data);
    let question = res.data.results.map(q => new Question(q))
    ProxyState.questions = question
    console.log(ProxyState.questions);
  }
}







export const questionService = new QuestionService()