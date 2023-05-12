import { appState } from "../AppState.js";
import { Notepad } from "../Models/Notepads.js";



class NotepadsService {
  createNotepad(formData) {
    let newNotepad = new Notepad(formData)
    appState.activeNotepad = newNotepad
    appState.emit('cases')
  }
  setActive(notepadId) {
    let foundNotepad = appState.notepads.find(n => n.id == notepadId)
    console.log(notepadId);
    // @ts-ignore
    appState.activeNotepad = foundNotepad
  }

}

export const notepadsService = new NotepadsService()