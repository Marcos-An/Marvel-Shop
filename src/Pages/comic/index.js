import React, { useState, useEffect } from 'react'
import { ButtomComic } from '../../Components/Buttom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Body,
  Content,
  Image,
  Name,
  Infos,
  Info,
  ID,
  Text,
  Price
} from './styled'



const API_URL = 'https://gateway.marvel.com:443/v1/public/comics/'
const RESTO = '?ts=1&apikey=cf5b96d62248a5cb1e6b9c5a0d8eb3b7&hash=9703867a8923a1194dd380ebbd22e6a7'


export default function Home(props) {
  const [comic, setComic] = useState([])
  const data = useSelector(state => state.hqs)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${API_URL}${props.match.params.id}${RESTO}`)
      .then(res => res.json())
      .then(json => setComic(json.data.results))
  }, [])

  function addPrice(item) {
    item.preco = Math.floor(Math.random() * (300 - 25)) + 25
  }

  function Has(item) {
    return !data.some(element => element.id === item.id)
  }
  const add = (item) => {
    const hasItem = Has(item)
    if (hasItem) {
      dispatch({ type: 'ADD', value: item })
    }
  };
  return (
    <Body>
      <Content>
        {comic.map(item => (
          <>
            {addPrice(item)}
            <Image src={`${item.thumbnail.path}.jpg`} />
            <Infos>
              <Name>{item.title}</Name>
              <ID>{`ID: ${item.id}`}</ID>
              <Info>
                <Text>{`Author: ${item.creators.items.map(item => item.name)}`}</Text>
                {item.description ? <Text>{`Description: ${item.description}`}</Text> : null}
                <Price>{item.preco.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</Price>
                <ButtomComic onClick={() => add(item)}>Add Cart</ButtomComic>
              </Info>
            </Infos>
          </>
        ))}
      </Content>
    </Body>
  );
}
