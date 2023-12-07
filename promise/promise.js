function klick(){

     let newPromise =  new Promise((resolve, reject) => {
          let a = document.getElementById('a').value;
          let b = document.getElementById('b').value;
     
          if (a == b){
               resolve('sama :) ');
          }else{
               reject('tidak sama !!!');
          }
     
     });


     newPromise.then((Message) => {
          document.getElementById('output').innerHTML = Message;
          
     }).catch((Message) => {
          document.getElementById('output').innerHTML = Message;
});



};


// menghapus inputan
function reset(){
     a.value = ""
     b.value = ""
}
