function lockShapes() {
    const triangle = document.querySelector('.seq-one');
    const rectangle = document.querySelector('.right-rect');

    if (triangle && rectangle) {
        // Rectangle ki width nikal rahe hain (e.g., 150px)
        const rectWidth = rectangle.offsetWidth;

        // Triangle ko theek utne hi pixels piche dhakel rahe hain
        // -1px gap ko overlap karne ke liye hai (taki hairline gap na dikhe)
        triangle.style.right = (rectWidth - 1) + "px";
        triangle.style.marginRight = "0";
    }
}

// Window load aur resize par chalayein
window.addEventListener('load', lockShapes);
window.addEventListener('resize', lockShapes);