export const Preview = ({ memeArray }, { imageIndex }, { topText }, { bottomText }) => {
    const imgUrl = memeArray[imageIndex].url
    return (
        <>
            <img id="preview-pic" src={imgUrl} alt="" />
            <label id="preview-top" for="preview-pic">{topText}</label>
            <label id="preview-bottom" for="preview-pic">{bottomText}</label>
        </>
    )
}