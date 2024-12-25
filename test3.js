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

const arrCompare = (firstArr, secondArr) => {
    return new Promise((resolve, reject) => {
        if (firstArr.length === secondArr.length) {
            let result = []
            for (let i = 0; i < firstArr.length; i++) {
                if (firstArr[i] > secondArr[i]) {
                    if ((firstArr[i] - secondArr[i]) >= 10 ) {
                        result.push(2);
                    }else {
                        result.push(1);
                    }
                }else  if (firstArr[i] < secondArr[i]) {
                    result.push(-1);
                }else {
                    result.push(0);
                }
            }
            resolve(result);
        }else {
            reject("ข้อมูลไม่ถูกต้อง")
        }
    })
}

(async () => {
    try {
        // const inputFirstArr = await getInput("InputFirstArr : ");
        // const inputSecondArr = await getInput("InputSecondArr : ");
        const input = await getInput("Input : ");
        const [inputFirstArr, inputSecondArr] = input.split('], [');

        // การใช้ Regular Expression ใน replace(/[^\d,]/g, '') เป็นการลบอักขระที่ไม่ใช่ตัวเลขหรือเครื่องหมายจุลภาคออกจากสตริง
        const firstArr = inputFirstArr.replace(/[^\d,]/g, '').split(',').map(num => parseInt(num.trim(), 10));
        const secondArr = inputSecondArr.replace(/[^\d,]/g, '').split(',').map(num => parseInt(num.trim(), 10));
        
        const result = await arrCompare(firstArr, secondArr);
        console.log(`Output: ${result}`);
        console.log(`Output: [${result.join(', ')}]`); 
    } catch (error) {
        console.error(error);
    } finally {
        rl.close(); 
    }
})();