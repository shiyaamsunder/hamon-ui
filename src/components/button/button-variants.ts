const SolidStyles = {
  backgroundColor: "$gray200",
  border: "none",
  color: "$gray700",
  "&:hover": {
    backgroundColor: "$gray300",
  },
  "&:focus": {
    boxShadow: "$$shadowValues $$shadowColor",
  },
  "&:active": {
    backgroundColor: "$gray400",
  },
};

const OutlineStyles = {
  backgroundColor: "transparent",
  border: "$$borderSize solid $gray700",
  color: "$gray700",
  "&:hover": {
    backgroundColor: "$gray100",
  },
  "&:focus": {
    boxShadow: "$$shadowValues $$shadowColor",
  },
  "&:active": {
    backgroundColor: "$gray200",
  },
};

const GhostStyles = {
  backgroundColor: "transparent",
  border: "none",
  color: "$gray700",
  "&:hover": {
    backgroundColor: "$gray100",
  },
  "&:focus": {
    boxShadow: "$$shadowValues $$shadowColor",
  },
  "&:active": {
    backgroundColor: "$gray100",
  },
};
export const VariantStyles = {
  solid: SolidStyles,
  ghost: GhostStyles,
  outline: OutlineStyles,
};
