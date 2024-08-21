import React from 'react';
import styled from 'styled-components';
import { news } from '../services/dummyData';

const NewsContainer = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

function NewsList() {
  return (
    <div>
      <h2>News</h2>
      {news.map((article, index) => (
        <NewsContainer key={index}>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <p>{article.publish_date}</p>
          <p>{article.category}</p>
        </NewsContainer>
      ))}
    </div>
  );
}

export default NewsList;