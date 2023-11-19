/* Set the width of the side navigation to
250px */

function openNav() {
  document.getElementById("mySidenav")
    .style.width = "80%";
}

function closeNav() {
  document.getElementById("mySidenav")
    .style.width = "0";
}
    // Substitua 'VIDEO_ID' pelo ID do vídeo do YouTube que você deseja incorporar
    const videoId = 'VIDEO_ID';

    const videoContainer = document.getElementById('video');
    videoContainer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
