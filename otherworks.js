document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const artworks = [
        { src: 'art2.jpg', title: 'Stations', date: '2023', medium: 'Colored pencil; collage' },
        { src: 'art3.png', title: 'DIY project', date: '2022', medium: 'Acrylic on denim' },
        { src: 'art4.jpg', title: 'Design sprint', date: '2024', medium: 'Photoshop' },
        { src: 'firstArt.png', title: 'Untitled', date: '2023', medium: 'Photoshop' }
    ];

    document.getElementById('nextArtwork').addEventListener('click', function() {
        function getNextArtwork() {
            const artwork = artworks[currentIndex];
            currentIndex = (currentIndex + 1) % artworks.length; 
            return artwork;
        }

        const newArtwork = getNextArtwork();

        document.getElementById('artImage').src = newArtwork.src;
        document.getElementById('title').textContent = newArtwork.title;
        document.getElementById('medium').textContent = newArtwork.medium;
        document.getElementById('dateCreated').textContent = newArtwork.date;
    });
});
