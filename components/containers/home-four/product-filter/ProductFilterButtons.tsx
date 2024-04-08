const ProductFilterButtons = ({ handleClick, active }: any) => {
  const items = ["All", "Design", "Ai", "NFT", "Creative", "Business"];

  return (
    <div className="product-filter__wrapper justify-content-start justify-content-lg-end">
      {items.map((item, index) => (
        <button
          aria-label="Filter Product"
          className={active === item.toLowerCase() ? " active" : ""}
          onClick={() => handleClick(item.toLowerCase())}
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ProductFilterButtons;
