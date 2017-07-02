var items = [],
    places = [],
    prices = [],
    weight = [],
    names = [],
    bill = [];

function Item (name, place, price, weight) {
  this.name = name;
  this.place = place;
  this.price = price;
  this.weight = weight;
}

function setName() {
  var itemNames = ['Purina', 'Friscies', 'Authority', 'Optik', 'Hill', 'Trainer', 'Carnilove', 
  'Acana', 'Royal', 'Sanabelle', 'Happy', 'ProNat', 'Trainer', 'Josera', 'Leonardo'];
  var name = itemNames[Math.floor(Math.random() * itemNames.length)];
  return name;
};

function setPlace() {
  var departments = ['seafood', 'meat', 'dryfood', 'frozenfood', 'cannedfood'];
  var place = departments[Math.floor(Math.random() * departments.length)];
  return place;
}

function setPrice() {
  var randomPrice = Utils.getRandomNumber(1, 20);
  return randomPrice;
};

function setWeight() {
  var randomWeight = Utils.getRandomNumber(1, 5);
  return randomWeight;
};

Item.prototype.getName = function() {
  return this.name;
}

Item.prototype.getPlace = function() {
  return this.place;
}

Item.prototype.getPrice = function() {
  return this.price;
}

Item.prototype.getWeight = function() {
  return this.weight;
}

Item.prototype.getBill = function() {
  return this.price * this.weight;
}


function buyItems() {
  var totalBill = 0;
  for (var i = 0; i < 15; i++) {
    items.push(new Item(setName(), setPlace(), setPrice(), setWeight()));
    prices.push(items[i].getPrice());
    weight.push(items[i].getWeight());
    places.push(items[i].getPlace());
    names.push(items[i].getName());
    bill.push(items[i].getBill());
    totalBill += items[i].getBill();
  }

  function addTotalBill() {
  var totalBill1 = document.getElementById("totalBill");
  totalBill1.innerHTML = "Your final bill is " + totalBill + "$";
}
 addNames();
 addPrices();
 addPlaces();
 addWeight();
 addBill();
 addTotalBill(); 
}

buyItems();