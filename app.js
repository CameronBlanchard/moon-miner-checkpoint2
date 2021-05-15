
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
  disableButtons()
  let template = `<div id="resources">
  <div class="row">
    <div class="col-12">
      <span class="" >Cheese: <span id="cheese-count">${totalCheese}</span></span>
      <div class="row">
        <div class="col">
          <span class="">Pickaxes: <span id="pick-quantity">${clickUpgrades.pick.quantity}     Multiplier: ${clickUpgrades.pick.multiplier}</span></span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <span>Carts: <span id="cart-quantity">${clickUpgrades.cart.quantity}</span></span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <span>Miners: <span id="miner-quantity">${automaticUpgrades.miner.quantity}</span></span>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <span>Rovers: <span id="rover-quantity">${automaticUpgrades.rover.quantity}</span></span>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`
let resourcesElem = document.getElementById("resources")
resourcesElem.innerHTML = template

let template2 = `
<div id="store">
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-6">
                  <span id="pick-price" class="d-flex justify-content-start m-1">Pickaxe Price: ${clickUpgrades.pick.price}</span>
                </div>
                <div class="col-6">
                  <span class="d-flex justify-content-end p-1"><button id="pick-btn" onclick="buyPick()"
                      class=" btn-success m-1">BUY</button></span>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <span id="cart-price" class="d-flex justify-content-start m-1">Cart Price: ${clickUpgrades.cart.price}</span>
                </div>
                <div class="col-6">
                  <span class="d-flex justify-content-end p-1"><button id="cart-btn" onclick="buyCart()"
                      class=" btn-success m-1">BUY</button></span>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <span id="miner-price" class="d-flex justify-content-start m-1">Miner Price ${automaticUpgrades.miner.price}:</span>
                </div>
                <div class="col-6">
                  <span class="d-flex justify-content-end p-1"><button id="miner-btn" onclick="buyMiner()"
                      class=" btn-success m-1">BUY</button></span>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <span id="rover-price" class="d-flex justify-content-start m-1">Rover Price: ${automaticUpgrades.rover.price}</span>
                </div>
                <div class="col-6">
                  <span class="d-flex justify-content-end p-1"><button id="rover-btn" onclick="buyRover()"
                      class=" btn-success m-1">BUY</button></span>
              </div>
            </div>
          </div>
        
`
let storeElem = document.getElementById("store")
storeElem.innerHTML = template2

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

function disableButtons() {
  totalCheese < clickUpgrades.pick.price ? document.getElementById("pick-btn").classList.add("disabled") : document.getElementById("pick-btn").classList.remove("disabled")

  totalCheese < clickUpgrades.cart.price ? document.getElementById("cart-btn").classList.add("disabled") : document.getElementById("cart-btn").classList.remove("disabled")

  totalCheese < automaticUpgrades.miner.price ? document.getElementById("miner-btn").classList.add("disabled") : document.getElementById("miner-btn").classList.remove("disabled")

  totalCheese < automaticUpgrades.rover.price ? document.getElementById("rover-btn").classList.add("disabled") : document.getElementById("rover-btn").classList.remove("disabled")
}
update()
