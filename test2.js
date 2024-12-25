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

const calculateDate = (input) => {
    return new Promise((resolve, reject) => {
        const [year, month, day] = input.split(",").map(Number);
        try{
            const date = new Date(year, month - 1, day);
            resolve(date.toLocaleDateString('th-TH', { weekday: 'long' }));
        }catch {
            reject("ข้อมูลไม่ถูกต้อง")
        }
    })
}

(async () => {
    try {
        const input = await getInput("Input : ");
        const result = await calculateDate(input);
        console.log(`Output: ${result}`);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close(); 
    }
})();