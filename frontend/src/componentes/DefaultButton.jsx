const DefaultButton = ({ type, content, setShowSignUp }) => {
  const submitTypeButton = "bg-primary hover:bg-primaryDarker";
  const textTypeButton = "bg-background hover:bg-secondary border border-secondaryLight"
  const handleShowSignUp = () => {
    if (content === "Registrar"){
        setShowSignUp(true)
    } else {
        setShowSignUp(false)
    }
  }

  return (
    <button
      className={`${type === "submit" ? submitTypeButton : textTypeButton} 
      w-96 h-14 transition-colors rounded-lg text-text font-bold mt-1`}
      type={type}
      onClick={handleShowSignUp}
    >
      {content}
    </button>
  );
};

export default DefaultButton;
