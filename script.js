let move_no=1

function place_1(){
    if(move_no%2==0){//O for even
        document.getElementById("1").innerText="O"
    }
    else{//X for odd
        document.getElementById("1").innerText="X"
    }
    move_no+=1
    turn()
    check_win()
}
function place_2(){
    if(move_no%2==0){//O for even
        document.getElementById("2").innerText="O"
    }
    else{//X for odd
        document.getElementById("2").innerText="X"
    }
    move_no+=1
    turn()
    check_win()
}
function place_3(){
    if(move_no%2==0){//O for even
        document.getElementById("3").innerText="O"
    }
    else{//X for odd
        document.getElementById("3").innerText="X"
    }
    move_no+=1
    turn()
    check_win()
}

function place_4(){
    if(move_no%2==0){//O for even
        document.getElementById("4").innerText="O"
    }
    else{//X for odd
        document.getElementById("4").innerText="X"
    }
    move_no+=1
    turn()
    check_win()
}
function place_5(){
    if(move_no%2==0){//O for even
        document.getElementById("5").innerText="O"
    }
    else{//X for odd
        document.getElementById("5").innerText="X"
    }
    move_no+=1
    turn()
    check_win()
}
function place_6(){
    if(move_no%2==0){//O for even
        document.getElementById("6").innerText="O"
    }
    else{//X for odd
        document.getElementById("6").innerText="X"
    }
    move_no+=1
    turn()
    check_win()
}

function place_7(){
    if(move_no%2==0){//O for even
        document.getElementById("7").innerText="O"
    }
    else{//X for odd
        document.getElementById("7").innerText="X"
    }
    move_no+=1
    turn()
    check_win()
}
function place_8(){
    if(move_no%2==0){//O for even
        document.getElementById("8").innerText="O"
    }
    else{//X for odd
        document.getElementById("8").innerText="X"
    }
    move_no+=1
    turn()
    check_win()
}
function place_9(){
    if(move_no%2==0){//O for even
        document.getElementById("9").innerText="O"
    }
    else{//X for odd
        document.getElementById("9").innerText="X"
    }
    move_no+=1
    turn()
    check_win()
}

function turn(){
    if(move_no%2==0)
        document.getElementById("disp").innerText="Player 2 Turn"
    else
        document.getElementById("disp").innerText="Player 1 Turn"
}

function check_win(){
    c1 = document.getElementById("1").innerText
    c2 = document.getElementById("2").innerText
    c3 = document.getElementById("3").innerText
    c4 = document.getElementById("4").innerText
    c5 = document.getElementById("5").innerText
    c6 = document.getElementById("6").innerText
    c7 = document.getElementById("7").innerText
    c8 = document.getElementById("8").innerText
    c9 = document.getElementById("9").innerText

    if(c1===c2===c3)
        document.getElementById("disp").innerText=c1+"Wins!"
    if(c4===c5===c6)
        document.getElementById("disp").innerText=c4+"Wins!"
    if(c7===c8===c9)
        document.getElementById("disp").innerText=c7+"Wins!"
    if(c1===c4===c7)
        document.getElementById("disp").innerText=c1+"Wins!"
    if(c2===c5===c8)
        document.getElementById("disp").innerText=c2+"Wins!"
    if(c3===c6===c9)
        document.getElementById("disp").innerText=c3+"Wins!"
    if(c1===c5===c9)
        document.getElementById("disp").innerText=c1+"Wins!"
    if(c3===c5===c7)
        document.getElementById("disp").innerText=c3+"Wins!"
}