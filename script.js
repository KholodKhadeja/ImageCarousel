var clickedCounter=0;
var preCounter = 4;
var nexCounter =1;
/*array for the dots with pointer to the classlist */
const dotsArray=[document.getElementById("0").classList,
document.getElementById("1").classList,
document.getElementById("2").classList,
document.getElementById("3").classList,
document.getElementById("4").classList];
/*to load intial img */
document.getElementById("lefmainImg").src="img/city"+preCounter+".jpg";
document.getElementById("mainImg").src="img/city"+clickedCounter+".jpg";
document.getElementById("rigmainImg").src="img/city"+nexCounter+".jpg";
/*dots slider defining the intial classlist for each dot */
loopDotArr(0);

function prevImg(){
clickedCounter ===0 ? clickedCounter=4 :clickedCounter-=1;
staticPart(clickedCounter);
}
function nextImg(){
    clickedCounter === 4 ? clickedCounter=0 :clickedCounter+=1;
    staticPart(clickedCounter);
}
function loopDotArr(i){
for(var j=0;j<dotsArray.length;j++){
    dotsArray[j] != dotsArray[i] ? dotsArray[j].add('dotOff') : dotsArray[j].add('dotOn');
    dotsArray[j] != dotsArray[i] ? dotsArray[j].remove('dotOn') : dotsArray[j].remove('dotOff');
}
}
var counter;
function staticPart(counter){
    preCounter = clickedCounter==0 ? preCounter=4:preCounter=clickedCounter-1;
    nexCounter = clickedCounter == 4 ? nexCounter=0 : nexCounter+=1;
    document.getElementById("lefmainImg").src="img/city"+preCounter+".jpg";
    document.getElementById("mainImg").src="img/city"+clickedCounter+".jpg";
    document.getElementById("rigmainImg").src="img/city"+nexCounter+".jpg";
    loopDotArr(clickedCounter);
}