# ReactCoolCursors

A simple npm package for React that offers smooth, customizable cursors.

## Installation

You can install `react-cool-cursors` using npm:

```bash
npm install react-cool-cursors
```

## Cursor Styles

As `react-cool-cursors` expands, you can easily switch between different cursor styles. The current options are:

| Cursor Style | Import Code                                          | Demo Button                                                                                     |
| ------------ | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| SimpleCursor | `import { SimpleCursor } from "react-cool-cursors";` | [View Demo](https://drive.google.com/file/d/1YzL7JMAZRL1RJUr8iI2JRziZeHgVWguA/view?usp=sharing) |
| FluidCursor  | `import { FluidCursor } from "react-cool-cursors";`  | [View Demo](https://drive.google.com/file/d/1SN6x7TZkIcrk5TYddm3BW0wsIlZtVEtE/view?usp=sharing) |

### Basic Usage

To use the cursors from the library, follow these steps:

1. **Import the Component**: In your main file (e.g., `App.js` or `index.js`), add the following imports:

```javascript
import { SimpleCursor } from "react-cool-cursors"; // or FluidCursor
import "react-cool-cursors/dist/style.css";
```

2. **Add the Cursor Component**: Place the desired cursor component in your render method:

```javascript
<SimpleCursor size={30} color="black" opacity={1} border="1px solid black" />
// or
<FluidCursor size={28} color="blue" opacity={1} border="2px dashed red" />
```

### Customization

You can customize the cursor's appearance by modifying the following props for both cursor styles:

- `size` / `cursorSize`: Set the size of the cursor (e.g., `size={30}` or `cursorSize={28}`).
- `color` / `cursorColor`: Change the cursor color (e.g., `color="black"` or `cursorColor="blue"`).
- `opacity`: Adjust the cursor's opacity (e.g., `opacity={1}`).
- `border`: Set the cursor's border using CSS syntax (e.g., `border="1px solid black"`).

### Example

Here’s an example of how to use the SimpleCursor with a custom border:

```javascript
import React from "react";
import { SimpleCursor } from "react-cool-cursors";
import "react-cool-cursors/dist/style.css";

const App = () => {
  return (
    <div>
      <SimpleCursor
        size={30}
        color="black"
        opacity={1}
        border="1px solid black"
      />
      {/* Your other components */}
    </div>
  );
};

export default App;
```

### Fluid Cursor

In addition to the SimpleCursor, you can use the FluidCursor for a more dynamic effect. To use the FluidCursor, simply replace the import statement:

```javascript
import { FluidCursor } from "react-cool-cursors";
```

#### Usage Example

Here’s how to use the FluidCursor with customization:

```javascript
import React from "react";
import { FluidCursor } from "react-cool-cursors";
import "react-cool-cursors/dist/style.css";

const App = () => {
  return (
    <div>
      <FluidCursor
        cursorSize={28}
        cursorColor="blue"
        opacity={1}
        border="2px dashed red"
      />
      {/* Your other components */}
    </div>
  );
};

export default App;
```

## Changing Cursor Styles

To change the cursor style in the future, simply import the desired cursor component:

```javascript
import { [NewCursorStyle] } from "react-cool-cursors";
```

Then use it in your component:

```javascript
<NewCursorStyle size={30} color="red" opacity={1} border="1px solid green" />
```

### Example of Changing Styles

For instance, if a new cursor style called `SparkleCursor` is added:

```javascript
import { SparkleCursor } from "react-cool-cursors";

const App = () => {
  return (
    <div>
      <SparkleCursor
        size={35}
        color="pink"
        opacity={1}
        border="3px dotted purple"
      />
      {/* Your other components */}
    </div>
  );
};
```

## Conclusion

`react-cool-cursors` provides an easy way to implement customizable cursors in your React applications. Enjoy smooth, interactive cursors that enhance user experience!

## Contributions

If you want to contribute to this project, fork the [repository](https://github.com/arafatrahat94/ReactCoolCursors) and clone it to your local machine. Commit your changes and push your changes to your forked repository. Finally, open a pull request with a detailed description of your changes. I highly appreciate any contributions.

## Issues

If you are facing any problem, feel free to share [here](https://github.com/arafatrahat94/ReactCoolCursors/issues).

## Changelog

```
### [Unreleased]
- Features and improvements are being developed.

### [1.0.0] - 2024-10-19
- Initial release of `react-cool-cursors`.
- Added `SimpleCursor` and `FluidCursor` components.
- Included basic usage examples in the documentation.

### [1.0.1] - 2024-10-19
- Enhanced cursor animation on click for both cursor types.
- Fixed issues with cursor position during scaling on click.
- Improved performance for cursor movement tracking.

### [1.0.4] - 2024-10-19
- Issue fixed with scroll bar and fluid cursor z index issue too.
- Fixed issues with the fluid cursor props.
- Improved performance for cursor movement tracking.

### [1.1.1] - 2024-10-20
- Switched to typescript method so that it work on both js and ts.
- Added Border Styling Method.
- Improved codes for Typescript.
- Made sure the component works on both typescript and javascript.
```

# Contact Me

❒ [Gmail](mailto:arafatrahat94@gmail.com) <br>
❒ [WhatsApp](https://wa.me/+8801980389400) <br>
❒ [Linkedin](https://www.linkedin.com/in/MdArafathHossain)

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for more details.

![License](https://img.shields.io/badge/license-Apache%202.0-brightgreen.svg)

---
