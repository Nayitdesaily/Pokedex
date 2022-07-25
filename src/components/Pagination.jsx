import React from 'react';
import './pagination.css'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pageNumbers.push(i)
   }
   return (
      <nav>
         <ul>
            {
               pageNumbers.map(number => (
                  <li key={number}>
                     <a onClick= { () => paginate(number) } >{number}</a>
                  </li>
               ))
            }
         </ul>
      </nav>
   );
};

export default Pagination;