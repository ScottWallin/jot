import { appState } from "../AppState.js";
import { Notepad } from "../Models/Notepads.js";
import { saveState } from "../Utils/Store.js";

function _saveNotepads() {
  saveState('notepads', appState.notepads)
}

class NotepadsService {
  createNotepad(noteData) {
    const newNote = new Notepad(noteData)
    // appState.notepads.push(newNotepad)
    appState.notepads = [...appState.notepads, newNote]
    appState.activeNotepad = newNote
    _saveNotepads()
    appState.emit('notepads')
  }

  saveNotepad(noteBody) {
    let activeNotepad = appState.activeNotepad
    // @ts-ignore
    activeNotepad.noteBody = noteBody
    activeNotepad.updatedTime = new Date()
    appState.emit('activeNotepad')
    _saveNotepads

  }
  setActive(id) {
    const foundNotepad = appState.notepads.find(n => n.id == id)
    console.log('this is active', id);
    // @ts-ignore
    appState.activeNotepad = foundNotepad
  }
  removeNotepad(id) {
    let filteredArray = appState.notepads.filter(n => n.id != id)
    appState.notepads = filteredArray
    saveState('notepads', appState.notepads)
    appState.activeNotepad = null
  }

}

export const notepadsService = new NotepadsService()