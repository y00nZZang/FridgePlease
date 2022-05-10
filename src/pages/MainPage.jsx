/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/public/Header';
import PriorItemList from '../components/main/PriorItemList';
import SearchBar from '../components/main/SearchBar';
import Menu from '../components/main/Menu';

import { userSelector } from '../modules/user';
import { initItmeLists, itemSelector } from '../modules/items';

function MainPage() {
  const dispatch = useDispatch();
  const { id } = useSelector(userSelector);
  const { itemList, isSuccess } = useSelector(itemSelector);

  useEffect(() => {
    dispatch(initItmeLists(id));
  }, [dispatch]);

  return (
    <>
      <Header title="" type="main" />
      {isSuccess && <PriorItemList itemList={itemList} />}
      <SearchBar />
      <Menu />
    </>
  );
}

export default MainPage;
