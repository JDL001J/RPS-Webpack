export const comChoice = () => {
    const comArry = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = comArry[Math.floor((Math.random()*comArry.length))];
    return randomChoice
}