<template>
  <div>
    <div
      v-if="!isClicked"
      class="item-add"
      @click="onToggleClick"
    >
      + {{ textNew }}
    </div>
    <div
      v-if="isClicked"
      class="item-add-input"
    >
      <form @submit="onSubmit">
        <span>+ </span>
        <input
          type="text"
          @blur="onBlur"
          :placeholder="textNew"
          :ref="'input' + inputType"
          v-model="inputName"
        >
        <input
          type="submit"
          class="input-submit"
        >
      </form>
    </div>
  </div>
</template>

<script>
export default  {
  data () {
    return {
      isClicked: false,
      inputName: '',
    }
  },
  props: {
    inputType: String,
  },
  computed: {
    textNew () {
      if (this.inputType === 'files') {
        return 'New File'
      } else {
        return 'New Folder'
      }
    }
  },
  methods: {
    onToggleClick () {
      this.isClicked = !this.isClicked
      this.$nextTick(() => {
        const inputRef = this.$refs['input' + this.inputType]
        if (this.isClicked === true) {
          inputRef.focus()
        } else {
          inputRef.blur()
        }
      })
    },
    onSubmit (e) {
      e.preventDefault()
      let newData = {
        name: this.inputName
      }
      if (this.inputType === 'files') {
        newData.folder = this.$store.state.folders.selected
      }
      // add the data
      // files/CREATE or folders/CREATE
      this.$store.commit(this.inputType + '/CREATE', newData)

      this.$nextTick(() => {
        this.isClicked = false
      })

      // blur the input
      this.onToggleClick()

      // select new file
      // files/SELECT or folders/SELECT
      this.$store.commit(this.inputType + '/SELECT', { id: true })
    },
    onBlur () {
      this.onToggleClick()
      this.inputName = ''
    },
  }
}

</script>

<style>
.item-add-input {
  border-bottom: solid 2px #0099cc;
  padding: 15px 10px;
  font-size: 1em;
  input {
    background: none;
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: 1em;
    font-weight: bold;
    display: inline-block;
    width: 150px;
  }
  &:hover {
    opacity: .8;
    background: #F8FAFC;
  }
}

.input-submit {
  display: none !important;
}

.item-add {
  padding: 15px 10px;
  border-bottom: solid 2px rgba(0,0,0, .05);
  font-weight: bold;
  color: #0099cc;
  cursor: pointer;
  &:hover {
    opacity: .8;
    background: #F8FAFC;
  }
}

</style>

