// Loader hide
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
    }, 3000);
});

// Name Typing Effect
const nameEl = document.getElementById('name');
const text = "BM OFFICIAL";
let i = 0;
nameEl.innerHTML = "";

function typeWriter() {
    if (i < text.length) {
        nameEl.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 120);
    }
}
setTimeout(typeWriter, 3500);

// Button click effect - sound vibe
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1.05)';
        }, 100);
    });
});

// Mouse RGB trail effect
document.addEventListener('mousemove', e => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 1000);
});