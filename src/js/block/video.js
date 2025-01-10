$(() => {

    const btnOk = document.querySelector('.pog-video .btn-play');
    const toggleVideo = (event) => {
        const parent = event.target.closest(".pog-video");
        const wrapperVideo = parent.querySelector('#fon');
        event.preventDefault();
        wrapperVideo.controls = 'controls';
        wrapperVideo.muted = !wrapperVideo.muted;
        wrapperVideo.volume = 0.9;
        btnOk.style.visibility = "hidden";
        wrapperVideo.play();
    };
    btnOk.addEventListener('click', toggleVideo);

});