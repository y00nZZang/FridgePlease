import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function TestPage() {
  const user = useSelector(state => state.user);

  useEffect(() => {
    console.log(user);
  });

  return <> Hello {user.name}! </>;
}

export default TestPage;
