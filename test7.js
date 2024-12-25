const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ฟังก์ชันในการรับ input จากผู้ใช้
const getInput = (query) => {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer.trim());
        });
    });
};

// ฟังก์ชันในการเรียงตัวเลข
const exam03 = async (numbers, order) => {
    try {
        // แปลงค่าทั้งหมดในอาร์เรย์เป็นตัวเลข
        numbers = numbers.map((num) => parseFloat(num));

        // ตรวจสอบว่าอาร์เรย์มีค่า NaN หรือไม่
        if (numbers.some(isNaN)) {
            throw new Error("มีค่าที่ไม่ใช่ตัวเลขในข้อมูล");
        }

        // การเรียงข้อมูลจากน้อยไปมากหรือมากไปน้อย
        if (order === 'asc') {
            return numbers.sort((a, b) => a - b);
        } else if (order === 'desc') {
            return numbers.sort((a, b) => b - a);
        } else {
            throw new Error("คำสั่งเรียงข้อมูลไม่ถูกต้อง (ต้องเป็น 'asc' หรือ 'desc')");
        }
    } catch (error) {
        return error.message;
    }
};

// ฟังก์ชันหลักที่ใช้ในการรับค่าจากผู้ใช้และประมวลผล
(async () => {
    try {
        const countInput = await getInput("กรุณาใส่จำนวนตัวเลขที่ต้องการ (เช่น 5): ");
        const count = parseInt(countInput, 10);

        if (isNaN(count) || count <= 0) {
            throw new Error("จำนวนตัวเลขต้องเป็นค่าจำนวนเต็มบวก");
        }

        let numbers = [];
        for (let i = 0; i < count; i++) {
            const numberInput = await getInput(`กรุณาใส่ตัวเลขตัวที่ ${i + 1}: `);
            numbers.push(numberInput);
        }

        const orderInput = await getInput("กรุณาเลือกการเรียงข้อมูล (asc หรือ desc): ");
        const result = await exam03(numbers, orderInput);

        if (Array.isArray(result)) {
            console.log(`ผลลัพธ์ที่เรียงแล้ว: [${result.join(", ")}]`);
        } else {
            console.error(result);
        }
    } catch (error) {
        console.error("ข้อผิดพลาด:", error.message);
    } finally {
        rl.close();
    }
})();


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const getInput = (query) => {
//     return new Promise((resolve) => {
//         rl.question(query, (answer) => {
//             resolve(answer);
//         });
//     });
// };

// const exam03 = async () => {
//     try {
//         // รับจำนวนตัวเลขที่ต้องการ
//         const count = await getInput('Enter the number of elements: ');
//         const numbers = [];

//         // รับค่าตัวเลขจากผู้ใช้
//         for (let i = 0; i < count; i++) {
//             const num = await getInput(`Enter number ${i + 1}: `);
//             numbers.push(Number(num));
//         }

//         // รับค่าการเรียงลำดับ
//         const sortOrder = await getInput('Enter sorting order (asc/desc): ');

//         // เรียงลำดับตัวเลขตามคำสั่ง
//         if (sortOrder.toLowerCase() === 'asc') {
//             numbers.sort((a, b) => a - b);  // เรียงจากน้อยไปมาก
//         } else if (sortOrder.toLowerCase() === 'desc') {
//             numbers.sort((a, b) => b - a);  // เรียงจากมากไปน้อย
//         } else {
//             console.log('Invalid sort order. Please enter "asc" or "desc".');
//             return;
//         }

//         // แสดงผลลัพธ์
//         console.log('Sorted numbers:', numbers);
//     } catch (error) {
//         console.error('Error:', error);
//     } finally {
//         rl.close();
//     }
// };

// exam03();