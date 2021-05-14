
let clickUpgrades = {
  pick: {
    price: 10,
    quantity: 0,
    mutiplier: 1
  },
  cart: {
    price: 200,
    quantity: 0,
    mutiplier: 5
  }
}
let automaticUpgrades = {
  miner: {
    price: 400,
    quantity: 0,
    mutiplier: 10
  },
  rover: {
    price: 600,
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
  }
}
function buyCart() {
  if (totalCheese >= clickUpgrades.cart.price) {
    clickUpgrades.cart.quantity += 1
    totalCheese -= clickUpgrades.cart.price
    clickUpgrades.pick.price *= 2
    update()
    console.log("cheese: ", totalCheese)
    console.log("new pick quantity: ", clickUpgrades.pick.quantity)
    console.log("new pick price: ", clickUpgrades.pick.price)
  }
}

