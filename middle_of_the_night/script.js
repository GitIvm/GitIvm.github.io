


function downloadSong() {
    var link = document.createElement('a');
    link.href = 'Middle Of The Night.mp3';
    link.download = 'Middle Of The Night.mp3';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
