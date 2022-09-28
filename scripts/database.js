const database = {
    paints: [
        { id: 1, name: "Silver", price: 200 },
        { id: 2, name: "Midnight Blue", price: 250 },
        { id: 3, name: "Firebrick Red", price: 300 },
        { id: 4, name: "Spring Green", price: 350 }
    ],
    interiors: [
        { id: 1, name: "Beige Fabric", price: 100 },
        { id: 2, name: "Charcoal Fabric", price: 100 },
        { id: 3, name: "White Leather", price: 200 },
        { id: 4, name: "Black Leather", price: 200 }
    ],
    techs: [
        { id: 1, name: "Basic Package -- basic sound system", price: 200 },
        { id: 2, name: "Navigation Pacakage -- integrated navigation controls", price: 500 },
        { id: 3, name: "Visibility Package -- side & rear cameras", price: 500 },
        { id: 4, name: "Ultra Pacakge -- navigation & visibility pacakges", price: 1000 }
    ],
    wheels: [
        { id: 1, name: "17-inch Pair Radial", price: 150 },
        { id: 2, name: "17-inch Pair Radial Black", price: 150 },
        { id: 3, name: "18-inch Pair Spoke Silver", price: 220 },
        { id: 4, name: "18-inch Pair Spoke Black", price: 220 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 2,
            interiorId: 4,
            techId: 3,
            wheelId: 4,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {
        },
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechs = () => {
    return database.techs.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

document.addEventListener(
    "click",
    (clickEvent) => {
            const itemClicked = clickEvent.target
                if (itemClicked.id === "orderButton") { 
                    addCustomOrder()
                }
            }   
)