/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

import Header from '../components/public/Header';
import CategoryBar from '../components/category/CategoryBar';
import SubCategoryBar from '../components/category/SubCategoryBar';
import BottomNav from '../components/public/BottomNav';

import { itemSelector } from '../modules/items';
import categorys from '../public/category';

function CategoryPage() {
  const { categoryName } = useParams();
  const { itemList } = useSelector(itemSelector);

  const [sortBy, setSortBy] = useState('leftDateUp');
  const [subCategory, setSubCategory] = useState('');

  return (
    <>
      <Header title={categorys[categoryName].name} type="category" />
      <CategoryBar curCategory={categoryName} />
      <SubCategoryBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        subCategory={subCategory}
        setSubCategory={setSubCategory}
        curCategory={categoryName}
      />
      <Box itemList={itemList} />
      <Box>{categoryName}</Box>
      <BottomNav />
    </>
  );
}

export default CategoryPage;
