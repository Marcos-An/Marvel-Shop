import React from 'react'
import {
  Drawer,
  Shadow,
  Divider,
  Text,
  Hqs,
  Image,
  Name,
  Infos,
  Price,
  Action,
  Total
} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Cart({ data, handleOpen, handleRemove }) {

  function ValueTotal() {
    var aux = 0
    data.hqs.forEach(item => {
      aux += item.preco
    });
    return aux.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }
  return (
    <Shadow>
      <Drawer>
        <a href="#" className="closebtn" onClick={() => handleOpen()}>&times;</a>
        <Divider />
        <Text>
          <h2>Item</h2>
          <h2>Price</h2>
        </Text>
        <Hqs>
          {data.hqs.map((item, index) => (
            <>
              <Infos>
                <Image key={index} src={`${item.thumbnail.path}.jpg`} />
                <Name>{item.title}</Name>
              </Infos>
              <Action>
                <Price>{item.preco.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</Price>
                <FontAwesomeIcon
                  onClick={() => handleRemove(item.id)}
                  className={'trash'}
                  icon={faTrashAlt}
                />
              </Action>
            </>
          ))}
        </Hqs>
        <Total>{`Total : ${ValueTotal()}`}</Total>
      </Drawer>
    </Shadow>
  )
}
