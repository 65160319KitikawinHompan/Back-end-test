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

// ฟังก์ชันในการรับ input และคำนวณผลรวมของตัวเลข
const getSumOfNumbers = (numbers) => {
    // ใช้ Regular Expression เพื่อค้นหาตัวเลขในข้อความ
    if (numbers) {
        // แปลงตัวเลขที่ได้มาเป็นตัวเลขจำนวนเต็มแล้วหาผลรวม
        const sum = numbers.map(Number).reduce((acc, num) => acc + num, 0);
        return sum;
    } else {
        return 0; // ถ้าไม่พบตัวเลขเลยให้ผลลัพธ์เป็น 0
    }
};

// ฟังก์ชันหลักที่ใช้ในการรับ input และคำนวณผลรวม
(async () => {
    try {
        const input = await getInput("กรุณาใส่ข้อความที่มีตัวเลข: ");
        input = input.match(/\d/g);
        const result = getSumOfNumbers(input);
        console.log(`ผลรวมของตัวเลขในข้อความคือ: ${result}`);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close(); 
    }
})();
