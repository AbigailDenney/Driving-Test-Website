//defines the previous button
var previousButton;

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownClicked(menuOption) {

    /*Close the dropdown menu if the user clicks outside of it or they selected
    a different menu button*/
    window.onclick = function(event) {
      if (event.target.className != "menu-button" ||
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

      //displays the content
      document.getElementById(menuOption).classList.toggle("show");

      /*stores the current triggered id as the previous button clicked for the
      next time the user clicks on a menu button*/
      previousButton = event.target.id;
    }
}
