//this is linking the page to the data
var url="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Economics/Cryptocurrency%20Historical%20Prices.csv";
//these are making the stuff in the sheet variables
//was called crypto but had to rename it to make it work
var coin=getColumn(url,1);
var year=getColumn(url,3);
var month=getColumn(url,4);
var day=getColumn(url,5);
var date=getColumn(url,6)
var price=getColumn(url,7)

//this in automaticaly filling in an input so i dont need to list 31 days
var daySelect=document.getElementById("Day");
for(var i=1; i<32; i++){
    var el=document.createElement("option");
    el.innerHTML=i;
    el.value=i;
    daySelect.appendChild(el);
}


//this is the function called by the button
function getPrice(chosenCrypto, chosenYear, chosenMonth, chosenDay){

    //these are the lists for the "list"
var dayPrice=[];
var dayDate=[];
//this is making the list(of one thing) that maches all the inputs
    for(var i=0; i<coin.length; i++){
        if((coin[i]==chosenCrypto)&&(parseInt(year[i])==chosenYear)&&(parseInt(month[i])==chosenMonth)&&(parseInt(day[i])==chosenDay)){
            dayPrice.push(price[i])
            dayDate.push(date[i])
        }
    }
  
//this is to check that the function is working thus far
    console.log (dayPrice)
    //this is to make the string that shows up in the output box
    document.getElementById("output").innerHTML= "The Price of "+chosenCrypto+" on "+dayDate+" was $"+dayPrice;
//these are clearing the inputs after finding the price
document.getElementById("Crypto").value="0"
document.getElementById("Year").value="0"
document.getElementById("Month").value="0"
document.getElementById("Day").value="0"
}