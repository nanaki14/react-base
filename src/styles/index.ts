import * as styledComponents from "styled-components";
import {color, ColorInterface} from '~/styles/colors'

export interface ThemeInterface {
  color: ColorInterface;
}

export const Theme = {
  color: color
};

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };