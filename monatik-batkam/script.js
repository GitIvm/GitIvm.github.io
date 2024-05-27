function toggleLyrics() {
    var lyricsContainer = document.getElementById("lyrics");
    var lyricsButton = document.querySelector(".buttons button:first-child");
    if (lyricsContainer.style.display === "none" || lyricsContainer.style.display === "") {
        lyricsContainer.style.display = "block";
        lyricsButton.textContent = "Сховати текст";
    } else {
        lyricsContainer.style.display = "none";
        lyricsButton.textContent = "Показати текст";
    }
}


function downloadSong() {
    var link = document.createElement('a');
    link.href = 'Monatik-Batkam.mp3';
    link.download = 'Monatik-Batkam.mp3';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
