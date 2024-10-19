# ReactCoolCursors

A simple npm package for React that offers smooth, customizable cursors.

## Installation

You can install `react-cool-cursors` using npm:

```bash
npm install react-cool-cursors
```

## Cursor Styles

As `react-cool-cursors` expands, you can easily switch between different cursor styles. The current options are:

| Cursor Style | Import Code                                          | Demo Button                |
| ------------ | ---------------------------------------------------- | -------------------------- |
| SimpleCursor | `import { SimpleCursor } from "react-cool-cursors";` | [View Demo](#simplecursor) |
| FluidCursor  | `import { FluidCursor } from "react-cool-cursors";`  | [View Demo](#fluidcursor)  |

### Basic Usage

To use the cursors from the library, follow these steps:

1. **Import the Component**: In your main file (e.g., `App.js` or `index.js`), add the following imports:

```javascript
import { SimpleCursor } from "react-cool-cursors"; // or FluidCursor
import "react-cool-cursors/dist/style.css";
```

2. **Add the Cursor Component**: Place the desired cursor component in your render method:

```javascript
<SimpleCursor size={30} color="black" opacity={1} />
// or
<FluidCursor size={28} color="blue" opacity={1} />
```

### Customization

You can customize the cursor's appearance by modifying the following props for both cursor styles:

- `size` / `cursorSize`: Set the size of the cursor (e.g., `size={30}` or `cursorSize={28}`).
- `color` / `cursorColor`: Change the cursor color (e.g., `color="black"` or `cursorColor="blue"`).
- `opacity`: Adjust the cursor's opacity (e.g., `opacity={1}`).

### Example

Here’s an example of how to use the SimpleCursor:

```javascript
import React from "react";
import { SimpleCursor } from "react-cool-cursors";
import "react-cool-cursors/dist/style.css";

const App = () => {
  return (
    <div>
      <SimpleCursor size={30} color="black" opacity={1} />
      {/* Your other components */}
    </div>
  );
};

export default App;
```

## Fluid Cursor

In addition to the SimpleCursor, you can use the FluidCursor for a more dynamic effect. To use the FluidCursor, simply replace the import statement:

```javascript
import { FluidCursor } from "react-cool-cursors";
```

### Usage

You can use the FluidCursor similarly:

```javascript
<FluidCursor cursorSize={28} cursorColor="blue" opacity={1} />
```

### Example

Here’s an example of how to use the FluidCursor:

```javascript
import React from "react";
import { FluidCursor } from "react-cool-cursors";
import "react-cool-cursors/dist/style.css";

const App = () => {
  return (
    <div>
      <FluidCursor cursorSize={28} cursorColor="blue" opacity={1} />
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
<NewCursorStyle size={30} color="red" opacity={1} />
```

### Example of Changing Styles

For instance, if a new cursor style called `SparkleCursor` is added:

```javascript
import { SparkleCursor } from "react-cool-cursors";

const App = () => {
  return (
    <div>
      <SparkleCursor size={35} color="pink" opacity={1} />
      {/* Your other components */}
    </div>
  );
};
```

## Conclusion

`react-cool-cursors` provides an easy way to implement customizable cursors in your React applications. Enjoy smooth, interactive cursors that enhance user experience!

## License

This project is licensed under the Apache 2.0 License. See the [LICENSE](LICENSE) file for more details.

![License](https://img.shields.io/badge/license-Apache%202.0-brightgreen.svg)
