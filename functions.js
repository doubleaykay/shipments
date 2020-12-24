var list_of_tracking_nums = [];

function getTrackingNumbers() {
    // retrieve list of tracking numbers from local storage
    list_of_tracking_nums = JSON.parse(localStorage.getItem("list_of_tracking_nums"));
}

function setTrackingNumbers(lst) {
    localStorage.setItem("list_of_tracking_nums", JSON.stringify(lst))
}

function addTrackingNumber(num) {
    // add tracking number to list
    list_of_tracking_nums.push(num);
    // save list to local storage
    setTrackingNumbers(list_of_tracking_nums);
    // refresh web page
    refreshTrackingList();
}

function deleteTrackingNumber(num) {
    // get index of item in the list
    idx = list_of_tracking_nums.indexOf(num);
    // remove the item from the list
    list_of_tracking_nums.splice(idx, 1);
    // save list to local storage
    setTrackingNumbers(list_of_tracking_nums);
    // refresh web page
    // refreshTrackingList();
}

function trackTrackingNumber(num) {
    // construct URL
    url = "https://www.google.com/search?q=".concat(num)
    // open URl
    window.open(url, '_blank');
}

function addListItem(value, index, array) {
    var ul = document.querySelector("ul");
    var li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.id = value;
    // li.innerHTML = "<a href=https://www.google.com/search?q=".concat(value).concat(" target=\"_blank\">").concat(value).concat("</a>").concat(" <button type=\"button\" class=\"btn btn-danger\" onclick=\"deleteOnClick(").concat("\\ \"").concat(value).concat("\\ \"").concat(")\">-</button>");
    li.innerHTML = "<a href=https://www.google.com/search?q=".concat(value).concat(" target=\"_blank\">").concat(value).concat("</a>");
    ul.appendChild(li);
}

function deleteAllListElements() {
    // delete all list elements
    var list_elements = document.getElementsByClassName("list-group-item");
    while (list_elements[0]) {
        list_elements[0].parentNode.removeChild(list_elements[0]);
    }
}

function refreshTrackingList() {
    // delete all list elements
    deleteAllListElements();
    // refresh HTML list
    list_of_tracking_nums.forEach(addListItem);
}

function addOnClick() {
    // get input handler
    input = document.getElementById("textTrackingNumber");
    // get value of input
    var num = input.value;
    // validate
    if (num == "") {
        alert("Please enter a tracking number.");
        return false;
    }

    regExp = /^[0-9]*$/g
    if (regExp.test(num)) {
        // add tracking number to list
        addTrackingNumber(num);
        // clear input
        input.value = "";
    } else {
        alert("Please enter a valid tracking number.")
        return false;
    }
}

function deleteOnClick(num) {
    // get handler
    elem = document.getElementById(num);
    // delete element
    elem.parentNode.removeChild(elem);
    // remove from storage
    deleteTrackingNumber(num);
}

function removeAllOnClick() {
    list_of_tracking_nums = [];
    setTrackingNumbers(list_of_tracking_nums);
    refreshTrackingList();
}