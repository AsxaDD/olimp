

const randGradient = () => {
    let r1 = Math.floor(Math.random() * (240 - 40 + 1) + 40);
    let g1 = Math.floor(Math.random() * (240 - 40 + 1) + 40);
    let b1 = Math.floor(Math.random() * (240 - 40 + 1) + 40);
    let r2 = Math.floor(Math.random() * (240 - 40 + 1) + 40);
    let g2 = Math.floor(Math.random() * (240 - 40 + 1) + 40);
    let b2 = Math.floor(Math.random() * (240 - 40 + 1) + 40);

    let o1 = parseFloat((Math.random() * (0.8 - 0.3) + 0.3).toFixed(1));
    let o2 = parseFloat((Math.random() * (0.8 - 0.3) + 0.3).toFixed(1));

    let data = ['top', 'right', 'bottom', 'left']
    let n1 = data[r1 % 4]
    let n2 = data[r2 % 4]

    return [n1, n2, r1, g1, b1, o1, r2, g2, b2, o2]
}


export default randGradient