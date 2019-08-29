# Venoid Admin Form Component

[![npm](https://img.shields.io/npm/v/@venoid/admin-form?color=green)](https://www.npmjs.com/package/@venoid/admin-form)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@venoid/admin-form)

Form component for your administration provides you good options how to build your form.

![screenshot-example](https://raw.githubusercontent.com/venoid/admin-form/master/images/example-admin-form.png)

## Props
| Props         | Type    | Default   |                                      |
|---------------|---------|-----------|--------------------------------------|
| actions       | Array   | []        | Array of objects with [options](#action-options). Represent buttons in the bottom of the form.    |
| fields        | Object  | {}        | Keys of this object correspond to properties of your data model. [Options here](#field-options)              |
| isLoading     | Boolean | false     | Shows loading animation on the form.                                           |
| model         | Object  | {}        | Your data model.                                                               |

#### action options
```
{
  label: 'Say hello' // String,
  onclick: () => { window.alert("Hello") }, // Function - your validator function
  type: 'default' // Enum['is-primary', 'is-danger', 'is-secondary', 'default']
}
```

#### field options
```
{
  icon: 'pencil', // String - name of material design icon
  label: 'Author', // String
  options: ['orange', 'apple'], // Array, used for select field type
  placeholder: 'Enter author name', // String
  type: 'text', // Enum['text','number','password','email','checkbox','select','switch']
  validator: (value) => { // Function - your validator function
    if (value.length < 4) {
      throw new Error('Value must have at least 4 chars.')
    }
  }
}
```

## Demo
To see demo run a project:

1. Install npm dependencies
2. Run with `npm run serve` / `yarn serve`
