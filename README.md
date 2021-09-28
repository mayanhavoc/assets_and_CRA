# Assets and CRA

To include images and CSS, you can import them in JS files. 

The standard convention is to make your css file the same name as your component. 

For example -> `House.css` for `House` component

Then we import it at the top of the `House.js` component
    - create-react-app will automatically load that CSS
Conventional to add `classNAme="House"` onto `House` div (top level element)
    - and use that as prefix for sub-items to style: 
```Javascript
<div className="House">
    <p className="House-title"> {this.props.title} </p>
    <p className="House-address"> {this.props.addr} </p>
</div>
```

We import the CSS but what we import doesn't apply only to the file. That's why we use specific classes, usually prefixed with the name of the component, to apply them selectively.

If we write general styles and we apply them everywhere, they'll apply all over the place. There are ways of scoping CSS rules, but it requires external tools. 

## Images

We import them with the same syntax as components

- Store images in `src/folder` with the components. If there's many files, you can structure it however you want. 

# Conclussions

Importing assets is something that we do all the time in React. 

In case you forget, you can always to refer to the `App.js` file that `create-react-app` give you: 

```Javascript
import React, {Component} from 'react';
import logo from "./logo.svg"; // you're import an SVG
import "./App.css"; // you're importing a CSS file

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>This React app is INCREDIBLE </p>
                </header>
            </div>
        );
    }
}
export default App;
```

What Colt does: 

Every time he makes a new component `Dog.js`, `<Dog />`, he also makes a new CSS file with the same name `Dog.CSS` and then import it at the top of every component I create. 