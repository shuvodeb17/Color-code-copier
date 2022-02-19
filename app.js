// Project Requirments
// Change the background color by genarating random rgb color by clicking a button

// Steps 
// Step - 1 Create onload handler 
window.onload = () => {
    main ();
}
function main() {
    const root = document.getElementById('root');
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    // btn.addEventListener('click', function(){
    //     const bgColor = genarateRGBColor();
    //     root.style.backgroundColor = bgColor;
    // })

    changeBtn.addEventListener('click', function (){
        const bgColor = genarateHEXColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    })

    copyBtn.addEventListener('click', function (){
        navigator.clipboard.writeText(output.value)
    })

}
// Step - 2 Random color genarator function
// function genarateRGBColor() {
//     const red = Math.floor(Math.random() * 255)
//     const green = Math.floor(Math.random() * 255)
//     const blue = Math.floor(Math.random() * 255)

//     return `rgb(${red}, ${green}, ${blue})`
// }
function genarateHEXColor() {
    // #000000 #ffffff
    // 255, 255, 255 = #FFFFFF
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}


// Step - 3 Collect all necessary referances
// Step - 4 Handle the click event