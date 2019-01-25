import * as styledComponents from 'styled-components'
import Color from '~/styles/colors'

export interface ThemeInterface {
  color: Color
}

export const Theme = {
  color: Color
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>

export default styled
export { css, createGlobalStyle, keyframes, ThemeProvider }
