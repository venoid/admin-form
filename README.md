# Venoid Admin Form Component

[![npm](https://img.shields.io/npm/v/@venoid/admin-form?color=green)](https://www.npmjs.com/package/@venoid/admin-form)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@venoid/admin-form)

Form component for your administration provides you good options how to build your form.

![screenshot-example](https://camo.githubusercontent.com/c9c6ddeddf13420c7ff0eaec98ebb9e1b5a748e8/68747470733a2f2f6269746275636b65742e6f72672f76656e6f69642f61646d696e2d666f726d2f7261772f346166633464616332643239326232383165636261303534643166643932336338613737353439342f696d616765732f6578616d706c652d61646d696e2d666f726d2e706e67)

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
