import React from 'react';
import { Nav, Button } from './styled';

const Pagination = ({ postsPerPage, totalPosts, paginate, selected }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <ul>
        {pageNumbers.map((number, index) =>
          selected === number ? (
            <a href={'#!'} onClick={() => paginate(number)} key={index}>
              <Button style={{ backgroundColor: '#e23636', color: 'white' }}>
                <li>
                  <p>{number}</p>
                </li>
              </Button>
            </a>
          ) : (
              <a href={'#!'} key={index}>
                <Button onClick={() => paginate(number)}>
                  <li key={index}>
                    <p>{number}</p>
                  </li>
                </Button>
              </a>
            )
        )}
      </ul>
    </Nav>
  );
};

export default Pagination;