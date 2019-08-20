<template>
  <b-button
    class="FormAction"
    :type="type !== 'default' ? type : null"
    :disabled="!isFormValid"
    @click.prevent="onclick"
    >{{ label }}</b-button
  >
</template>

<script>
export default {
  name: 'venoid-form-action',
  props: {
    label: {
      type: String,
      default: ''
    },
    onclick: {
      type: Function,
      default: null
    },
    type: {
      type: String,
      default: 'is-primary',
      validator: (type) =>
        ['is-primary', 'is-danger', 'is-secondary', 'default'].includes(type)
    },
    isFormValid: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss">
.FormAction {
  margin-right: 0.25rem;
}
</style>
