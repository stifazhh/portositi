function hamburg(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

function toggleDescription(id) {
    const description = document.getElementById(id);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

// Mendapatkan semua tautan di navbar
const links = document.querySelectorAll('.nav-container .links a');

// Mendapatkan URL halaman saat ini
const currentLocation = window.location.href;

// Menambahkan kelas 'active' ke tautan yang sesuai
links.forEach(link => {
    if (link.href === currentLocation) {
        link.classList.add('active');
    }
});

// Fungsi untuk menampilkan atau menyembunyikan menu hamburger
function hamburg() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

const texts = [
    "Siswa SMK 4",
    "Front-End",
];

let speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
