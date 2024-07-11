import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import {setNameFilter} from "../../redux/filters/slice"
import { Flex } from "antd";


const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  
  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <Flex vertical align="center">
      <h3>Find your contacts by phone number or name</h3>
      <input
        className={css.searchBox}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </Flex>
  );
};

export default SearchBox;
