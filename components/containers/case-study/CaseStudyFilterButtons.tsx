const CaseStudyFilterButtons = ({ handleClick, active }: any) => {
  const items = ["All", "Prompts", "Ai", "Logo", "Design"];

  return (
    <div className="case-filter__wrapper justify-content-center justify-content-lg-end">
      {items.map((item, index) => {
        return (
          <button
            className={active === item.toLowerCase() ? " active" : ""}
            onClick={() => handleClick(item.toLowerCase())}
            key={index}
          >
            <span className="material-symbols-outlined">add</span>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default CaseStudyFilterButtons;
