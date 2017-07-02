function addNames() {
   names.forEach(function(item) {
    var listItem = document.createElement('li');
    listItem.innerHTML = item;
    document.getElementById("name").appendChild(listItem);
  })
}

function addPrices() {
    prices.forEach(function(item) {
    var listItem = document.createElement('li');
    listItem.innerHTML = item;
    document.getElementById("price").appendChild(listItem);
  });
}

function addPlaces() {
    places.forEach(function(item) {
    var listItem = document.createElement('li');
    listItem.innerHTML = item;
    document.getElementById("place").appendChild(listItem);
  });
}

function addWeight() {
    weight.forEach(function(item) {
    var listItem = document.createElement('li');
    listItem.innerHTML = item;
    document.getElementById("weight").appendChild(listItem);
  });
}

function addBill() {
    bill.forEach(function(item) {
    var listItem = document.createElement('li');
    listItem.innerHTML = item;
    document.getElementById("itemBill").appendChild(listItem);
  });
}