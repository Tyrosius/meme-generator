import { ResetButton } from "./ResetButton"
import { SaveButton } from "./SaveButton"

export const RightSide = ({ memeArray, imageIndex, setImageIndex, topText, setTopText, bottomText, setBottomText }) => {
    const inputHandlerTop = (event) => { setTopText(event.target.value) }
    const inputHandlerBottom = (event) => { setBottomText(event.target.value) }
    return (
        <div id="RightSide">
            <div>
                <label htmlFor="input-top">Oberer Text:</label>
                <input id="input-top" type="text" onChange={inputHandlerTop} />
            </div>
            <div>
                <label htmlFor="input-bottom">Unterer Text:</label>
                <input id="input-bottom" type="text" onChange={inputHandlerBottom} />
            </div>
            <div id="rigth-buttons">
                <ResetButton setImageIndex={setImageIndex} setTopText={setTopText} setBottomText={setBottomText} />
                <SaveButton memeArray={memeArray} imageIndex={imageIndex} topText={topText} bottomText={bottomText} />
            </div>
        </div>
    )
}