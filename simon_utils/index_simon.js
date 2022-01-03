$(".laugh").hide();
alert("Welcome to Simon Game")
function clickorange() {
    $("#orange").on("click", function () {
        $("#orange").addClass("animate");
        setTimeout(() => {
        $("#orange").removeClass("animate") 
        }, 150);
        console.log('orange')
        user_input('orange')
    });
}

function clickred() {
    $("#red").on("click", function () {
        $("#red").addClass("animate");
        setTimeout(() => {
        $("#red").removeClass("animate") 
        }, 150);
        console.log("red")
        user_input('red')
    });
}

function clickviolet() {  
    $("#violet").on("click", function () {
        $("#violet").addClass("animate");
        setTimeout(() => {
        $("#violet").removeClass("animate") 
        }, 150);
        console.log("violet")
        user_input('violet')
    });
}

function clickyellow() {
    $("#yellow").on("click", function () {
        $("#yellow").addClass("animate");
        setTimeout(() => {
        $("#yellow").removeClass("animate") 
        }, 150);
        console.log('yellow')
        user_input('yellow')
    });
}   

function getorange(t) {
    setTimeout(() => {
    $("#orange").addClass("animate")
    setTimeout(() => {
        $("#orange").removeClass("animate") 
    }, 150); 
        console.log('wait_orange')
    }, t*1000);
    //return'orange'
}
function getred(t) {
    setTimeout(() => {
    $("#red").addClass("animate")
    setTimeout(() => {
        $("#red").removeClass("animate") 
    }, 150);
        console.log('wait_red')
    }, t*1000);
    //return 'red' 
 }
 function getviolet(t) {
    setTimeout(() => {
    $("#violet").addClass("animate")
    setTimeout(() => {
        $("#violet").removeClass("animate") 
    }, 150); 
        console.log('wait_violet')
    }, t*1000);
    //return 'violet'
 }
 function getyellow(t) {
    setTimeout(() => {
    $("#yellow").addClass("animate") 
    setTimeout(() => {
        $("#yellow").removeClass("animate") 
    }, 150);
    
        console.log('wait_yellow')
    }, t*1000);
    //return 'yellow'
}   

function user_input(clr) { // for making function local scope-global use globalThis
    user_arr.push(clr)
    var user_str = user_arr.toString();
    console.log(user_str);
}

function query_maker(lvl) {
    var query_arr = [];
    for(var i=0; i<=lvl;i++) {
        rand = Math.floor(4*Math.random());
        query_arr.push(rand);
    }
    return query_arr
}

var GameEnded = false;
var lvl = 1;
var result = 'correct'
var state = 'Comp'
var obj = {
    0 : getorange,
    1 : getred,
    2 : getviolet,
    3 : getyellow  
}
var obj_name = {
    0 : 'orange',
    1 : 'red',
    2 : 'violet',
    3 : 'yellow'
}


function Main(lvl, state) {
    console.log('level : ', lvl);
    $("#number").text(" : " + lvl);
    user_arr = []
    query_arr = query_maker(lvl); //query-maker should return query array
    query_arr_2 = []
    for(var i=0 ; i<query_arr.length ; i++ ) {
        query_arr_2.push(obj_name[query_arr[i]])
    }
    console.log(query_arr_2)
    query_str = query_arr_2.toString();
    console.log('Query-Pattern: ' + query_str);

    if(state == 'Comp') {
        console.log('in Comp State')
        for(var i=0;i<query_arr.length;i++) {
            obj[query_arr[i]](i);    
        }
        state = 'player';
    }
    ///*
    if(state=='player') {
        console.log('In Player State')
        //initialize
        if (lvl === 1) {
            clickorange();
            clickred();
            clickviolet();
            clickyellow();
        }
        //$("button").addClass("new-button")
        
        $(document).on('click','button',function() {

            user_str = user_arr.toString();
            //console.log('User-Input: ' + user_str);
            //console.log('Query-Pattern: ' + query_str);
            //console.log(query_str == user_str)
            if(user_str !== '') { //exception rule
                if(query_str === user_str) {
                    result = 'correct';
                    lvl+=1
                    state = 'Comp';
                    $("#result").text("Correct !")
                    Main(lvl, state);
                } 
                else {
                    result = 'incorrect';
                    $("#result").text("Incorrect !")
                    console.log('Game_Over')
                    $("h1").text("Game Over Loser")
                    $(".laugh").show();
                }
            }
        })
        
    }
}

Main(lvl, state); // driver