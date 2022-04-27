import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from '@mui/material';

import porkImg from '../../public/pork.jpg';
import bananaImg from '../../public/banana.jpg';
import milkImg from '../../public/milk2.jpg';

import Header from './Header';
import Item from './Item';

// import TopBar from './TopBar';

const sections = [
  { title: '유통기한', url: '#', color: '#99dfff' },
  { title: '구매일자', url: '#', color: '#c7f7d4' },
  { title: ' 육류 ', url: '#', color: '#ff99bb' },
  { title: ' 채소 ', url: '#', color: '#ffda99' },
  { title: ' 유제품 ', url: '#', color: '#a3b1ff' },
  { title: ' 기타 ', url: '#', color: '#ffb199' },
];

const items = [
  {
    name: '돼지고기',
    exdate: '4월 30일',
    purdate: '4월 12일',
    memo: '반정도 섭취',
    image: porkImg,
    imageLabel: 'Image Text',
    back: '#ffa19950',
  },
  {
    name: '바나나',
    exdate: '5월 10일',
    purdate: '4월 12일',
    memo: '',
    image: bananaImg,
    imageLabel: 'Image Text',
    back: '#ffda9950',
  },
  {
    name: '우유',
    exdate: '5월 20일',
    purdate: '4월 12일',
    memo: '',
    image: milkImg,
    imageLabel: 'Image Text',
    back: '#d6ffa650',
  },
  {
    name: '우유',
    exdate: '5월 20일',
    purdate: '4월 12일',
    memo: '',
    image: milkImg,
    imageLabel: 'Image Text',
    back: '#d6ffa650',
  },
  {
    name: '우유',
    exdate: '5월 20일',
    purdate: '4월 12일',
    memo: '',
    image: milkImg,
    imageLabel: 'Image Text',
    back: '#d6ffa650',
  },
];

function MainTemplate() {
  return (
    <Container maxWidth="lg">
      <Header title="Blog" sections={sections} />
      <main>
        {items.map(item => (
          <Item key={item.title} item={item} />
        ))}
      </main>
    </Container>
  );
}

export default MainTemplate;
