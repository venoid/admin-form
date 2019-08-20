# Venoid Admin Form Component

Form component for your administration provides you good options how to build your form.

![screenshot-example](https://bitbucket.org/venoid/admin-form/raw/4afc4dac2d292b281ecba054d1fd923c8a775494/images/example-admin-form.png)

## Props
| Props         | Type    | Default   |                                      |
|---------------|---------|-----------|--------------------------------------|
| actions       | Array   | []        | Array of objects with options. Represent buttons in the bottom of the form.    |
| fields        | Object  | {}        | Keys of this object correspond to properties of your data model.               |
| isLoading     | Boolean | false     | Shows loading animation on the form.                                           |
| model         | Object  | {}        | Your data model.                                                               |

#### actions options
```
{
  label: 'Say hello' // String,
  onclick: () => { window.alert("Hello") }, // Function - your validator function
  type: 'default' // Enum['is-primary', 'is-danger', 'is-secondary', 'default']
}
```

#### fields options
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
