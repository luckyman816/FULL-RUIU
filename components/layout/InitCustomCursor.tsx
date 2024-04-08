import CustomCursor from "./CustomCursor";

type CursorProps = {
  handleMouseEnterTitle?: any;
  handleMouseLeaveTitle?: any;
};

const InitCustomCursor: React.FC<CursorProps> = ({
  handleMouseEnterTitle,
  handleMouseLeaveTitle,
}) => {
  return (
    <CustomCursor
      onTitleMouseEnter={handleMouseEnterTitle}
      onTitleMouseLeave={handleMouseLeaveTitle}
    />
  );
};

export default InitCustomCursor;
