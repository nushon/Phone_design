var display_icons = document.getElementById("first");
var display_image = document.getElementById("screen");
var display_counter = 0;

function displayItems(){
  // display_icons = event.target.id;
  // console.log("listen", event.target.id);
  // for(i = 0; i <= display_counter; i++){
  //   if(display_icons === "first" && display_counter[i] === 1){
      display_icons.style.visibility = "visible";
    display_image.style.backgroundImage = "url(./image/homescreen.jpg)";
  
  // }else if(display_icons === "first" && display_counter[i] === 2){
  //   console.log("second", display_icons)
    // display_icons.style.visibility = "hidden";
    // display_image.style.backgroundImage = "url(./image/lockscreen.jpg)";
}
//   }
// }
  
  // display_icons.style.backgroundSize = "cover";
 
  // display_icons.setAttribute("onclick", "redoItems()")
  // console.log("git", display_icons);

