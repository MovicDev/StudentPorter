
function shoTable() {
    checking = "";
    for (i = 0;  i < check.length; i++) {
        checking += `<tr>
                        <td>${i+1}</td>
                        <td>${check[i].firstName}</td>
                        <td>${check[i].secondName}</td>
                        <td>${check[i].mailPhone}</td>
                        <td style="align-center"><button class="btn btn-danger btn-sm mx-auto float-end" onclick="del(${i})">Delete</button></td>
                        <td style="align-center"><button class="btn btn-warning btn-sm mx-auto float-end" data-bs-toggle="modal" data-bs-target="#staticBackdropp" onclick="edit(${i})">Edit</button></td>
                    </tr>`
         document.getElementById('display').innerHTML = checking
        
    }
}
var check = []
let currentIndex = -1; 
function submit() {
    var firstName = document.getElementById('firstName').value
    var secondName = document.getElementById('secondName').value
    var mailPhone = document.getElementById('mailPhone').value
    var password = document.getElementById('password').value
    if (firstName === '' || secondName === '' || mailPhone === '' || password ==='') {
        emptyErrorMessage.style.display = "block"
        setTimeout(() => {
            emptyErrorMessage.style.display = 'none'
        }, 5000);
    }else{
        var list = {firstName,secondName,mailPhone,password}
       var subStudent = check.push(list)
       console.log(subStudent);
       if(subStudent) {
        successMessage.style.display = 'block'
        setTimeout(()=>{
        successMessage.style.display = 'none'
        }, 3000)
        shoTable()
        console.log(list);
    } else {
        alert('failed to submit')
    } 
        successMessage.style.display = "block"
        emptyErrorMessage.style.display = "none"
        document.getElementById('firstName').value = ''
        document.getElementById('secondName').value = ''
        document.getElementById('mailPhone').value = ''
        document.getElementById('password').value = ''
    }
    

}
function del(ind) {
    check.splice(ind-1,1)
      shoTable()
 }
function edit(int) {
    currentIndex = int; // Store the current index
    document.getElementById('dis').innerHTML = `${int + 1}`;
    document.getElementById('first').value = `${check[int].firstName}`;
    document.getElementById('second').value = `${check[int].secondName}`;
    document.getElementById('phone').value = `${check[int].mailPhone}`;
    shoTable();
}

function update() {
    let firstVal = document.getElementById('first').value;
    let secVal = document.getElementById('second').value;
    let phoneVal = document.getElementById('phone').value;

    if (currentIndex >= 0 && currentIndex < check.length) {
        check[currentIndex].firstName = firstVal;
        check[currentIndex].secondName = secVal;
        check[currentIndex].mailPhone = phoneVal;
        shoTable();
    } else {
        console.error('Invalid index');
    }
    shoTable()
}
