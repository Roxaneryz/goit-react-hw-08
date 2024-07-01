import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setNameFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  
  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div>
      <input
        className={css.searchBox}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
