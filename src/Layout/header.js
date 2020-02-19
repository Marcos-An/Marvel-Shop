import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from './styled'
import Cart from './Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function HeaderComp() {
  const data = useSelector(state => state)
  const dispatch = useDispatch();

  function handleOpen() {
    dispatch({ type: 'OPEN', value: !data.open });
  }
  function handleRemove(id) {
    const hqs = data.hqs.filter((item) => item.id !== id)
    dispatch({ type: 'REMOVE', value: hqs });
  }

  return (
    <Header>
      <a href={`/`} style={{ textDecoration: 'none', color: 'white' }}>
        <h1>HQ SHOP</h1>
      </a>
      <FontAwesomeIcon
        onClick={() => handleOpen()}
        className={'cart'}
        icon={faShoppingCart}
      />
      {data.open ?
        <Cart
          data={data}
          handleOpen={handleOpen}
          handleRemove={handleRemove}
        /> : null}
    </Header>
  )
}
