const LoadingScreen = () => {
    return (
        <div className="w-screen h-screen bg-background flex justify-center items-center absolute z-10">
            <span className="material-symbols-outlined animate-spin text-text">sync</span>
        </div>
    )
}

export default LoadingScreen;