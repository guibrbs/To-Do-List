const CloseButton = ({onClick}) => {
    return (
    <button
        className="absolute top-3 right-4 text-text hover:text-textDarker transition-colors"
        onClick={onClick}
    >
        <span className="material-symbols-outlined text-lg">cancel</span>
      </button>
    )
}

export default CloseButton;