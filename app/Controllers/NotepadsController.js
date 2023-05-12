import { appState } from "../AppState.js";
// import { getFormData } from "../Utils/FromHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _drawNotepads() {
  console.log('these are my notes')
  let notepads = appState.notepads
  let template = ''
  notepads.forEach(note => template += note.notesTemplate)
  setHTML('notepads', template)
}

function _drawActiveNotepad() {
  let activeNotepad = appState.activeNotepad
}
export class NotepadsController {
  constructor() {
    _drawActiveNotepad
    _drawNotepads()
    console.log('hello from the notepads controller')
  }
}