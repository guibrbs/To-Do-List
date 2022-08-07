const DefaultButton = ({ type, content, onClick }) => {
  const submitTypeButton = "bg-primary hover:bg-primaryDarker";
  const textTypeButton = "bg-background hover:bg-secondaryLight border border-secondaryLight"

  return (
    <button
      className={`${type === "submit" ? submitTypeButton : textTypeButton} 
      w-96 h-14 transition-colors rounded-lg text-text font-bold mt-1`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default DefaultButton;
