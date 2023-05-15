import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

function _computeDate(date) {
  return date.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", time: "short" }) + ":" + date.toLocaleTimeString('en-us', { timeStyle: "medium" })
}
export class Notepad {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.noteBody = data.noteBody || ''
    this.name = data.name
    this.color = data.color
    this.textColor = data.textColor
    this.date = data.date ? new Date(data.date) : new Date()
    this.updatedTime = data.updatedTime ? new Date(data.updatedTime) : new Date()
  }


  get notesTemplate() {
    return `                  
          <div class="col-md-10 d-flex bg-secondary rounded elevation-1 m-1">
            <div class="row">
              <div class="col-12 selectable" onclick="app.notepadsController.setActive('${this.id}')">
                <div class="row justify-content-evenly p-2 text-center">
                  <div style="color: ${this.color}" class="col-12">${this.title}</div>
                  <div class="col-12">Date & Time</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1 text-center text-danger fs-1 fw-strong m-2 p-1">
            <button class="btn btn-danger"><i class="mdi mdi-trash-can-outline" onclick="app.notepadsController.removeNotepad('${this.id}')"></i></button>
          </div>`
  }
  get ActiveTemplate() {
    return `              
      <div class="col-8 d-flex justify-content-evenly pb-2">
        <div class="row">
          <div class="col-3 bg-secondary border rounded text-bold">
                <div style="color: ${this.color}" class=" p-1 fs-3 fw-bold">${this.title}</div>
                <div class="p-1">${this.name}</div>
                <div class="p-1">Updated: ${_computeDate(this.updatedTime)}</div>
                <div class="p-1">Created: ${_computeDate(this.date)} </div>
              </div>
              <textarea class="col-8 rounded" name="noteBody" id="noteBody" cols="30" rows="25"
                onblur="app.notepadsController.saveNotepad()">${this.noteBody}</textarea>
        </div>
        
        </div>
      </div>`
  }

  // get ComputeDate() {
  //   let date = this.date
  //   return (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + (date.getFullYear())
  // }

  get ComputeTitle() {
    if (this.title) {
      return this.title.slice(0, 10) + '...'
    } else {
      return 'no title'
    }
  }
  // static createNotepadButton() {`
  // <button ${appState.userName !='' ? '' : 'disabled} id="createNotepadButton" type="submit" class="btn btn-success mt-3  ms-3">Start Writing <i class="mdi mdi-fountain-pen-tip"></i></button>`
  //               }


}