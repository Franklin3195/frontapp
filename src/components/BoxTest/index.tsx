import React, { FC } from 'react'

interface BoxTestProps {
  children: React.ReactNode
}
const BoxTest: FC<BoxTestProps> = ({ children }) => {
  return (
    <div
      className=" p-4 rounded h-[150px] flex justify-center items-center text-xl"
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }}
    >
      {children}
    </div>
  )
}

export default BoxTest
