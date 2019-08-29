<template>
  <div id="app">
    <h1>Venoid-admin form</h1>
    <a href="https://github.com/venoid/admin-form.git#readme">
      <b-icon icon="link" />
      DOCS
    </a>
    <hr>
    <div class="form-wrapper">
      <venoid-form
          :model="data"
          :is-loading="isLoading"
          :fields="{
            title: {
              label: 'Title',
              placeholder: 'Enter book title',
              type: 'text'
            },
            author: {
              label: 'Author',
              placeholder: 'Enter author name',
              type: 'text',
              validator: authorValidator
            },
            pages: {
              label: 'Number of pages',
              type: 'number'
            },
            agree: {
              label: 'Agree?',
              type: 'checkbox'
            },
            goodOrBad: {
              label: 'Good or Bad?',
              placeholder: 'Select your option',
              type: 'select',
              options: ['good', 'bad']
            },
            switch: {
              label: 'Switch?',
              type: 'switch'
            }
          }"
          :actions="[
            {
              label: 'Save',
              onclick: save
            },
            {
              label: 'Cancel',
              type: 'default',
              onclick: cancel
            }
          ]"
        />
    </div>
  </div>
</template>

<script>
import VenoidForm from './venoid-form';

export default {
  name: 'app',
  components: {
    VenoidForm,
  },
  data() {
    return {
      isLoading: false,
      data: {
        title: "Oliver Twist",
        author: "Charles Dickens",
        pages: 300,
        agree: false,
        goodOrBad: null,
        switch: false
      }
    }
  },
  methods: {
    save() {
      alert('Saved!')
    },
    cancel() {
      alert('Canceled')
    },
    authorValidator(value) {
      if (value === '') {
        throw new Error('Author name cannot be empty.')
      } else if (value.length < 4) {
        throw new Error('Author name cannot be shorter than 4 chars.')
      }
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.form-wrapper {
  padding: 16px;
  max-width: 400px;
  background-color: #eeeeee;
}
</style>
