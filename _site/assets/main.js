
  const username = "AllenLeeyn";
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      const img = document.getElementById('github-avatar');
      img.src = data.avatar_url;
      img.alt = `${username}'s GitHub Avatar`;
    })
    .catch(err => console.error('Error fetching GitHub profile:', err));

  document.querySelectorAll('.carousel').forEach(carousel => {
    const items = carousel.querySelectorAll('.carousel-item');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    let index = 0;

    function showImage(i) {
      items.forEach((img, idx) => img.style.display = idx === i ? 'block' : 'none');
    }

    prev.addEventListener('click', () => {
      index = (index - 1 + items.length) % items.length;
      showImage(index);
    });

    next.addEventListener('click', () => {
      index = (index + 1) % items.length;
      showImage(index);
    });

    // Optional: arrow key navigation for this carousel
    document.addEventListener('keydown', (e) => {
      if (!carousel.contains(document.activeElement)) return; // only if carousel is in focus
      if (e.key === 'ArrowLeft') {
        index = (index - 1 + items.length) % items.length;
        showImage(index);
      } else if (e.key === 'ArrowRight') {
        index = (index + 1) % items.length;
        showImage(index);
      }
    });

    showImage(index); // initialize
  });
  