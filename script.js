// BAR CHART – Monthly Donations
const ctx1 = document.getElementById('donationChart');

new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct'],
        datasets: [{
            label: 'Donations',
            data: [1200, 1500, 900, 2000, 1800, 2500, 3000, 2200, 2800, 3500],
            backgroundColor: '#d34932'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } }
    }
});

// LINE CHART – Volunteers Yearly
const ctx2 = document.getElementById('volunteerChart');

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['2018','2019','2020','2021','2022','2023'],
        datasets: [{
            label: 'Volunteers',
            data: [400, 600, 850, 900, 1500, 2000],
            borderColor: '#000',
            backgroundColor: '#d34932',
            tension: 0.4,
            borderWidth: 3
        }]
    },
    options: {
        responsive: true
    }
});



// PIE CHART – Donation Sources
const ctx3 = document.getElementById('donationSourceChart');

new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Online', 'Offline', 'Corporate', 'Fundraising Events'],
        datasets: [{
            data: [45, 25, 15, 15],
            backgroundColor: ['#d34932', '#000', '#ffb29b', '#f57c51']
        }]
    },
    options: {
        responsive: true
    }
});


// DOUGHNUT CHART – Volunteer Categories
const ctx4 = document.getElementById('volCategoryChart');

new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Medical', 'Education', 'Food Service', 'Campaigning'],
        datasets: [{
            data: [30, 40, 20, 10],
            backgroundColor: ['#d34932', '#000', '#ffb29b', '#f57c51']
        }]
    },
    options: {
        responsive: true
    }
});
