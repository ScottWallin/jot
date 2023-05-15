import { appState } from "../AppState.js";
import { notepadsService } from "../Services/NotepadsService.js";
import { setHTML, setText } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js";

function _drawNotepads() {
  console.log('these are my notes')
  let notepads = appState.notepads
  // let length = appState.notepads.length
  let template = ''
  notepads.forEach(note => template += note.notesTemplate)
  setHTML('notepads', template)
  // setText('total-notepads', length)
}

function _drawActiveNotepad() {
  let activeNotepad = appState.activeNotepad
  if (appState.activeNotepad) {
    setHTML('active-notepad', activeNotepad.ActiveTemplate)
  } else {
    setHTML('active-notepad', '')
  }
}
export class NotepadsController {
  constructor() {
    // appState.on('name', _drawNotepads)
    appState.on('notepads', _drawNotepads)
    appState.on('activeNotepad', _drawActiveNotepad)
    _drawActiveNotepad
    _drawNotepads()
    console.log('hello from the notepads controller')
  }
  setActive(id) {
    notepadsService.setActive(id)
  }

  saveNotepad() {
    let newContent = document.querySelector('.noteBody')
    notepadsService.saveNotepad(newContent.value)
  }

  createNotepad() {
    // @ts-ignore
    window.event.preventDefault()
    const form = window.event?.target
    let notepadData = getFormData(form)
    // noteData.user = appState.user
    notepadsService.createNotepad(notepadData)
    form.reset()
    // document.querySelector('.notepadBody').focus()

  }

  async removeNotepad(id) {
    if (await Pop.confirm('Burn this notepad?'))
      notepadsService.removeNotepad(id)
  }

}