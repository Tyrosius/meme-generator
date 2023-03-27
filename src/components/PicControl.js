import { BackButton } from "./BackButton"
import { NextButton } from "./NextButton"
import { RandomButton } from "./RandomButton"
import { UploadButton } from "./UploadButton"

export const PicControll = () => {
    return (
        <>
            <div>
                <BackButton />
                <RandomButton />
                <NextButton />
            </div>
            <UploadButton />
        </>
    )
}