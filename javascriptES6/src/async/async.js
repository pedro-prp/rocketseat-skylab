const MyPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('ok') }, 2000);
});

export async function executePromisse () {
    const response = await MyPromisse();

    console.log(response);
}