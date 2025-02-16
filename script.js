function createSmallHeart() {
    const smallHeart = document.createElement('div');
    smallHeart.classList.add('small-heart');
    document.body.appendChild(smallHeart);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    smallHeart.style.left = `${x}px`;
    smallHeart.style.top = `${y}px`;

    setTimeout(() => {
        smallHeart.remove();
    }, 2000);
}

// Crear corazones pequeños cada 300ms
setInterval(createSmallHeart, 300);
