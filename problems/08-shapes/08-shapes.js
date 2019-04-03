/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  if(shape == "square" || shape == "Square"){
    for(let i = 0; i<height; i++){
      let line = ""
      for(let j = 0; j<=height; j++){
        line = line+character;
      }
      console.log(line);
    }
  }
  else if(shape == "triangle" || shape == "Triangle"){
    let x = 1;
    for(let i = 0; i<height; i++){
      let line = ""
      for(let j = 0; j<x; j++){
        line = line+character;
      }
      x++;
      console.log(line); 
    } 
  }
  else if(shape == "diamond" || shape == "Diamond"){
    let x = 0;
    let y = 1;
    let highend = 0;
    let low = Math.floor((height/2));
    let high = Math.ceil(height/2);
    for(let i = 1; i<=height; i++){
      let line = "";
      if(x < low){
        let linelow = Math.floor((height/2));
        let linehigh = Math.ceil((height/2));
        linelow -= x;
        linehigh += x;
        for(let j = 1; j<=height; j++){
            if(j <= linelow){
              line = line + " ";
            }
            else if(j > linehigh){
              line = line + " ";
            }
            else{
              line = line+character;
            }
        }
      }
      else if(x >= high){
        let linelow = Math.floor((height/2));
        let linehigh = Math.ceil((height/2));
        highend = height-1 - x;
        linelow -= highend;
        linehigh += highend;
        
        for(let j = 1; j<height; j++){
            if(j <= linelow){
              line = line + " ";
            }
            else if(j > linehigh){
              line = line + " ";
            }
            else{
              line = line+character;
            }
        }
        y++;
      }
      else{
        for(let j = 0; j<height; j++){
          line = line+character;
        }
      }
      x++;
      console.log(line);
    }
  }
}
printShape("square", 5, "*");
printShape("triangle", 7, "^");
printShape("diamond", 9, "@");