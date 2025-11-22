var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
    video = document.querySelector("#player1")
    video.autoplay = false;
    console.log("Autoplay is set to " + video.autoplay);
    video.loop = false;
    console.log("Loop is set to " + video.loop);
});




document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("pause Video");
	video.pause();

});

document.querySelector("#slower").addEventListener("click", function(){
    console.log("Video Slowered");

    if (video.playbackRate > 0.1) {
        video.playbackRate -= 0.1;} 
		else {
        console.log("Video is at slowest speed!");}
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
    console.log("Video Fastered");

    if (video.playbackRate < 2.0) {
        video.playbackRate += 0.1;} 
		else {
        console.log("Video is at fastest speed!");}
    console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    video.currentTime += 10;

    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
        console.log("Going back to the beginning!");
    }
    console.log("Current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video Muted");
		document.querySelector("#volume").innerHTML = "0%";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video Unmuted");
		document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
	}
})

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;

    document.querySelector("#volume").innerHTML = this.value + "%";

    if (this.value > 0) {
        video.muted = false;
        document.querySelector("#mute").innerHTML = "Mute";
    }

    else {
        video.muted = true;
        document.querySelector("#mute").innerHTML = "Unmute";
    }

    console.log("Volume set to " + video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Old School style applied");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Original style applied");
    video.classList.remove("oldSchool");
});
