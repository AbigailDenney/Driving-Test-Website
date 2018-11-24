//defines the previous button
var previousButton;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownClicked(menuOption, triggeredId) {
    document.getElementById(menuOption).classList.toggle("show");


    /*Close the dropdown menu if the user clicks outside of it or they selected
    a different menu button*/
    window.onclick = function(event) {
      if (!event.target.matches('.menu-button') ||
      event.target.id != previousButton && previousButton != undefined) {

        //list of all of the dropdown options for the button
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          //removes the drop down content if it is shown
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }

      previousButton = triggeredId;
    }
}
