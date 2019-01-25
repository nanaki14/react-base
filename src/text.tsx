import React, { FC } from 'react';

interface Props {
  text: string
}

const Text: FC<Props> = ({text}) => (<p>{text}</p>)

export default Text;