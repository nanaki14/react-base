import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}

export default function Text({ text }: Props) {
  return <StyledText>{text}</StyledText>
}

const StyledText = styled.p`
  color: ${(props) => props.theme.color.primaryColor};
`
