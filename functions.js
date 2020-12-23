var list_of_tracking_nums = [];

function getTrackingNumbers() {
    // retrieve list of tracking numbers from local storage
    return JSON.parse(localStorage.getItem("list_of_tracking_nums"));
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
    refreshTrackingList();
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
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(value));
    li.onClick = function() {
        trackTrackingNumber(this.innerHTML)
    };
    ul.appendChild(li);
}

function refreshTrackingList(){
    // refresh HTML list
    list_of_tracking_nums.forEach(addListItem);
}

function addOnClick() {

}

function deleteOnClick() {
    
}