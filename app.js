
let clickUpgrades = {
  pick: {
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  cart: {
    price: 25,
    quantity: 0,
    multiplier: 5
  }
}
let automaticUpgrades = {
  miner: {
    price: 500,
    quantity: 0,
    multiplier: 10
  },
  rover: {
    price: 1000,
    quantity: 0,
    multiplier: 20
  }
}

var totalCheese = 0


function mine() {
  totalCheese += 1
  collectClickUpgrades()
  console.log(totalCheese)
  update()
}

function update() {
  let template = totalCheese
  let totalCheeseElem = document.getElementById("cheese-count")
  totalCheeseElem.innerHTML = template.toString()
}
function buyPick() {
  if (totalCheese >= clickUpgrades.pick.price) {
    clickUpgrades.pick.quantity += 1
    totalCheese -= clickUpgrades.pick.price
    clickUpgrades.pick.price *= 3
    console.log("cheese: ", totalCheese)
    console.log("new pick quantity: ", clickUpgrades.pick.quantity)
    console.log("new pick price: ", clickUpgrades.pick.price)
  }
}
function buyCart() {
  if (totalCheese >= clickUpgrades.cart.price) {
    clickUpgrades.cart.quantity += 1
    totalCheese -= clickUpgrades.cart.price
    clickUpgrades.cart.price *= 3
    update()
    console.log("cheese: ", totalCheese)
    console.log("new cart quantity: ", clickUpgrades.cart.quantity)
    console.log("new cart price: ", clickUpgrades.cart.price)
  }
}

function buyMiner(){
  if (totalCheese >= automaticUpgrades.miner.price) {
    automaticUpgrades.miner.quantity += 1
    totalCheese -= automaticUpgrades.miner.price
    automaticUpgrades.miner.price *= 3
    
    console.log("cheese: ", totalCheese)
    console.log("new miner quantity: ", automaticUpgrades.miner.quantity)
    console.log("new miner price: ", automaticUpgrades.miner.price)
    startInterval()
    collectAutoUpgrades()
    update()
  }
}

function buyRover(){
  if (totalCheese >= automaticUpgrades.rover.price) {
    automaticUpgrades.rover.quantity += 1
    totalCheese -= automaticUpgrades.rover.price
    automaticUpgrades.rover.price *= 3
    update()
    console.log("cheese: ", totalCheese)
    console.log("new rover quantity: ", automaticUpgrades.rover.quantity)
    console.log("new rover price: ", automaticUpgrades.rover.price)
    startInterval()
    collectAutoUpgrades()
  }
}
function collectClickUpgrades(){
  let clickModifier = (clickUpgrades.pick.quantity * clickUpgrades.pick.multiplier) + (clickUpgrades.cart.quantity * clickUpgrades.cart.multiplier)
  totalCheese += clickModifier
  
}



function collectAutoUpgrades(){
  for(let key in automaticUpgrades){
    let autoModifier = automaticUpgrades[key].quantity * automaticUpgrades[key].multiplier
    totalCheese += autoModifier
  }
  console.log(totalCheese)
}

function startInterval(){
  let collectionInterval = setInterval(collectAutoUpgrades, 3000)
}
//collectAutoUpgrades()
//startInterval()