// Set up a title and welcome text
$(document).ready(function() {
    $("#title").html("Science Trivia Quiz");
    $("#sub-title").html("You do not need to be a scientist to get these questions right!");
    $("#welcome h2").html("Welcome to the Science Trivia Quiz");
    $("#welcome p").html('Please enter your name below and click on "Begin Quiz" to start.');
    $("#welcome label").html("Name: ");
    $("#welcomeBtn").html("Begin Quiz");
    $("#quiz").hide();
});

// string contain username
let str;
// Submit and display username
$("#welcomeBtn").click(function(){
    str = $("#username").val();
    // Validate that the username is not blank
    if (isEmpty(str)) {
        alert("Name cannot be blank!");
        document.getElementById('username').focus();
    }
    else{
        $("#welcome").hide();
        // Fade-in over 1 second
        $("#quiz").fadeIn(1000);
        // Show greeting message with name.
        $("#greeting").html("Welcome, " + str + ". Good luck!").css('margin-top',16);
    }
})

// check if string is empty
function isEmpty(str) {
    return !str.trim().length;
}

// display score
function displayResults(){
    let score = getScore();
    let result1 = 'You scored ' + score + ' out of 5';
    let result2 = 'RESULTS for ' + str + ': You scored ' + score + ' out of 5';
    let perfectResult;
    if(score===5){
        perfectResult = 'You scored 5/5. Perfect!';
    }
    // display over 3 sec
    $('#results1').html(result1).hide().fadeIn(3000);
    // Select the same elements
    //$('div h3');
    //$('h3', 'div');
    $('#results2').html(result2).hide().fadeIn(3000);
    // Flashing 10 times
    let perfect = $('#perfect').html(perfectResult);
    // blink 10 times
    for (let i = 0; i <10; i++) {
        perfect.fadeOut(150).fadeIn(150);
    }
}
function getScore(){
    let score = 0;
    let q1 = $('input[name="q1"]:checked').val();
    let q2 = $('input[name="q2"]:checked').val();
    let q3 = $('input[name="q3"]:checked').val();
    let q4 = $('input[name="q4"]:checked').val();
    let q5 = [];
    // Convert the answers of q5 to array
    $("input:checkbox[name='q5']:checked").each(function(){
        q5.push($(this).val());
    });
    if(q1==="a")score++;
    if(q2==="d")score++;
    if(q3==="c")score++;
    if(q4==="b")score++;
    // Convert q5 array to JSON string and compare value
    if(JSON.stringify(q5)==="[\"a\",\"b\",\"c\",\"e\"]")score++;
    return score;
}

// Validate if all the question was checked.
$("form").submit(function( event ) {
    if (!isChecked('q1')){
        alert("Hold on! You forgot question 1.");
        event.preventDefault();
    }
    else if(!isChecked('q2')){
        alert("Hold on! You forgot question 2.");
        event.preventDefault();
    }
    else if(!isChecked('q3')){
        alert("Hold on! You forgot question 3.");
        event.preventDefault();
    }
    else if(!isChecked('q4')){
        alert("Hold on! You forgot question 4.");
        event.preventDefault();
    }
    else if(!isChecked('q5')){
        alert("Hold on! You forgot question 5.");
        event.preventDefault();
    }
    else {
        displayResults();
        event.preventDefault();
    }
});


function isChecked(q) {
    // Return true if length is not zero.
    return $("input[name="+q+"]:checked").length!==0;
}

$('#hintdiv1')
    .mouseover(function() {
        $('#q1hint').stop(true).fadeIn();
    })
    .mouseout(function() {
        $('#q1hint').fadeOut();
    });

$('#hintdiv2')
    .mouseover(function() {
        $('#q2hint').stop(true).fadeIn();
    })
    .mouseout(function() {
        $('#q2hint').fadeOut();
    });

$('#hintdiv3')
    .mouseover(function() {
        $('#q3hint').stop(true).fadeIn();
    })
    .mouseout(function() {
        $('#q3hint').fadeOut();
    });

$('#hintdiv4')
    .mouseover(function() {
        $('#q4hint').stop(true).fadeIn();
    })
    .mouseout(function() {
        $('#q4hint').fadeOut();
    });

$('#hintdiv5')
    .mouseover(function() {
        $('#q5hint').stop(true).fadeIn();
    })
    .mouseout(function() {
        $('#q5hint').fadeOut();
    });