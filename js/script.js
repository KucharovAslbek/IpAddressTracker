// at_BMqgGaW3DPLGCX7tqEHLRRskiiYR7
let input = document.querySelector('.search-input');
let searchBtn = document.querySelector('.search');
let middleContent = document.querySelector('.content-middle');

searchBtn.addEventListener('click', () => {
    let ipAddress = input.value;
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_BMqgGaW3DPLGCX7tqEHLRRskiiYR7&ipAddress=${ipAddress}`)
        .then((response) => response.json())
        .then((data) => {
            let IpAdressBlock = document.querySelector('.ip-address');
            LocationBlock = document.querySelector('.location');
            TimezoneBlock = document.querySelector('.timezone');
            IspBlock = document.querySelector('.isp');

            IpAdressBlock.textContent = data.ip;
            LocationBlock.textContent = `${data.location.region}, ${data.location.city}`;
            TimezoneBlock.textContent = data.location.timezone;
            IspBlock.textContent = data.isp;

            let map = L.map('map').setView([data.location.lat, data.location.lng], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);
            let marker = L.icon({
                iconUrl: '../img/icon-location.svg',
                iconSize: [36, 46],
            });
            let markerOptions = {
                title: 'MyLocation',
                clickable: true,
                draggable: true,
            };
            L.marker([data.location.lat, data.location.lng], { icon: marker }, markerOptions).addTo(map);
        });
});
