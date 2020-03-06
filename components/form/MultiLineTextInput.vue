<template>
  <div class="pl-md">
    <p class="md-title">{{label}}</p>
    <div v-for="(line, index) in lines" :key="line.index" class="multi-field field">
      <div class="control multi-control">
        <div class="multi-input-container">
          <md-field class="md-outline-light no-label">
            <md-input
              @keyup.prevent="emitUpdate($event, index)"
              :value="line.value"
              placeholder="Add Something Nice."
              class="multi-input"
              type="text"
            ></md-input>
            <input type="text" hidden style="display:none;" />
          </md-field>
        </div>
        <div class="btn-container mt-sm">
          <!-- Delete the line -->
          <md-button
            class="md-icon-button ml-auto"
            @click.prevent="emitRemove(index)"
            type="button"
          >
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </div>
    </div>

    <!-- Add the Line -->
    <div class="mb-lg t-right pr-lg mr-sm">
      <md-button @click="emitAdd" type="button" class="md-raised md-primary">Add an answer</md-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    lines: {
      type: Array,
      required: true
    }
  },
  computed: {
    lastLine() {
      return this.lines[this.lines.length - 1];
    },
    hasLines() {
      return this.lines.length > 0;
    },
    hasLastLineValue() {
      return this.lastLine && this.lastLine.value !== "";
    },
    canDeleteLine() {
      return this.lines.length > 1;
    },
    canAddLine() {
      return this.hasLines && this.hasLastLineValue;
    }
  },
  methods: {
    emitAdd() {
      if (this.canAddLine || this.lines.length === 0) {
        this.$emit("addClicked");
      }
    },
    emitRemove(index) {
      this.canDeleteLine && this.$emit("removeClicked", index);
    },
    emitUpdate(event, index) {
      const { value } = event.target;
      this.$emit("valueUpdated", { value, index });
    }
  }
};
</script>
<style scoped lang="scss">
/* .multi-input {
  float: left;
  width: 100%;
} */
/* .multi-button {
  height: inherit;
} */
.multi-input-container {
  display: flex;
  flex: 1;
}
.btn-container button {
  display: flex;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
}
.multi-control {
  display: flex;
}
</style>
