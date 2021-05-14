
let clickUpgrades = {
  pick: {
    price: 1,
    quantity: 0,
    mutiplier: 1
  },
  cart: {
    price: 5,
    quantity: 0,
    mutiplier: 5
  }
}
let automaticUpgrades = {
  miner: {
    price: 10,
    quantity: 0,
    mutiplier: 10
  },
  rover: {
    price: 12,
    quantity: 0,
    mutiplier: 20
  }
}

var totalCheese = 0


function mine() {
  totalCheese += 1
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
    clickUpgrades.pick.price *= 2
    console.log("cheese: ", totalCheese)
    console.log("new pick quantity: ", clickUpgrades.pick.quantity)
    console.log("new pick price: ", clickUpgrades.pick.price)
  }
}
function buyCart() {
  if (totalCheese >= clickUpgrades.cart.price) {
    clickUpgrades.cart.quantity += 1
    totalCheese -= clickUpgrades.cart.price
    clickUpgrades.cart.price *= 2
    update()
    console.log("cheese: ", totalCheese)
    console.log("new cart quantity: ", clickUpgrades.cart.quantity)
    console.log("new cart price: ", clickUpgrades.cart.price)
  }
}

function buyMiner(){
  debugger
  if (totalCheese >= automaticUpgrades.miner.price) {
    automaticUpgrades.miner.quantity += 1
    totalCheese -= automaticUpgrades.miner.price
    automaticUpgrades.miner.price *= 2
    
    console.log("cheese: ", totalCheese)
    console.log("new miner quantity: ", automaticUpgrades.miner.quantity)
    console.log("new miner price: ", automaticUpgrades.miner.price)
    collectAutoUpgrades()
    update()
  }
}

function buyRover(){
  if (totalCheese >= automaticUpgrades.rover.price) {
    automaticUpgrades.rover.quantity += 1
    totalCheese -= automaticUpgrades.rover.price
    automaticUpgrades.rover.price *= 2
    update()
    console.log("cheese: ", totalCheese)
    console.log("new rover quantity: ", automaticUpgrades.rover.quantity)
    console.log("new rover price: ", automaticUpgrades.rover.price)
    collectAutoUpgrades()
  }
}

function collectAutoUpgrades(){
  for(let i = 0; i < automaticUpgrades.length; i++){
    let minerContrib = automaticUpgrades.miner.quantity * automaticUpgrades.miner.mutiplier 
    let roverContrib = automaticUpgrades.rover.quantity * automaticUpgrades.rover.mutiplier
    totalCheese += (minerContrib + roverContrib)
    console.log(minerContrib)
    console.log(roverContrib)
    totalCheese += (minerContrib + roverContrib)
    console.log(totalCheese)
    startInterval()
    
  }
}

function startInterval(){
  let collectionInterval = setInterval(collectAutoUpgrades, 3000)
}