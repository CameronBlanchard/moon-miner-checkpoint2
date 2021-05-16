
var totalCheese = 0

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



function mine() {
  totalCheese += 1
  collectClickUpgrades()
  console.log(totalCheese)
  update()
}

function update() {

  let template =`
  <div id="update-block">

      <div class="row text-center">
        <div class="col-12 cheese-dark-text">
          <h4>CHEESE: ${totalCheese}</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <span class="text-center">
            <h5>Resources</h5>
          </span>
          <span>Pickaxes: ${clickUpgrades.pick.quantity}</span>
          <br>
          <span>Carts: ${clickUpgrades.cart.quantity}</span>
          <br>
          <span>Miners: ${automaticUpgrades.miner.quantity}</span>
          <br>
          <span>Rovers: ${automaticUpgrades.rover.quantity}</span>
        </div>
        <div class="col-4">
          <span class="text-center">
            <h5>Resource Multiplier</h5>
          </span>
          <span>Pickaxe: ${clickUpgrades.pick.multiplier}</span>
          <br>
          <span>Cart: ${clickUpgrades.cart.multiplier}</span>
          <br>
          <span>Miner: ${automaticUpgrades.miner.multiplier}</span>
          <br>
          <span>Rover: ${automaticUpgrades.rover.multiplier}</span>
        </div>
        <div class="col-4">
          <div class="text-center">
            <span class="text-center">
              <h5>Moon Store</h5>
            </span>
            <div class="row">
              <div class="col-6">
                <span class="text-left">Pickaxe Cost: ${clickUpgrades.pick.price}</span>
              </div>
              <div class="col-6">
                <button type="button" class="my-btn" onclick="buyPick()" diabled >BUY</button>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <span>Cart Cost: ${clickUpgrades.cart.price}</span>
              </div>
              <div class="col-6">
                <button type="button" class="my-btn" onclick="buyCart()">BUY</button>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <span>Miner Cost: ${automaticUpgrades.miner.price}</span>
              </div>
              <div class="col-6">
                <button type="button" class="my-btn" onclick="buyMiner()">BUY</button>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <span>Rover Cost: ${automaticUpgrades.rover.price}</span>
              </div>
              <div class="col-6">
                <button type="button" class="my-btn" onclick="buyRover()">BUY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
let updateBlockElem = document.getElementById("update-block")
updateBlockElem.innerHTML = template

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
  update()
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
  update()
}

function buyMiner() {
  if (totalCheese >= automaticUpgrades.miner.price) {
    automaticUpgrades.miner.quantity += 1
    totalCheese -= automaticUpgrades.miner.price
    automaticUpgrades.miner.price *= 3

    console.log("cheese: ", totalCheese)
    console.log("new miner quantity: ", automaticUpgrades.miner.quantity)
    console.log("new miner price: ", automaticUpgrades.miner.price)
    startInterval()
    collectAutoUpgrades()
  }
  update()
}

function buyRover() {
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
 update()
}
function collectClickUpgrades() {
  let clickModifier = (clickUpgrades.pick.quantity * clickUpgrades.pick.multiplier) + (clickUpgrades.cart.quantity * clickUpgrades.cart.multiplier)
  totalCheese += clickModifier
  update()

}



function collectAutoUpgrades() {
  for (let key in automaticUpgrades) {
    let autoModifier = automaticUpgrades[key].quantity * automaticUpgrades[key].multiplier
    totalCheese += autoModifier
    update()
  }
  console.log(totalCheese)
}

function startInterval() {
  let collectionInterval = setInterval(collectAutoUpgrades, 3000)
}

/*function disableButtons() {
  totalCheese < clickUpgrades.pick.price ? document.getElementById("pick-btn").disabled = true : document.getElementById("pick-btn").disabled = false

  totalCheese < clickUpgrades.cart.price ? document.getElementById("cart-btn").classList.add("disabled") : document.getElementById("cart-btn").classList.remove("disabled")

  totalCheese < automaticUpgrades.miner.price ? document.getElementById("miner-btn").classList.add("disabled") : document.getElementById("miner-btn").classList.remove("disabled")

  totalCheese < automaticUpgrades.rover.price ? document.getElementById("rover-btn").classList.add("disabled") : document.getElementById("rover-btn").classList.remove("disabled")
}
*/
update()
