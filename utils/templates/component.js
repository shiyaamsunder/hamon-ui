module.exports = (componentName) => ({
  content: `
import React, {FunctionComponent, HTMLAttributes} from "react";
import { styled, CSSProp, ColorSchemeProp, CommonProps } from "../../stitches.config";

const Styled${componentName} = styled("div", {})

export interface Hamon${componentName}Props extends CSSProp {
  
}

type Hamon${componentName} = FunctionComponent<Hamon${componentName}Props & HTMLAttributes<HTMLDivElement>>

export const ${componentName}: Hamon${componentName} = ({ ...props }) => {
  return <Styled${componentName} {...props}/>
}

`,
  extension: `.tsx`,
});
