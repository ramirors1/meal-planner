const list = [
    {
        item: "Bananas",
        qty: 5,  
        price: 1.50 
    },
    {
        item: "Eggs",
        qty: "dozen",
        price: 2.50
    },
    {
        item: "Pizza rolls",
        qty: "box",
        price: 4.50
    },
    {
        item: "Protien",
        qty: 1,
        price: 7
    },
    {
        item: "Apples",
        qty: 5,
        price: 3.50
    },
    {
        itme: "Sandwich buns",
        qty: 1,
        price: 3
    },
    {
        item: "Condiments",
        qty: 2,
        price: 4
    }
]
 
const calcId = (arr) => {
    const lastIndex = arr.length -1
    if (lastIndex === -1) {
        const newId = 1
        return newId
    }
    const lastItemId = arr[lastIndex].newId
    const newId = lastItemId + 1
    return newId
}

const addToShoppingList = [
    {
        item: "Oreos",
        qty: 1,
        price: 5
    },
    {
        item: "Milk",
        qty: 1,
        price: 4
    },
    {
        item: "Flour",
        qty: 1,
        price: 4 
    },
    {
        item: "Charcoal",
        qty: 2,
        price: 16
    },
    {
        item: "Lighter Fluid",
        qty: 1,
        price: 4
    }
] 
list.push(addToShoppingList)

var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes();

 console.log(list, new Date)