document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Mencegah pengiriman form secara default

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Tampilkan alert dengan informasi yang diisi
            alert(Terima kasih, ${name}! Pesan Anda telah dikirim.\nEmail: ${email}\nPesan: ${message});

            // Reset form setelah pengiriman
            contactForm.reset();
        });
    }
});