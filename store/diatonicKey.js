export const state = () => ({
  sharp: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#','A', 'A#', 'B',],
  flat: ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭','A', 'B♭', 'B',]
})

// export const mutations = {
//   alert() {
//     alert("test")
//   }
// }

export const getters = {
  getSharp(state) {
    return state.sharp
  },
  getFlat(state) {
    return state.flat
  }
}