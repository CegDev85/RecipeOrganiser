let message = "hello"

console.log(message)



const recipes = [
    {
        name: "sticky bbq rub",
        size: 200.00,
        machine: 6,
        ingredients:
            {   
                salt:100.00,
                sugar:40.00,
                carmine:99.00,
                // mustard:5,
                milkPowder:50.99
            }
        
    },
    {
        name:"lemon salmon rub",
        size:1000.00,
        machine:14,
        ingredients:
            {
                salt:200.00,
                lemonGranules:46.95,
                brownSugar:200.34,
                // milkPowder:50.99
                eggPowder:68.90,
                garlic:23.00,
                onion:69.00
            }
        
    },
    {
        name:"spicy morrocan seas",
        size:198.00,
        machine:6,
        ingredients:
            {
                salt:200.00,
                lemonGranules:46.95,
                brownSugar:200.34,
                // milkPowder:50.99
                eggPowder:68.90,
                carmine:45.86,
                onion:50.00
            }
        
    }
]
console.log(recipes)

let obj = {"name": "roy", "age" : 24};
let keyToFind = "age";
let keyList = Object.keys(obj);

console.log(keyList)


const allergensList = ["milkPowder","mustard","eggPowder"]
console.log(allergensList.toString())

const allergenSearch = () => {
    let allergensFoundIn = []
    for(let recipe of recipes){
        const items = Object.keys(recipe.ingredients)
        for(allergen of allergensList){
        let searchItem = allergen
            if(items.includes(searchItem)){
            allergensFoundIn.push(recipe.name)
           
        }}
    }
    const answer = allergensFoundIn.length === 0 ? "0 recipes" : allergensFoundIn
    return "Allergens found in " + answer
}

console.log(allergenSearch())

const onionSearch = () => {
    const jobsWithOnion = []
    for(recipe of recipes){
        const items = Object.keys(recipe.ingredients)
        if(items.includes("onion")){
            jobsWithOnion.push(recipe)
        }

    }
    return jobsWithOnion
}
console.log(onionSearch())

const garlicSearch = () => {
    const jobsWithGarlic = []
    for(recipe of recipes){
        const items = Object.keys(recipe.ingredients)
        if(items.includes("garlic")){
            jobsWithGarlic.push(recipe)
        }
    }
    return jobsWithGarlic
}
console.log(garlicSearch())







     
     



