/**
 * Simple helper function that returns `spacing` props as an object to be used
 * in `variant` section of the styles.
 */
export const generateSpaceVariants = (name: string) => {
  return {
    1: {
      [name]: "$1",
    },
    2: {
      [name]: "$2",
    },
    3: {
      [name]: "$3",
    },
    4: {
      [name]: "$4",
    },
    5: {
      [name]: "$5",
    },
    6: {
      [name]: "$6",
    },
    7: {
      [name]: "$7",
    },
    8: {
      [name]: "$8",
    },
    9: {
      [name]: "$9",
    },
    10: {
      [name]: "$10",
    },
    12: {
      [name]: "$12",
    },
    14: {
      [name]: "$14",
    },
    16: {
      [name]: "$16",
    },
    18: {
      [name]: "$18",
    },
    20: {
      [name]: "$20",
    },
    24: {
      [name]: "$24",
    },
    28: {
      [name]: "$28",
    },
  };
};

export const generateButtonColorScheme = (color: string) => {
  return {
    [color]: {
      backgroundColor: `$${color}500`,
      color: "white",

      "&:hover": {
        backgroundColor: `$${color}600`,
      },
      "&:focus": {
        boxShadow: `$$shadowValues $colors$${color}300`,
      },
      "&:active": {
        backgroundColor: `${color}800`,
      },
    },
  };
};

export const generateBadgeColorScheme = (color: string) => {
  return {
    [color]: {
      backgroundColor: `$${color}400`,
      color: `$${color}700`,
    },
  };
};

/**
 * Simple helper function which generates the neccesary style objects
 * for the color variants of a component.
 */
export const generateColorVariants = (
  colors: string[],
  fn: (color: string) => any
) => {
  return Object.assign({}, ...colors.map((item) => fn(item)));
};

export const colorSchemes = [
  "purple",
  "green",
  "red",
  "yellow",
  "pink",
  "indigo",
  "blue",
];
