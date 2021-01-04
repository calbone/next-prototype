import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '@/components/Counter';
import { increment, decrement } from '@/redux/modules/counter';

const Index: NextPage = () => {
  const [count, setCount] = useState(0);
  const handle = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  const myCounter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleCountUp = useCallback(
    (e) => {
      dispatch(increment(e.target.value));
    },
    [dispatch]
  );
  const handleCountDown = useCallback(
    (e) => {
      dispatch(decrement(e.target.value));
    },
    [dispatch]
  );
  const props = {
    myCounter,
    handleCountUp,
    handleCountDown
  };
  return (
    <div>
      Indexでーす
      {count}
      <span onClick={handle}>カウント</span>
      <br />
      <br />
      <Counter {...props} />
    </div>
  );
};

export default Index;
