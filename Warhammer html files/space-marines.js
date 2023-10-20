
window.onload = function () {

  // Get the modal
  var modalTemplars = document.getElementById("myModalTemplars");

  // Get the button that opens the modal
  var btnBT = document.getElementById("myBtn");

  // Get the modal
  var modalBloodAngels = document.getElementById("myModalBloodAngles");

  // Get the button that opens the modal
  var btnBA = document.getElementById("myBtnBloodAngels");

  // Get the <span> element that closes the modal
  var span0 = document.getElementsByClassName("close")[0];

  // Get the <span> element that closes the modal
  var span1 = document.getElementsByClassName("close")[1];


  // When the user clicks the button, open the modal 
  btnBT.onclick = function () {
    modalTemplars.style.display = "block";
  }
  // When the user clicks the button, open the modal 
  btnBA.onclick = function () {
    modalBloodAngels.style.display = "block";
  }

  // When the user clicks on <span> (x), close the Black Templars modal
  span0.onclick = function () {
    modalTemplars.style.display = "none";
  }
  // When the user clicks on <span> (x), close the Blood Angels modal
  span1.onclick = function () {
    modalBloodAngels.style.display = "none";
  }


  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modalTemplars || event.target == modalBloodAngels) {
      modalTemplars.style.display = "none";
      modalBloodAngels.style.display = "none";

    }
  }
};
