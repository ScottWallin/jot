import { appState } from "../AppState.js";
import { notepadsService } from "../Services/NotepadsService.js";
import { setHTML } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"

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
    appState.on('userName', _drawNotepads)
    appState.on('notepads', _drawNotepads)
    appState.on('activeNotepad', _drawActiveNotepad)
    _drawActiveNotepad
    _drawNotepads()
    console.log('hello from the notepads controller')
  }
  setActive(notepadId) {
    notepadsService.setActive(notepadId)
  }

  saveNotepad() {
    let notepad = document.getElementById('notepadBody')
    let notepadBody = notepad.value
    notepadsService.saveNotepad(notepadBody)
  }

  createNotepad() {
    // @ts-ignore
    window.event.preventDefault()
    let form = event?.target
    let formData = getFormData(form)
    formData.user = appState.userName
    notepadsService.createNotepad(formData)
    form.reset()
    document.querySelector('.notepadBody').focus()

  }

}