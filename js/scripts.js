var Triangle = {
 type: function(){

  if(this.side1 < 1 || this.side2 < 1  || this.side3 < 1) {
    var result = "NaT";
  } else if (this.side1 === this.side2 && this.side1 === this.side3) {
    var result = "equilateral";
  } else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3 ) {
    var result = "isosceles";
  } else if (this.side1 > 0 && this.side2 > 0 && this.side3 > 0 && this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3) {
    var result = "scalene";
  } else {
    var result = "NaT";
   }
  return result;
  }
  
};
      
$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var inputtedSide1 = parseInt($("input#side1").val());
    var inputtedSide2 = parseInt($("input#side2").val());
    var inputtedSide3 = parseInt($("input#side3").val());
    
    var newTriangle = Object.create(Triangle);
    newTriangle.side1 = inputtedSide1;
    newTriangle.side2 = inputtedSide2;
    newTriangle.side3 = inputtedSide3;
     
  if (newTriangle.type() === "equilateral"){ 
    $("ul#equilateral").append("<li><span id='equilateral'>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3  + "</span></li>");
   }
 else if (newTriangle.type() === "isosceles"){
     $("ul#isosceles").append("<li><span id='isosceles'>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3  + "</span></li>");
     }
 else if (newTriangle.type() === "scalene"){
      $("ul#scalene").append("<li><span id='scalene'>" + newTriangle.side1 + ", " + newTriangle.side2 + ", " + newTriangle.side3 + "</span></li>");
     }
  else if (newTriangle.type() === "NaT" ){
    alert ("Not a triangle - idiot!");
  }
 else{
   return false;
 }
      this.reset();

    });
});



