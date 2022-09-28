import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            // window.alert(`Customer chose paint -- ⋆ ${event.target.value} ⋆`)
            // const chosenOption = changeEvent.target.value
            // console.log(chosenOption) 
            setPaint(parseInt(event.target.value))
        }
    }
)



export const Paints = () => {
    return `
    <select id="paint">
        <option value="0">☆ Choose an option ☆</option>
        <option value="1">Silver</option>
        <option value="2">Midnight Blue</option>
        <option value="3">Firebrick Red</option>
        <option value="4">Spring Green</option>
    </select>`

    // let html = "<ul>"

    // const listItems = paints.map(
    //     () => {
    //         return `
    //             <select id="paint">
    //                 <option value="0">*** Choose options ***</option>
    //                 <option value="1">Silver</option>
    //                 <option value="2">Midnight Blue</option>
    //                 <option value="3">Firebrick Red</option>
    //                 <option value="4">Spring Green</option>
    //             </select>`

    //     }
    // )
    // html += listItems.join("")
    // html += "</ul>"

    // return html
}