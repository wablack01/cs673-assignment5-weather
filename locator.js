export function getCoordinates(location) {
    location = location.replace(" ", "");
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyCedxe_w7BD0v32qcz2fioXzLHa9gYkhqo`)
        .then(res => res.json())
        .then(data => {
            return data.results[0].geometry.location;
        });
}

