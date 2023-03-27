export const RandomButton = ({ setImageIndex, memeCount }) => {
    const randomPic = () => {
        const randomIndex = Math.floor(Math.random() * memeCount);
        setImageIndex(randomIndex)
    }
    return (<button onClick={randomPic}>Random</button>)
}