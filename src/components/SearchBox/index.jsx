import {useRef} from "react";
import {connect} from "react-redux";

import {debounce} from "../../helpers/utils";

import {searchProducts} from "../../actions";

import "./index.css";

const SearchBox = ({setLoading, setSearch, dispatch}) => {
  const searchRef = useRef();
  return (
    <section>
      <label htmlFor="search-text">
        Search:
        </label>
        <input
          type="search"
          id="search-text"
          ref={searchRef}
          onInput={event => debounce(dispatch(searchProducts(searchRef.current.value)), 250)} />
    </section>
  )
};


export default connect()(SearchBox);
