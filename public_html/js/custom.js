function ubaci(tekst,mjesto){
    //mjesto ce biti css id
    var gdje=document.getElementById(mjesto);  
    
    //console.log(gdje);
    gdje.innerHTML='<p>'+tekst+'</p>';
    //console.log(gdje);
}
function preokreni(sto){
    var zaPreokrenuti=document.getElementById(sto);
    var tt=zaPreokrenuti.value;
    var rezultat="";
    for(var i=tt.length-1;i>=0;i--){
        rezultat=rezultat+tt[i];
    }
    console.log(rezultat);
    document.getElementById('rezultat').innerHTML=rezultat;
    return false;
}
function odkraja(tekst,koliko){
    return tekst.substr(koliko);
}



