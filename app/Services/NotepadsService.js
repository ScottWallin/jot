import { appState } from "../AppState.js";
import { Notepad } from "../Models/Notepads.js";
import { saveState } from "../Utils/Store.js";

function _saveNotepads() {
  saveState('notepads', appState.notepads)
}

class NotepadsService {
  createNotepad(formData) {
    let newNotepad = new Notepad(formData)
    appState.notepads.push(newNotepad)
    _saveNotepads()
    appState.activeNotepad = newNotepad
    appState.emit('cases')
  }

  saveNotepad(noteBody) {
    let activeNotepad = appState.activeNotepad
    // @ts-ignore
    activeNotepad.noteBody = noteBody
    appState.emit('activeNotepad')
    _saveNotepads

  }
  setActive(notepadId) {
    let foundNotepad = appState.notepads.find(n => n.id == notepadId)
    console.log(notepadId);
    // @ts-ignore
    appState.activeNotepad = foundNotepad
  }

}

export const notepadsService = new NotepadsService()