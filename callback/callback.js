var klik = "klik sukses";


        function callBack(){
            alert ("terimakasih sudah di klik");
        }

        function buttonClick(){
            //async = baris per baris

            setTimeout(function(){
                callBack()
            },3000);

            document.getElementById('body').innerHTML = klik ;

        }
