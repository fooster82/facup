function test() {
    let backgroundColour = document.body.style.backgroundColor
    console.log("Current background colour is: " + backgroundColour)

    switch(backgroundColour){
        case 'white':
            document.body.style.background = 'red';
            console.log('background changed to red')
            break;

        case 'red':
            document.body.style.background = 'blue';
            console.log('background changed to blue')
            break;

        case 'blue':
            document.body.style.background = 'white'  
            console.log('background changed to white')  
            break;
    }

    console.log("Background colour is now: " + backgroundColour)
}