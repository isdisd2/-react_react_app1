// ok/err
function p(x) {
    return new Promise((resolve, reject) => {
        let a = 1 + x;
        if (a === 2) {
            resolve("OK");
        } else {
            reject("ERR");
        }
    });
}

p(1)
    .then((message) => console.log("Skoncilo " + message))
    .catch((message) => console.log("Zlyhalo s " + message));

// Parelelny beh procesov
const recVideo1 = new Promise((res, rej) => {
    setTimeout(() => res("Video 2 OK"), 500);
});
const recVideo2 = new Promise((res, rej) => {
    setTimeout(() => res("Video 2 OK"), 1000);
});
const recVideo3 = new Promise((res, rej) => {
    res("Video 3 OK");
});
const recVideo4 = new Promise((res, rej) => {
    setTimeout(() => rej("Video 4 Err"), 1500);
});
Promise.all([recVideo1, recVideo2, recVideo3]).then((msg) =>
    console.log("1. All result: " + msg)
);
Promise.race([recVideo1, recVideo2, recVideo3]).then((msg) =>
    console.log("1. One first: " + msg)
);
Promise.all([recVideo1, recVideo2, recVideo4])
    .then((msg) => console.log("2. All result: " + msg))
    .catch((msg) => console.log("2. Fail result: " + msg));
Promise.race([recVideo1, recVideo2, recVideo4])
    .then((msg) => console.log("3. One first: " + msg))
    .catch((msg) => console.log("3.One first fail: " + msg));
