import React from 'react'
import * as S from '../style'

const HelloWorldFunction = (props) => {
  return (
    <div>
      <S.H1>{props.message}</S.H1>
    </div>
  )
}

export default HelloWorldFunction