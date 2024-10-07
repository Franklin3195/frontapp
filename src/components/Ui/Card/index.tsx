import { Card as CardComponent, CardProps } from 'primereact/card'

import { FC } from 'react'

export const Card: FC<CardProps> = ({ ...props }) => {
  return (
    <div>
      <CardComponent {...props}>
        <p className="m-0">{props.children}</p>
      </CardComponent>
    </div>
  )
}
