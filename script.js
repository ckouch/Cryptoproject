var url="https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Economics/Cryptocurrency%20Historical%20Prices.csv";

var crypto=getColumn(url,1);
var year=getColumn(url,3);
var month=getColumn(url,4);
var day=getColumn(url,5);
var price=getColumn(url,7)

var avgPrice=[];

for(var i=0; i<crypto.length; i++){
    if((crypto[i]==document.getElementById("Crypto").value)&&(year[i]==document.getElementById("Year").value)&&(month[i]==document.getElementById("Month").value)){
        avgPrice.push(price[i])
    }
}