const validatePassword = require('./passwordvalidation'); //import the function
const readline = require('readline');   //readline module for reading datastream


//creates readline interface using stdin/out
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//prompts user to enter a password and passes input to validation function until quit string is entered
rl.question('Enter a password for validation (or :q to quit) ', (answer) => {

    if ((answer) != 'q') {
        passwordFeedback(answer);
        rl.on('line', (answer) => {
            if (answer != 'q') {
                passwordFeedback(answer);

            } else {
                closeRl();
                return;
            }
        });
    }else{  //needed to close if 'q' is first input received
        closeRl();
        return;
    }
});

//Function gives user feedback on validity of entered password
//Uses validatePassword() to return boolean
function passwordFeedback(word) {


    if (validatePassword(word)) {
        console.log('The password is valid: ', (word));
    }
    else {
        console.log('The password is invalid: ', (word));

    }
}

//function for closing the rl readline interface and displays exit message to user
function closeRl() {
    console.log('Goodbye!');
    rl.close();
}



