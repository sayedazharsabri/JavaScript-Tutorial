let my_user = null;
const red_block = document.getElementById('red_block');
const green_block = document.getElementById('green_block');
const blue_block = document.getElementById('blue_block');
const yellow_block = document.getElementById('yellow_block');

const pro_user = document.getElementById('pro_user');

const btn_add_user = document.getElementById('btn_add_user');
const btn_delete_user = document.getElementById('btn_delete_user');

const btn_move_to_red = document.getElementById('btn_move_to_red');
const btn_move_to_green = document.getElementById('btn_move_to_green');
const btn_move_to_blue = document.getElementById('btn_move_to_blue');
const btn_move_to_yellow = document.getElementById('btn_move_to_yellow');

function addUserToProject(){
    if(my_user == null){
        my_user = document.createElement("div");
        // add some class for styling
        my_user.className = "my_user";
        // add id for better control from anywhere
        my_user.setAttribute("id","my_user");
        //value from input box
        my_user.innerHTML = pro_user.value;

        pro_user.disabled = true;
        btn_add_user.disabled = true;
        btn_delete_user.disabled = false;
        
        red_block.append(my_user);
    }
}

function deleteUserFromProject(){
    if(my_user != null){
        my_user.remove();
        pro_user.disabled = false;
        btn_add_user.disabled = false;
        btn_delete_user.disabled = true;
        pro_user.value = "";
        my_user = null;
    }
}

function moveToRed() {
    if(my_user != null){
        red_block.append(my_user);
    }
}

function moveToGreen() {
    if(my_user != null){
        green_block.append(my_user);
    }
}


function moveToBlue() {
    if(my_user != null){
        blue_block.append(my_user);
    }
}

function moveToYellow() {
    if(my_user != null){
        yellow_block.append(my_user)
    }
}

btn_add_user.addEventListener("click", addUserToProject);
btn_delete_user.addEventListener("click", deleteUserFromProject);

btn_move_to_red.addEventListener("click", moveToRed);
btn_move_to_green.addEventListener("click", moveToGreen);
btn_move_to_blue.addEventListener("click", moveToBlue);
btn_move_to_yellow.addEventListener("click", moveToYellow);