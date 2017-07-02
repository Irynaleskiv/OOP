var users = [];

function SuperUser() {
  this.isDataVisible = true;
}

function User() {
  SuperUser.call(this);
  
  var that = this;
  this.name = "";
  this.sex = "";
  this.birth = "";
  this.address = "";
  this.phone = "";
  this.email = "";
  
  this.isValid = function () {
  // check if all fields filled out
    var name = document.querySelector("input[name='name']").value;
    var tel = document.querySelector("input[name='phone']").value;
    var email = document.querySelector("input[name='email']").value;
    var birth = document.querySelector("input[name='birth']").value;
    var address = document.querySelector("input[name='address']").value;
  if (name == "" || tel == "" || email == "" || birth == "" || address == "") {
    alert("All fields must be filled out!");
    return false;
  }
  // name validation
  else if (name.length > 15) {
    alert("Family name cannot be more than 15 characters!");
    return false;
  }
  else if (!(/^[a-zA-Z\-]+$/.test(name))) {
    alert("Family name can only contain characters!")
    return false;
  }
  // phone validation
  else if (!(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(tel))) {
    alert("Phone number should be in one of these formats: (123) 456-7890;  123-456-7890;  123.456.7890;  1234567890")
    return false;
  }
  // email validation
  else if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
    alert("Email is not valid!")
    return false;
  }
    return true;
  }
}

User.prototype = new SuperUser();

function View() {
  var that = this;
  var $table = document.querySelector('table tbody');

  var $fields = {
    name: document.querySelector("input[name='name']"),
    birth: document.querySelector("input[name='birth']"),
    address: document.querySelector("input[name='address']"),
    phone: document.querySelector("input[name='phone']"),
    email: document.querySelector("input[name='email']")
  };
  
  this.bindEvents = function () {
    var $saveButton = document.getElementById('save');
    $saveButton.addEventListener('click', this.onSaveButtonClick);
  }
  
  this.onSaveButtonClick = function (e) {
    e.preventDefault();

    var user = new User();
    user.sex = document.querySelector('input[type="radio"]:checked').value;
    user.name = $fields.name.value;
    user.birth = $fields.birth.value;
    user.address = $fields.address.value;
    user.phone = $fields.phone.value;
    user.email = $fields.email.value;

    if (!user.isValid()) {
      return false;
    }
  
    users.push(user);
    that.clearForm();
    that.render();
  }
  
  this.clearForm = function () {
    $fields.name.value = '';
    $fields.birth.value = '';
    $fields.address.value = '';
    $fields.phone.value = '';
    $fields.email.value = '';
  }
  
  this.render = function() {
    that.clearTable();

    users.forEach(function (user) {
      that.addRow(user);
    });
  }
  
  this.clearTable = function () {
    $table.innerHTML = '';
  }
  
  this.addRow = function (user) {
    var $tr = document.createElement('tr'); 
    $tr.addEventListener('click', that.onRowClick);
    
    
    
    var $tdName = document.createElement('td');
    $tdName.innerHTML = user.name; 
    $tr.appendChild($tdName); 

    var $tdSex = document.createElement('td'); 
    $tdSex.innerHTML = user.sex; 
    $tr.appendChild($tdSex); 

    var $tdBirth = document.createElement('td'); 
    $tdBirth.innerHTML = user.birth; 
    $tr.appendChild($tdBirth); 

    var $tdAddress = document.createElement('td'); 
    $tdAddress.innerHTML = user.address;
    $tr.appendChild($tdAddress); 

    var $tdPhone = document.createElement('td'); 
    $tdPhone.innerHTML = user.phone; 
    $tr.appendChild($tdPhone); 

    var $tdEmail = document.createElement('td'); 
    $tdEmail.innerHTML = user.email; 
    $tr.appendChild($tdEmail); 
    
    $table.appendChild($tr);
  }
  
  this.onRowClick = function (e) {

    var $currentRow = e.currentTarget;
    if($currentRow.classList.contains("hiddenRow")) {
           $currentRow.classList.remove("hiddenRow");
           $currentRow.firstChild.classList.remove("visibleTd");
         }
    else {
         $currentRow.classList.add("hiddenRow");
         $currentRow.firstChild.classList.add("visibleTd");
}
    
  }
}

var table = new View();
table.bindEvents();















   
