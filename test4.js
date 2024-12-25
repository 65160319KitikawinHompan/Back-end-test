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

/*
* Math.ceil ปัดขึ้นเสมอ
* Math.floor ปัดลงเสมอ
* Math.round ปัดใกล้ 0 <- 1 2 | 3 4 - > 5 < - 6 7 | 8 9 - > 10
* const result = array1.map((value, index) => value == array2[index]);
*/
const calculateRoundNumber = (score) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(score)){
            lastScoreDigit = score % 10;
            if (lastScoreDigit === 7) {
                score = Math.ceil(score / 5) * 5;
            }else {
                score = Math.round(score / 5) * 5;
            }
            resolve(score)
        }else {
            reject("ข้อมูลไม่ถูกต้อง")
        }
    })
}

(async () => {
    try {
        const input = await getInput("Input : ");
        const result = await calculateRoundNumber(input);
        console.log(`Output: ${result}`);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close(); 
    }
})();