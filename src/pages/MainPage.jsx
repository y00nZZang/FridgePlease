import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { initItmeLists } from '../modules/items';

function MainPage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const items = useSelector(state => state.items);

  useEffect(() => {
    dispatch(initItmeLists(user.id));
  }, [dispatch]);

  useEffect(() => {
    console.log(items.itemList);
  }, [items]);

  return <> Hello {user.name}! </>;
}

export default MainPage;
