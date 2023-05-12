import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class Notepad {
  constructor(data) {
    this.id = data.id || generateId()
    this.title = data.title
    this.noteBody = data.noteBody || 'Jot your thoughts!'
    this.user = data.user
    this.noteCount = data.noteCount
    this.textColor = data.textColor
    this.date = data.date ? new Date(data.date) : new Date()
    this.unlocked = false
  }


  get notesTemplate() {
    return `                  
                  <h1>${this.title}</h1>
                  <p>${this.noteBody}</p>
                  <p>${this.user}</p>
                  <p>${this.date}</p>`
  }
  get ActiveTemplate() {
    return `              
              <h2>${this.title}</h2>
              <p>${this.user}</p>
              <p>${this.date}</p>
              <textarea class="w-50" name="noteBody" id="noteBody" cols="30"
                rows="10">${this.noteBody}</textarea>
            </div>`
  }

  get ComputeDate() {
    let date = this.date
    return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear())
  }

  get ComputeTitle() {
    return (this.noteBody.slice(0, 10) + '...')
  }


}