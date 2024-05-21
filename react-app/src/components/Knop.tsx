import React from 'react'

interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'succes';
    onClick: () => void;
}

const Knop = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Knop