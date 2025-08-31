 function updateDistance() {
            fetch('/distance')
                .then(res => res.text())
                .then(data => {
                    document.getElementById("distance").innerText = data;
                });
        }
        setInterval(updateDistance, 500);
        window.onload = updateDistance;