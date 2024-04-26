document.getElementById('toggleTextButton').addEventListener('click', function() {
    var lyricsDiv = document.getElementById('lyrics');
    if (lyricsDiv.style.display === 'none') {
        lyricsDiv.style.display = 'block';
        this.textContent = 'Сховати текст';
    } else {
        lyricsDiv.style.display = 'none';
        this.textContent = 'Показати текст';
    }
});

document.getElementById('downloadButton').addEventListener('click', function() {
    var audioSrc = document.querySelector('audio').src;
    var link = document.createElement('a');
    link.href = audioSrc;
    link.download = 'Skryabin - Випускний.mp3';
    link.click();
});
