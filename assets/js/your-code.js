export function getAllDogs() {
    return fetch("/dogs");
}

export function getDogNumberTwo() {
    return fetch("/dogs/2");
}

export function postNewDog() {
    const url = "/dogs";
    const headers = {"Content-Type": "application/x-www-form-urlencoded"};
    const body = new URLSearchParams({
        name: "Ryan jr",
        age: 7
    });
    const options = {
        method: "POST",
        headers: headers,
        body: body
    };

    return fetch(url, options);
}

export function postNewDogV2(name, age) {
    const url = "/dogs";
    const headers = {"Content-Type": "application/x-www-form-urlencoded"};
    const body = new URLSearchParams({
        name: name,
        age: age
    });
    const options = {
        method: "POST",
        headers: headers,
        body: body
    };

    return fetch(url, options);
}

export function deleteDog(id) {
    const url = `/dogs/${id}/delete`;
    const headers = {"AUTH": 'ckyut5wau0000jyv5bsrud90y'};
    const options = {
        method: "POST",
        headers: headers
    };

    return fetch(url, options);
}
