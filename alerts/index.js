for (let alerts = 0; alerts < 6; alerts++) {
    let one = (alerts == 1); // one alert?
    let is = one ? "is" : "are"; // choose between "is" OR "are"
    let s = one == 1 ? "" : "s"; // trailing "s" or empty space

    // Form message in proper english
    let message = `The ${is} ${alerts} alert${s}.`;
    console.log(message);
}