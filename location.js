function getLocation() {

    const status =
        document.getElementById("locationStatus");

    if (!navigator.geolocation) {

        status.innerText =
            "Geolocation is not supported by your browser.";

        return;
    }

    status.innerText =
        "📍 Getting your location...";


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            const location = {

                latitude: latitude,
                longitude: longitude

            };


            localStorage.setItem(
                "userLocation",
                JSON.stringify(location)
            );


            status.innerText =
                "✅ Location shared successfully!";

        },


        function(error) {

            status.innerText =
                "❌ Unable to get location. Please allow location access.";

        }

    );

}
