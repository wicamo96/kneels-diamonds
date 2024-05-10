import { setType } from "./transientState.js";

const handleJewelryTypeChange = (changeEvent) => {
    if (changeEvent.target.name === 'type') {
        const convertedToInteger = parseInt(changeEvent.target.value);

        setType(convertedToInteger);
    }
}

export const jewelryType = () => {
    document.addEventListener("change", handleJewelryTypeChange)

    return `<input type='radio' name='type' value='1'/>Ring
            <input type='radio' name='type' value='2'/>Earring
            <input type='radio' name='type' value='4'/>Necklace`
}