import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Presentation from '@/components/organisms/Counter/presentation';
import { increment, decrement } from '@/redux/modules/counter';

const useStateAndHandlers = () => {
  const myCounter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleCountUp = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);
  const handleCountDown = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);
  return {
    myCounter,
    handleCountUp,
    handleCountDown
  };
};

const Container: React.FC = () => {
  const props = useStateAndHandlers();
  return <Presentation {...props} />;
};

export default Container;
