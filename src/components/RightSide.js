import { ResetButton } from "./ResetButton"
import { SaveButton } from "./SaveButton"

export const RightSide = ({ memeArray }, { imageIndex }, { setImageIndex }, { topText }, { setTopText }, { bottomText }, { setBottomText }) => {
    const inputHandlerTop = () => { }
    const inputHandlerBottom = () => { }
    return (
        <>
            <label for="input-top">Oberer Text:</label>
            <input id="input-top" type="text" onChange={inputHandlerTop} />
            <label for="input-bottom">Unterer Text:</label>
            <input id="input-bottom" type="text" onChange={inputHandlerBottom} />
            <ResetButton setImageIndex={setImageIndex} setTopText={setTopText} setBottomText={setBottomText} />
            <SaveButton memeArray={memeArray} imageIndex={imageIndex} topText={topText} bottomText={bottomText} />
        </>
    )
}