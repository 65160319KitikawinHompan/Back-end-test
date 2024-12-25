const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ฟังก์ชันในการรับ input จากผู้ใช้
const getInput = (query) => {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
};

// ฟังก์ชันในการหาตัวอักษรที่มีการติดกันมากที่สุด
const findMostRepeatedChars = (input) => {
    return new Promise((resolve, reject) => {
        if (input) {
            let maxCount = 0;
            let result = [];
            let currentChar = input[0];
            let currentCount = 1;

            // ลูปเพื่อหาตัวอักษรที่ติดกันมากที่สุด
            for (let i = 1; i < input.length; i++) {
                if (input[i] === currentChar) {
                    currentCount++;
                } else {
                    if (currentCount > maxCount) {
                        maxCount = currentCount;
                        result = [currentChar];
                    } else if (currentCount === maxCount) {
                        result.push(currentChar);
                    }
                    currentChar = input[i];
                    currentCount = 1;
                }
            }

            // ตรวจสอบตัวสุดท้ายหลังจากลูป
            if (currentCount > maxCount) {
                maxCount = currentCount;
                result = [currentChar];
            } else if (currentCount === maxCount) {
                result.push(currentChar);
            }

            resolve(result);
        } else {
            reject("กรุณาใส่ข้อความที่ต้องการตรวจสอบ");
        }
    });
};

// ฟังก์ชันหลักที่ใช้ในการประมวลผล
(async () => {
    try {
        const input = await getInput("กรุณาใส่ข้อความ: ");
        const result = await findMostRepeatedChars(input);
        console.log(`ตัวอักษรที่ติดกันมากที่สุดคือ: ${result}`);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close();
    }
})();
