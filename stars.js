
const rating = document.querySelector(".rated");
const deselected = document.getElementsByClassName('.rate1');

function reply_click(clicked_id){
    switch (clicked_id){
      case "5":
        rating.innerHTML = "You have rated " + clicked_id + " skulls: It's Excellent";
        break;
        case "4":
          rating.innerHTML = "You have rated " + clicked_id + " skulls: It's Good";
          break;
          case "3":
            rating.innerHTML = "You have rated " + clicked_id + " skulls: It's ok";
            break;
            case "2":
              rating.innerHTML = "You have rated " + clicked_id + " skulls: It's bad";
              break;
              case "1":
                rating.innerHTML = "You have rated " + clicked_id + " skull: It's very bad";
                break;
    }
    
  }

let inputs = document.querySelectorAll('input[type="radio"]');
window.addEventListener("click", (event)=>{ 
    if(!document.getElementById("rate1").contains(event.target)){
      for(i = 0; i<inputs.length;i++ ){
        inputs[i].checked = false
        rating.innerHTML = ""    
      }
    }
});


     








 
