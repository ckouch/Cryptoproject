var url="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Economics/Cryptocurrency%20Historical%20Prices.csv";

var crypto=getColumn(url,1);
var year=getColumn(url,3);
var month=getColumn(url,4);
var day=getColumn(url,5);
var price=getColumn(url,7)
console.log(crypto)

var daySelect=document.getElementById("Day");
for(var i=1; i<32; i++){
    var el=document.createElement("option");
    el.innerHTML=i;
    el.value=i;
    daySelect.appendChild(el);
}





function getPrice(cCrypto, yYear, mMonth, dDay){
console.log(cCrypto);
console.log(yYear);
console.log(mMonth);
console.log(dDay);
var dayPrice=[];
    for(var i=0; i<crypto.length; i++){
        if((crypto[i]==cCrypto)&&(year[i]==yYear)&&(month[i]==mMonth)&&(parseInt(day[i])==dDay)){
            dayPrice.push(price[i])
        }
    }
    console.log (dayPrice)
}