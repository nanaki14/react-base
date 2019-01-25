import React, { FC } from 'react';
import styled from '~/styles';

interface Props {
  text: string
}

const Text: FC<Props> = ({text}) => (<StyledText>{text}</StyledText>)

const StyledText = styled.p`
  color: ${props => props.theme.color.primaryColor};
`

export default Text;
