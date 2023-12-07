const todo = document.getElementById('todo')

        //fitur todo
        


        function add(){
    //ambil nilai  dari texk
    let teks = document.getElementById('newteks')

    //tambah list baru ke dalam ul
    //cara 1
    // let li = document.createElement('li')
    // let tekx = document.createTextNode(teks.value)

    // li.appendChild(tekx)
    // todo.appendChild(li)

    //cara 2
    
    if (teks.value ) {
        
        let newTodo = "<li> <span onclick='toggle(this)'>" + teks.value + "</span>"+
              "<span onclick='removeItem(this)'> [X] </span>"   +  "</li>"
    
        todo.insertAdjacentHTML('afterbegin',newTodo)
    
        //kosongkan inputan
        
        teks.value = ""
    } else {
        alert('masukan inputan terlebih dahulu....!!!')
    }



}


function toggle(el) {

    el.classList.toggle('done')
}

function removeItem(el) {
    el.parentElement.remove()
}

