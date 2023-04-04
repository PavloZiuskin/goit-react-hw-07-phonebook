
import { useDispatch, useSelector } from 'react-redux';
import { LabelFilter } from "components/Filter/Filret.style"
import { filterContacts } from 'redux/slice';
import { getFilter } from 'redux/selectors';
export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  function handleChange(e) {
    dispatch(filterContacts(e.target.value))
  }
  return (
    <LabelFilter>
      Find contacts by name
      <input type="text" value={value} onChange={handleChange} />
    </LabelFilter>
  );
};
