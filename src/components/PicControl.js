import { BackButton } from "./BackButton"
import { NextButton } from "./NextButton"
import { RandomButton } from "./RandomButton"
import { UploadButton } from "./UploadButton"

export const PicControll = ({ memeArray, setMemeArray, imageIndex, setImageIndex }) => {
    const memeCount = memeArray.length
    return (
        <>
            <div>
                <BackButton imageIndex={imageIndex} setImageIndex={setImageIndex} />
                <RandomButton setImageIndex={setImageIndex} memeCount={memeCount} />
                <NextButton imageIndex={imageIndex} setImageIndex={setImageIndex} memeCount={memeCount} />
            </div>
            <UploadButton setMemeArray={setMemeArray} />
        </>
    )
}