var instance = new vidbg(".video", {
    mp4: "video/world.mp4",
    webm: "video/world.webpm",
    poster: "video/poster.jpg",
    overlay: false,
});

var rellax = new Rellax(".rocket");
if (document.body.clientWidth < 576) {
    rellax.destroy();
}
AOS.init();