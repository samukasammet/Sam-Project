
 // When the user clicks the button, open the modal 
function chaptersModal(index) {  
  var chaptersModalID = document.getElementById('myChaptersModal');
  chaptersModalID.style.display = "block";
  document.getElementById('innerContent').innerHTML = (chaptersList[index]);
};


window.onload = function () {

  // Get the <span> element that closes the modal
  var span = document.getElementById("close");


   // When the user clicks on <span> (x), close the modal
   span.onclick = function () {
     myChaptersModal.style.display = "none";
   }
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == myChaptersModal) {
      myChaptersModal.style.display = "none";

    }
  };
  
var chaptersList = [
  
     `<p>Black Templars</br>
  </br>
      "The galaxy is the Emperor's, and anyone or anything who challenges that claim is an enemy who must be destroyed."</br>
      — High Marshal Helbrecht at the Battle of Fire and Blood</p>` ,

  
     `<p>Blood Angels </br>
  </br>
     "They are the sons of the Angel, the blooded host, the defenders of Humanity. <br> They are strength.
      They are nobility. They are the Blood Angels, and I say to you there are no more loyal or determined servants of the Emperor alive today."<br>
     — High Lord Baldus Bael to Ordo Astartes Inquisitor Neizallkin following the Grand Accusation</p>`
     ,
     `Dark Angels</br>
    </br>
    The Dark Angels were the I Legion of the twenty original Space Marine Legions. Their Primarch is Lion El'Jonson. After remaining loyal to the Emperor during the Horus Heresy, 
    this legion was later re-organized and divided into several Chapters during the Second Founding. One of these chapters would keep the original legion's name and assets, though all of the Dark Angels descendants continue to work together
    to hunt The Fallen as the Unforgiven.`,
  
     `Deathwatch</br>
    The Deathwatch is a unique and specially trained Space Marine Chapter that dedicates its every hour to xenos hunting.`
  ,
  
     `Grey Knights</br>
    The Grey Knights are a Space Marines Chapter and the Chamber Militant for the Ordo Malleus. The Chapter specialises in the hunting and extermination of Chaos daemons.`
  ,
  
     `Imperial Fists</br>
    The Imperial Fists were the VII Legion of the original twenty Space Marine Legions. Their Primarch is Rogal Dorn.`
  ,
  
     `Iron Hands</br>
    The Iron Hands were the X Legion of the twenty original Space Marine Legions, sometimes referred to as the "Iron Tenth".
    Their Primarch is Ferrus Manus. `
  ,
  
     `Raven Guard</br>
    The Raven Guard were the XIX Legion of the original Space Marine Legions. Their Primarch is Corvus Corax .`
  ,
  
     `Salamanders</br>
    The Salamanders, originally known as the Dragon Warriors,[38] were the XVIII Legion of the Space Marine Legion created by the Emperor of Mankind. Their Primarch was Vulkan. `
  ,
  
     `Space Wolves</br>
    The Space Wolves (also Sky Warriors of Russ, Rout or Vlka Fenryka or Wolves of Fenris in Fenrisian) were the VI Legion of the twenty Space Marine Legions. Their primarch is Leman Russ.`
  ,
  
      `Ultramarines</br>
    The Ultramarines, originally known as the War-Born, were the XIII Legion of the original twenty Space Marine Legions. This loyalist Legion was later re-organized and divided into Chapters according to the Codex Astartes. Their Primarch is Roboute Guilliman, whose leadership, not to mention his authorship of the Codex Astartes, were instrumental in humanity's survival following the Horus Heresy.`
  ,
  
      `White Scars</br>
    The White Scars (known to themselves as the Ordu of Jaghatai), originally known as the Star Hunters were the V Legion of the original twenty Space Marine Legions of the First Founding. Their Primarch is Jaghatai Khan.`
  
];