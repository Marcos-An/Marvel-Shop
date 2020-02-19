import React, { useState, useEffect } from 'react';
import Card from '../../Components/Cards'
import { Body, Cards } from './styled'
import { useSelector, useDispatch } from 'react-redux'
import Pagination from '../../Components/Pagination'

const API_URL = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=cf5b96d62248a5cb1e6b9c5a0d8eb3b7&hash=9703867a8923a1194dd380ebbd22e6a7'

export default function Home() {
  const data = useSelector(state => state)
  const dispatch = useDispatch()
  const [comics, setComics] = useState([])
  const indexOfFirstPost = data.currentPage * data.postsPerPage;
  const indexOfLastPost = indexOfFirstPost - data.postsPerPage;

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(json => setComics(json.data.results))
  }, [])

  function addPrice(item) {
    item.preco = Math.floor(Math.random() * (300 - 25)) + 25
  }

  const paginate = pageNumber => {
    dispatch({ type: 'CURRENT-PAGE', value: pageNumber });
    dispatch({ type: 'SELECTED', value: pageNumber });
  };

  return (
    <Body>
      <Cards>
        {
          comics.slice(indexOfLastPost, indexOfFirstPost).map((item, index) => (
            <>
              {addPrice(item)}
              <Card key={index} item={item} />
            </>
          ))
        }
        <Pagination
          postsPerPage={data.postsPerPage}
          totalPosts={comics.length}
          paginate={paginate}
          selected={data.selected}
        />
      </Cards>
    </Body>
  );
}
