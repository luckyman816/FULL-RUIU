const Search = ({ isSearchOpen, setIsSearchOpen }: any) => {
  return (
    <div className={"search-popup" + (isSearchOpen ? " search-active" : " ")}>
      <button
        className="close-search"
        aria-label="close search box"
        title="close search box"
        onClick={() => setIsSearchOpen(false)}
      >
        <i className="bi bi-x-lg"></i>
      </button>
      <form action="#" method="post">
        <div className="search-popup__group">
          <input
            type="text"
            name="search-field"
            id="searchField"
            placeholder="Enter Product Name"
            required
          />
          <button
            type="submit"
            aria-label="search products"
            title="search products"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
