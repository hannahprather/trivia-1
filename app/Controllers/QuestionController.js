import { ProxyState } from "../AppState.js"
import { questionService } from "../Services/questionServices.js"
import { Pop } from "../Utils/Pop.js"


function _drawQuestion() {
  let template = ''
  ProxyState.questions.forEach(q => template += `<h3>${q.question}</h3>`)
  document.getElementById('question').innerHTML = template
}


export class QuestionController {
  constructor() {
    ProxyState.on('questions', _drawQuestion)
    this.getQuestion()
  }

  async getQuestion() {
    try {
      console.log('started getting questions')
      await questionService.getQuestion()
      console.log('finished gettting questions')
    } catch (error) {
      console.error('error')
      Pop.toast(error.message, 'error')
    }
  }
}