import { useRecoilState } from 'recoil';
import countState from '../../state/countState.js';
import { Button } from 'antd';

function Counter() {
  const [count, setCount] = useRecoilState(countState);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-1/2 md:w-1/3 mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-4">Count: {count}</h1>
        <div className="flex justify-center space-x-4">
          <Button type={'primary'} onClick={handleIncrement}>
            Increment
          </Button>
          <Button type={'default'} onClick={handleDecrement}>
            Decrement
          </Button>
        </div>
      </div>
  );
}

export default Counter;
