export const NextButton = ({ imageIndex, setImageIndex, memeCount }) => {
    const picNext = () => {
        if (imageIndex < memeCount - 1) {
            setImageIndex(imageIndex + 1)
        }
    }
    return (<button onClick={picNext}>Next</button>)
}