const { error } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getInput = (query) => {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
};

const arrCircleRotate = (arr, rotate) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(rotate)) {
            // const arrLength = arr.length;
            // rotate %= arrLength;

            // arr = arr.slice(rotate).concat(arr.slice(0, rotate));
            // resolve(arr);

            arr.push(...arr.splice(0, rotate))
            resolve(arr);
        }else {
            reject("ข้อมูลไม่ถูกต้อง");
        }
    })
}

(async () => {
    try {
        const inputArr = await getInput("InputArr : ");
        const inputRotate = await getInput("InputRotate : ");
        const result = await arrCircleRotate(inputArr.replace(/[^\d,]/g, '').split(',').map(num => parseInt(num.trim(), 10)), inputRotate);
        console.log(`Output: ${result}`);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close(); 
    }
})();