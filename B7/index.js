//study

//1
// 1-d
// 2-c
// 3-a
// 4-b
//3
//khong

//4
function bai4() {
    const s = document.getElementsByTagName('li');
    document.getElementById('id1').innerHTML = s[1].innerHTML;
    for (let i = 0; i < s.length; i++) {
        console.log(s[i]);
    }
}
bai4();

//5
function bai5() {
    const s = document.getElementsByClassName('singer');
    document.getElementById('id2').innerHTML = s[1].innerHTML;
}
bai5();

//7
function bai7() {
    const s = document.getElementById('btn1');
    s.addEventListener('click', (e) => {
        console.log(e.target);
    });
    const c = document.getElementById('input');
    c.addEventListener('keydown', (e) => {
        console.log(e.key);
    });
}
bai7();

//8
function bai8() {
    const s = document.getElementById('id3');
    s.addEventListener('click', (show) => {
        alert('Đỗ Minh Hiếu');
        alert('Ra được trường ');
    });
}
bai8();

//9+10
function bai9(name, wish) {
    const s = document.getElementById('id4');
    s.addEventListener('click', (show) => {
        while (true) {
            name = prompt('Mời bạn nhập tên :');
            wish = prompt('Điều ước của bạn là :');
            if (wish == null || wish == undefined) {
                alert('Lỗi');
                break;
            } else {
                alert(`Tên : ${name} \n Điều ước :${wish}`);
                break;
            }
        }
    });
}
bai9();

//11

function bai11() {
    let input;
    let click = document.getElementById('upper_btn');
    click.addEventListener('click', (show) => {
        console.log(click);
        input = document.getElementById('input1').value;
        input = input.toUpperCase();
        document.getElementById('result_div').innerHTML = input;
    });
}
bai11();

//bai12

let items = ['Backpack', 'Miband watch', 'Ring'];
const list = document.getElementById('list');
showList = (itemName) => {
    list.insertAdjacentHTML('beforeend', `<li><span>${itemName}</span><Button id ="btn_remove">Remove</Button></li>`);
}
for(let x of items){
    showList(x);
}
function add() {
    let input;
    let button = document.getElementById('btn_add');
    button.addEventListener('click', (add) => {
        input = document.getElementById('input_item').value;
        items.push(input);
        showList(input);
        console.log(items);
    });
    
}
add();
