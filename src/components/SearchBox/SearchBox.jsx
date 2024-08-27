import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <input
      className={css.searchBox}
      type="text"
      name="search"
      placeholder="Search contacts..."
      value={filterValue}
      onChange={handleChange}
      autoComplete="off"
    />
  );
}
