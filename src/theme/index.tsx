import React from 'react'
import * as styledComponents from 'styled-components'
import Color from '~/theme/colors'
import GlobalStyles from '~/theme/GlobalStyles'

interface ThemeInterface {
  color: Color
}

export const ThemeProperties = {
  color: Color
}

const {
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  ThemeInterface
>

function ThemeWrapper({ children }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <GlobalStyles />
      <ThemeProvider theme={ThemeProperties}>{children}</ThemeProvider>
    </div>
  )
}

export default ThemeWrapper
