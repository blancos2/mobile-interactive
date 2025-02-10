
/*
    function runGame(){

        
        // PICK RANDOM IMAGE FROM ARRAY
        const randomIndex = Math.floor(Math.random() * image_list.length);
        const selectedImage = `images/${image_list[randomIndex]}`;
        const index = array.indexOf(imgSelect)

        if (image_list.length == 0){
            endGame();
        }
        else {
            
        if (index > -1) { // only splice array when item is found
            image_list.splice(index, 1); // 2nd parameter means remove one item only
        }

        document.getElementById('guessImg').src = selectedImage;

    
        runRound();

        }

        

    }


    function runRound(){
        const img = new Image();
    

    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        startPixelation();
    };



        $(image).pixelate({ value: pix_strength, reveal: false });

        // loop until guessed correctly 
        while (!guessedCorrect){
            if (timer != 0){
                timer -= 1;
                document.getElementById("timer").textContent = timer+ "s";
                pix_strength -= 0.01;

                $(image).pixelate({ value: pix_strength, reveal: false });
            }
            else{
                break; // leave loop 
            }
            setInterval(runRound, 1000);
        }
        if (timer == 0 && !guessedCorrect){
            alert("Sorry, but you're out of time! The correct answer is: " + toString(imgSelect))
        }
        else{
            points += timer * 10 + 50; // add remaining time on clock as bonus points
            document.getElementById("points").textContent = points+ " points";
        }
    
        runGame(); // run a new round 

        
    }


    function startPixelation() {
        const interval = setInterval(() => {
            const pixelSize = Math.max(1, Math.floor((timer / totalTime) * 50)); // Max pixel size = 50

            // Draw pixelated image
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(img, 0, 0, img.width / pixelSize, img.height / pixelSize);
            ctx.drawImage(canvas, 0, 0, img.width / pixelSize, img.height / pixelSize, 0, 0, img.width, img.height);

            timer--;
            if (timer < 0) {
                clearInterval(interval);
                ctx.drawImage(img, 0, 0); // Draw the original image
            }
        }, 1000);
    }


    function validateEntry(){
        let x = document.forms["myForm"]["guess"].value;
        if (x== ""){
            alert("You have to submit a guess!")
            return false;
        }
        // check if the entry is a correct guess
        else if (x.toLowerCase() == imgSelect){
            alert("You got it right!")
            guessedCorrect = true;
            return true;
        }
        // if guess wasn't correct 
        else{
            alert("Sorry, that's not correct!")
            points -= 10;
            return false;
        }


    }
        */


