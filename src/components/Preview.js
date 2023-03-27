export const Preview = ({ memeArray, imageIndex, topText, bottomText }) => {
    return (
        <div id="preview">
            <div id="preview-text">
                <label id="preview-top" htmlFor="preview-pic">{topText}</label>
                <label id="preview-bottom" htmlFor="preview-pic">{bottomText}</label>
            </div>
            <img id="preview-pic" src={memeArray[imageIndex].url} alt={memeArray[imageIndex].name} />
        </div>
    )
}