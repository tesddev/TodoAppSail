function addMovie() {
    const movieName = document.getElementById('movieName').value;
    const movieLink = document.getElementById('movieLink').value;

    if (movieName && movieLink) {
        const movieList = document.getElementById('movieList');

        const movieBox = document.createElement('div');
        movieBox.className = 'movie-box';

        const img = document.createElement('img');
        img.src = movieLink;
        img.alt = movieName;

        const p = document.createElement('p');
        p.textContent = movieName;

        movieBox.appendChild(img);
        movieBox.appendChild(p);
        movieList.appendChild(movieBox);

        // Clear the input fields
        document.getElementById('movieName').value = '';
        document.getElementById('movieLink').value = '';
    } else {
        alert('Please enter both movie name and movie link.');
    }
}
