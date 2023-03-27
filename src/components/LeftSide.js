import { Preview } from "./Preview"
import { PicControll } from "./PicControl"

export const LeftSide = ({ memeArray, setMemeArray, imageIndex, setImageIndex, topText, bottomText }) => {
    return (
        <div id="LeftSide">
            <Preview memeArray={memeArray} imageIndex={imageIndex} topText={topText} bottomText={bottomText} />
            <PicControll memeArray={memeArray} setMemeArray={setMemeArray} imageIndex={imageIndex} setImageIndex={setImageIndex} />
        </div>
    )
}