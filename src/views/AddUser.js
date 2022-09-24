import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import FormField from 'components/molecules/UsersListItem/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const ChildComponent = ({ someFunction }) => {
  useEffect(() => {
    console.log(someFunction());
  }, [someFunction]);

  return <p>Hello World</p>;
};

const AddUser = () => {
  const [value, setValue] = useState(0);
  const someFunction = useCallback(() => 'Grażyna', []);

  return (
    <ViewWrapper>
      <ChildComponent someFunction={someFunction} />
      <Title>Something</Title>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Add</button>
      <button onClick={() => setValue(value - 1)}>Subtract</button>
    </ViewWrapper>
  );
};

export default AddUser;
