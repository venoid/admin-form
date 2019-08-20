<template>
  <form>
    <venoid-form-field
      v-for="(field, index) in fields"
      :key="`field.${index}`"
      :value="model[index]"
      :label="field.label"
      :placeholder="field.placeholder"
      :type="field.type"
      :icon="field.icon"
      :options="field.options"
      :validator="field.validator || null"
      @updated="(v) => (model[index] = v)"
      @validated="(e) => updatedField(index, e)"
    />
    <hr v-if="actions" />
    <venoid-form-action
      v-for="(action, index) in actions"
      :key="index"
      :label="action.label"
      :type="action.type"
      :onclick="action.onclick"
      :is-form-valid="isValid"
    />
    <b-loading :is-full-page="false" :active="isLoading" />
  </form>
</template>

<script>
import VenoidFormField from './FormField'
import VenoidFormAction from './FormAction'

export default {
  name: 'venoid-form',
  components: { VenoidFormField, VenoidFormAction },
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    fields: {
      type: Object,
      default: () => {}
    },
    actions: {
      type: Array,
      default: () => []
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      errors: {},
      data: {}
    }
  },
  computed: {
    isValid() {
      for (const key in this.errors) {
        if (this.errors[key] || this.errors[key] === null) {
          return false
        }
      }

      return true
    }
  },
  created() {
    Object.keys(this.fields).forEach((key) => {
      this.$set(this.errors, key, null)
    })
  },
  methods: {
    updatedField(fieldKey, error) {
      this.errors[fieldKey] = error
    }
  }
}
</script>
