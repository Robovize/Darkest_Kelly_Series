function myFunction(x) {
  if (x.matches) { // If media query matches
    
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
   /* close all except current one
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    */
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }

    if (itemClass == 'accordionItem open') {
      this.parentNode.className = 'accordionItem close';
  }
}
  } else {
    
  }
}

var x = window.matchMedia("(max-width: 769px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes










