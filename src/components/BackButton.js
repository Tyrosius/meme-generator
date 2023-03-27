export const BackButton = ({ imageIndex, setImageIndex }) => {
    const picBack = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1)
        }
    }
    return (<button onClick={picBack}>Back</button>)
}