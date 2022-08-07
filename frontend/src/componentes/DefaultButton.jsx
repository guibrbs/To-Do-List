const DefaultButton = ({ type, content }) => {
  const submitTypeButton = "bg-primary hover:bg-primaryDarker";
  const textTypeButton = "bg-background hover:bg-secondary border border-secondaryLight"
  return (
    <button
      className={`${type === "submit" ? submitTypeButton : textTypeButton} 
      w-96 h-14 transition-colors rounded-lg text-text font-bold mt-1`}
      type={type}
    >
      {content}
    </button>
  );
};

export default DefaultButton;
