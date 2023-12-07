//&& = dan (harus keduanya sama)
//|| = atau {salah satu}
// (x >= y) = apakah x lebih besar dari sama dengan y
// (x != y) = apakah x tidak sama dengan y

var dina = 13000;
var rani = 5000;
var barang = 4000;

//if di dalam if
if( dina > barang ){
    if(dina > barang*5){
        alert ('uang dina cukup beli 5 barang') ;
    } else if (dina > barang*4){
        alert ('uang dina cukup beli 4 barang') ;
    } else if(dina > barang *3){
        alert ('uang dina cukup beli 3 barang');   
    } else if(dina > barang*2){
        alert ('uang dina cukup beli 2  barang');
    }else { alert ('uang dina cukup beli 1 barang')}
}else {
    alert ('uang dina tidak cukup untuk membeli barang')
}
//else if
//if (dina >= barang){
    //alert('uang tidak cukup')
//}else if(rani >= barang){
  //  alert('uang Anda cukup')
//}else {  
  //  alert('uang anda tidak cukup')
//}



//if else
//if (dina != barang && rani >= barang ) {
   // alert ('uang anda cukup')
//} else {
  //  alert ('uang anda kurang')
//}