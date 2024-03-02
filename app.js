const car = []

let text = ''

//   diem bat dau; diem ket thuc, buoc nhay
for (let i = 0; i < car.length; i++ ){
    text += car[i] + "<br>"
}

document.getElementById("demo").innerHTML = text