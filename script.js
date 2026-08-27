function startSurprise() {

    document.getElementById("welcomeScreen").style.display = "none";

    document.getElementById("surpriseScreen").style.display = "block";
}


function nextStep() {

    document.getElementById("surpriseScreen").style.display = "none";

    document.getElementById("funnyScreen").style.display = "block";
}


function startQuestions() {

    document.getElementById("funnyScreen").style.display = "none";

    document.getElementById("question1").style.display = "block";
}


function nextQuestion() {

    document.getElementById("question1").style.display = "none";

    document.getElementById("question2").style.display = "block";
}


function showQuestion3() {

    document.getElementById("question2").style.display = "none";

    document.getElementById("question3").style.display = "block";
}


function finishQuestions() {

    document.getElementById("question3").style.display = "none";

    // VIDEO SCREEN
    document.getElementById("videoScreen").style.display = "flex";

    // Video automatically play
    const video = document.querySelector("#videoScreen video");

    if (video) {
        video.currentTime = 0;
        video.play().catch(function(error) {
            console.log("Video autoplay blocked:", error);
        });
    }
}


function goToFinal() {

    // Stop video
    const video = document.querySelector("#videoScreen video");

    if (video) {
        video.pause();
    }

    document.getElementById("videoScreen").style.display = "none";

    document.getElementById("finalScreen").style.display = "block";
}


function showUltimateScreen() {

    document.getElementById("finalScreen").style.display = "none";

    document.getElementById("ultimateScreen").style.display = "block";

}