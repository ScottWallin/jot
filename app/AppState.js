// import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Notepad } from "./Models/Notepads.js"

class AppState extends EventEmitter {
  // /** @type {import('./Models/Value').Value[]} */
  // values = loadState('values', [Value])
  /** @type {import('./Models/Notepads').Notepad[]} */
  notepads = []

  notepads = loadState('notepads', [Notepad])

  activeNotepad = {}
  // /** @type {import('./Models/Notepads').Notepad|null} */

  // notepads = [
  //   new Notepad({
  //     title: "I want to take a break to read, but I forgot my book.",
  //     noteBody: "I once more prepared and drank the cup, once more suffered the pangs of dissolution, and came to myself once more with the character, the stature and the face of Henry Jekyll.",
  //     user: 'Scoot',
  //     date: '11/11/2023',
  //     id: '5'
  //   }),
  //   new Notepad({
  //     title: "I can't stress how great a nap sounds",
  //     noteBody: 'Prepare to be boarded. There comes a time in most men’s lives where they feel the need to raise the Black Flag. The existence of the sea means the existence of pirates. Work like a captain, play like a pirate. It is when pirates count their booty that they become mere thieves.',
  //     user: 'Cooper',
  //     date: '5/8/1783',
  //     id: '6'
  //   })
  // ]





















}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
