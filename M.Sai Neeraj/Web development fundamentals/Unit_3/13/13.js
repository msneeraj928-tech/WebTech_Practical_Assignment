function greet() {
    console.log("Hello");
}
greet();

function add(a, b) {
    console.log(a + b);
}
add(5, 3);

function scopeDemo() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x);
    }
    console.log(x);

    let y = 30;
    if (true) {
        let y = 40;
        console.log(y);
    }
    console.log(y);

    const z = 50;
    if (true) {
        const z = 60;
        console.log(z);
    }
    console.log(z);
}

scopeDemo();
