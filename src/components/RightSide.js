import { ResetButton } from "./ResetButton"
import { SaveButton } from "./SaveButton"

export const RightSide = () => {
    return (
        <>
            <label for="input-top">Oberer Text:</label>
            <input id="input-top" type="text" />
            <label for="input-bottom">Unterer Text:</label>
            <input id="input-bottom" type="text" />
            <ResetButton />
            <SaveButton />
        </>
    )
}