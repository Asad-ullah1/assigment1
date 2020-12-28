function CurrancyConverter(ValNum){
    if(converter.rupees.value <=0 )
    window.alert("Enter Value Greater than 0");
    else{
        document.getElementById("Dollar").value = (ValNum/165.21).toFixed(1);
    }
}