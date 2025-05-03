
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('popularityChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Завтраки', 'Обеды', 'Ужины', 'Десерты', 'Напитки'],
                datasets: [{
                    label: 'Популярность',
                    data: [15, 20, 13, 25, 10],
                    backgroundColor: ['#e4ba8d', '#f2cfa0', '#ddb892', '#c2a97e', '#b8a189']
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            document.getElementById('contactResponse').innerHTML = `<p>Спасибо, ${name}! Мы получили ваше сообщение.</p>`;
            this.reset();
        });
    }
});

document.getElementById('aboutContactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('aboutName').value;
    const msg = document.getElementById('aboutMessage').value;
    document.getElementById('aboutResponse').innerHTML = `<p>Спасибо, ${name}! Мы свяжемся с вами.</p>`;
    this.reset();
});

const statsCtx = document.getElementById('userStatsChart');
if (statsCtx) {
    new Chart(statsCtx, {
        type: 'line',
        data: {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май'],
            datasets: [{
                label: 'Посетители',
                data: [120, 190, 300, 500, 650],
                fill: false,
                borderColor: '#c2a97e',
                tension: 0.2
            }]
        }
    });
}
