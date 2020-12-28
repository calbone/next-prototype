import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import Hoge from '@/components/Hoge';

const Index: NextPage = () => {
  const [count, setCount] = useState(0);
  const handle = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  return (
    <div>
      Indexでーす
      {count}
      <span onClick={handle}>カウント</span>
      <Hoge />
    </div>
  );
};

export default Index;
