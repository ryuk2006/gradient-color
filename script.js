const gradientBox = document.querySelector('.gradient-Box');
const selectMenu = document.querySelector('.select-box select');
const colorInputs = document.querySelectorAll('.colors input');
const textarea = document.querySelector('textarea');
const refreshbu = document.querySelector('.refresh');
const copyBtn = document.querySelector('.copy');

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generatorGradient = (isRandom) => {
    let gradient;
    if (isRandom) {
        const randomColor1 = getRandomColor();
        const randomColor2 = getRandomColor();
        const randomAngle = Math.floor(Math.random() * 360);
        gradient = `linear-gradient(${randomAngle}deg, ${randomColor1}, ${randomColor2})`;
        
        colorInputs[0].value = randomColor1; // Update color input 1
        colorInputs[1].value = randomColor2; // Update color input 2
    } else {
        const color1 = colorInputs[0].value;
        const color2 = colorInputs[1].value;
        const direction = selectMenu.value;
        gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;
    }
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient};`;
}

colorInputs.forEach(input => {
    input.addEventListener("input", () => generatorGradient(false));
});

selectMenu.addEventListener("change", () => generatorGradient(false));

refreshbu.addEventListener("click", () => generatorGradient(true));

copyBtn.addEventListener('click', () => {
    textarea.select();
    document.execCommand('copy');
    alert("Your code has been copied!");
});
