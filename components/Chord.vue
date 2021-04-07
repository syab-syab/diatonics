<template>
  <div>
    <div class="mb-3 key-select">
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.key" v-on="diatonic()">
          {{ option.text }}
        </option>
      </select>
    </div>
    <!-- <button @click="diatonic()">表示</button> -->
    <div class="daiatonic-zone">
      <table class="table">
        <tr><th>Ⅰ△7</th><td>{{ chord[0] }}△7</td></tr>
        <tr><th>Ⅱm7</th><td>{{ chord[2] }}m7</td></tr>
        <tr><th>Ⅲm7</th><td>{{ chord[4] }}m7</td></tr>
        <tr><th>Ⅳ△7</th><td>{{ chord[5] }}△7</td></tr>
        <tr><th>Ⅴ7</th><td>{{ chord[7] }}7</td></tr>
        <tr><th>Ⅵm7</th><td>{{ chord[9] }}m7</td></tr>
        <tr><th>Ⅶm7(♭5)</th><td>{{ chord[11] }}m7(♭5)</td></tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chord: [],
      selected: '',
      options: [
        { text: 'C', value: 0 },
        // { text: 'C#', value: 1 },
        { text: 'D♭', value: 1 },
        { text: 'D', value: 2 },
        // { text: 'D#', value: 3 },
        { text: 'E♭', value: 3 },
        { text: 'E', value: 4 },
        { text: 'F', value: 5 },
        { text: 'F#', value: 6 },
        { text: 'G', value: 7 },
        // { text: 'G#', value: 8 },
        { text: 'A♭', value: 8 },
        { text: 'A', value: 9 },
        // { text: 'A#', value: 10 },
        { text: 'B♭', value: 10 },
        { text: 'B', value: 11 },
      ]
    }
  },
  methods: {
    diatonic() {
      // javascriptの配列は参照渡しで操作すると元の配列まで変更されてしまうから
      // concat()などでコピーする
      let baseKey
      if (this.selected === 1 || this.selected === 3 || this.selected === 8 || this.selected === 10) {
        baseKey = this.$store.getters['diatonicKey/getFlat'].concat()
      } else {
        baseKey = this.$store.getters['diatonicKey/getSharp'].concat()
      }
      let tmp = baseKey.splice(0, this.selected)
      let chords = baseKey.concat(tmp)
      this.chord = chords
    }
  }
}
</script>

<style scoped>
.key-select, .daiatonic-zone {
  font-size: 2rem;
}
</style>