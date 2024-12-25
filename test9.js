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

// ฟังก์ชันในการตรวจสอบและหาหลักตรวจสอบ
const exam05 = (studentId) => {
    const idArray = studentId.split('').map(Number);

    if (idArray.some(isNaN)) {
        throw new Error("รหัสนิสิตต้องเป็นตัวเลขเท่านั้น");
    }

    const calculateGroup = (start, end, multiplierStart) => {
        let total = 0;
        let multiplier = multiplierStart;
        for (let i = start; i <= end; i++) {
            total += idArray[i] * multiplier;
            multiplier--;
        }
        return total;
    };

    if (idArray.length === 8) {
        // สร้างหลักตรวจสอบ
        const group1Sum = calculateGroup(0, 1, 9);
        const group2Sum = calculateGroup(2, 3, 7);
        const group3Sum = calculateGroup(4, 7, 5);
        const group2Multiplied = group2Sum * idArray[7];
        const group2Mod = group2Multiplied % 8;
        const group1And3Sum = group1Sum + group3Sum;

        let index = group2Mod;
        while (idArray[index] === 0) {
            index = (index + 1) % 8;
        }
        const nextNonZero = idArray[index];
        const checkDigit = group1And3Sum % nextNonZero;

        return studentId + checkDigit;
    } else if (idArray.length === 9) {
        // ตรวจสอบความถูกต้อง
        const baseId = studentId.slice(0, 8);
        const calculatedId = exam05(baseId);
        return studentId === calculatedId;
    } else {
        throw new Error("รหัสนิสิตต้องมีความยาว 8 หรือ 9 หลัก");
    }
};

// ฟังก์ชันหลักที่ใช้ในการรับค่าจากผู้ใช้และประมวลผล
(async () => {
    try {
        const studentIdInput = await getInput("กรุณาใส่รหัสนิสิต (8 หรือ 9 หลัก): ");
        const result = exam05(studentIdInput);

        if (typeof result === 'string') {
            console.log(`รหัสนิสิตพร้อมหลักตรวจสอบ: ${result}`);
        } else if (typeof result === 'boolean') {
            console.log(`รหัสนิสิตนี้${result ? 'ถูกต้อง' : 'ไม่ถูกต้อง'}`);
        }
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
})();
