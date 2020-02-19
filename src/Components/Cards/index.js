import React from 'react'
import { Buttom } from '../../Components/Buttom'
import { useDispatch, useSelector } from 'react-redux'
import { Body, Image, Infos, Price, Name, Content } from './styled'

export default function Cards({ item }) {
  const data = useSelector(state => state.hqs)
  const dispatch = useDispatch();

  function Has() {
    return !data.some(element => element.id === item.id)
  }
  const add = (item) => {
    const hasItem = Has()
    if (hasItem) {
      dispatch({ type: 'ADD', value: item })
    }
  };

  return (
    <Body>
      <a href={`/comic/${item.id}`}>
        <Image src={`${item.thumbnail.path}.jpg`} />
      </a>
      <Content>
        <Name>{item.title.substring(0, 39)}</Name>
        <Infos>
          <Price>{item.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}</Price>
          <Buttom onClick={() => add(item)}>Add Cart</Buttom>
        </Infos>
      </Content>
    </Body>
  )
}
