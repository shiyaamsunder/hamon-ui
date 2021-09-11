# Hamon UI - A minimal React component library.

## How to install

```bash
npm install hamon-ui @stitches/react
```

---

## Import

```jsx
import { Button } from "hamon-ui";
```

## Usage

```jsx
<Button colorScheme="purple">Button</Button>
```

## Usage with Next JS

Create `_document.js` file under `/pages` directory, and include the critical path CSS. Learn more about [Custom Document](https://nextjs.org/docs/advanced-features/custom-document).

```jsx
import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "hamon-ui";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="hamonui"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

## Components

Components that are available to work with.

- Badge
- Button
- ButtonGroup
- Box
- Flex
- Grid

## Props

Most of the components have a **`colorScheme`** and a **`size`** prop.

**`colorScheme`** prop values:

```tsx
"purple" | "red" | "green" | "yellow" | "pink" | "blue" | "indigo";
```

**`size`** prop values:

```tsx
"small" | "medium" | "large";
```

---

## Customizing the styles.

Since `hamon-ui` uses `@stitches/react`, we can leverage the **`css`** prop provided by them.

All Hamon UI elements have **`css`** prop which takes in styles as an object.

### Example usage.

```tsx
<Button
  css={{
    backgroundColor: "green",
    width: "200px",
    borderRadius: "9999px",
  }}
>
  Custom Button
</Button>
```

## Theme customization

Right now `hamon-ui` consists of default colors and spacings which was inspired from [TailwindCSS](https://tailwindcss.com/docs/customizing-colors).

When using the **`css`**, you can access those default theme values with a **$** prefix.

For a color:

```jsx
"$[colorname][huevalue]";

```

```tsx
<Box
  css={{
    backgroundColor: "$purple500",
    color: "$yellow700",
  }}
>
  Hello there.
</Box>
```

List of available colors:

- Gray
- Purple
- Red
- Yellow
- Green
- Blue
- Indigo
- Pink

Available hues are from `100` to `900`.
