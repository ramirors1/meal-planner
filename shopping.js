const lists = [
    {
        id: 1,
        item: "Bananas",
        qty: 5,
        price: 1.50
    },
    {
        id: 2,
        item: "Eggs",
        qty: "dozen",
        price: 2.50
    },
    {
        id: 3,
        item: "Pizza rolls",
        qty: "box",
        price: 4.50
    },
    {
        id: 4,
        item: "Protien",
        qty: 1,
        price: 7
    },
    {
        id: 5,
        item: "Apples",
        qty: 5,
        price: 3.50
    },
    {
        id: 6,
        itme: "Sandwich buns",
        qty: 1,
        price: 3
    },
    {
        id: 7,
        item: "Condiments",
        qty: 2,
        price: 4
    }
]
const calcId = (arr) => {
    const lastIndex = arr.length - 1
    if (lastIndex === -1) {
        const newId = 1
        return newId
    }
    const lastItemId = arr[lastIndex].id
    const newId = lastItemId + 1
    return newId
}
const newId = calcId(lists)


const oreos = {
    item: "Oreos",
    qty: 1,
    price: 5
}
oreos.id = newId
lists.push(oreos)

const milk = {
    item: "Milk",
    qty: 1,
    price: 4
}
const milkid = calcId(lists)
milk.id = milkid
lists.push(milk)

const flour = {
    item: "Flour",
    qty: 1,
    price: 4
}
const flourid = calcId(lists)
flour.id = flourid
lists.push(flour)

const charcoal = {
    item: "Charcoal",
    qty: 2,
    price: 16
}
const charcoalid = calcId(lists)
charcoal.id = charcoalid
lists.push(charcoal)

const lighter = {
    item: "Lighter Fluid",
    qty: 1,
    price: 4
}
const lighterid = calcId(lists)
lighter.id = lighterid
lists.push(lighter)

lists.push(oreos, milk, flour, charcoal, lighter)



var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth()
    + "/" + currentdate.getFullYear() + " @ "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes();

console.log(lists, new Date)

for (const list of lists) {
    if (list.price > 8) {
 console.log(` ${list.item} is too much.`)
    }
}
    
