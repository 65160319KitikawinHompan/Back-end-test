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

/* อ้างอิงค์โค้ด BAHTTEXT ผมเอามาดัดแปลงจาก 
 * https://jsat66.medium.com/num2str-another-javascript-version-of-bahttext-85814436cd68
 * https://github.com/earthchie/BAHTTEXT.js  
*/
const numberConvert = (input) => {
    return new Promise((resolve, reject) => {
        const numbers = Number(input);
        if (!isNaN(numbers)) {
            let text = "";
            // เป็นการใช้ Regular Expression (regex) เพื่อแทนที่เครื่องหมาย , (comma) 
            // และช่องว่าง (space) ทั้งหมดในสตริง numStr ด้วยสตริงว่าง "" (ไม่แทนที่อะไรเลย) เพื่อให้มั่นใจว่าไม่มีเครื่องหมายคั่นหรือช่องว่างในตัวเลข
            let numStr = numbers.toString().replace(/[, ]/g, "");
            let ones = ["ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
            let tens = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];

            let numbersLength = numStr.length;
            for (let i = 0; i < numbersLength; i++) {
                let number = parseInt(numStr.charAt(i), 10); 
                if (number === 0) {
                    text = ones[0];
                }else if (number > 0) {
                    if (numbersLength > 2 && i === numbersLength - 1 && number === 1) {
                        text += "เอ็ด" + tens[numbersLength - 1 - i];
                    } else {
                        text += ones[number] + tens[numbersLength - 1 - i];
                    }
                }
            }

            text = text.replace("หนึ่งสิบ", "สิบ");
            text = text.replace("สองสิบ", "ยี่สิบ");
            text = text.replace("สิบหนึ่ง", "สิบเอ็ด");

            resolve(text)
        } else {
            reject("ตัวเลขไม่ถูกต้อง");
        }
    });
};

(async () => {
    try {
        const input = await getInput("Input : ");
        const result = await numberConvert(input);
        console.log(`Output: ${result}`);
    } catch (error) {
        console.error(error);
    } finally {
        rl.close(); 
    }
})();

// function BAHTTEXT(a, b) {
//     "use strict";
//     if (void 0 === b) b = "บาทถ้วน";
//     a = a || 0;
//     a = a.toString().replace(/[, ]/g, "");

//     if (isNaN(a) || Math.round(100 * parseFloat(a)) / 100 == 0) {
//         return "ศูนย์บาทถ้วน";
//     }

//     var c = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"];
//     var d = ["", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];
//     var g = "";

//     if (a.indexOf(".") > -1) {
//         var h = a.toString().split(".");
//         a = h[0];
//         h[1] = parseFloat("0." + h[1]);
//         h[1] = (Math.round(100 * h[1]) / 100).toString();
//         h = h[1].split(".");
//         if (h.length > 1 && h[1].length === 1) h[1] = h[1].toString() + "0";
//         a = parseInt(a, 10) + parseInt(h[0], 10);
//         g = a ? BAHTTEXT(a) : "";
//         if (parseInt(h[1], 10) > 0) {
//             g = g.replace("ถ้วน", "") + BAHTTEXT(h[1], "สตางค์");
//         }
//         return g;
//     }

//     if (a.length > 7) {
//         var j = a.substring(0, a.length - 6);
//         var k = a.slice(-6);
//         return (
//             BAHTTEXT(j).replace("บาทถ้วน", "ล้าน") +
//             BAHTTEXT(k).replace("ศูนย์", "")
//         );
//     }

//     var e = a.length;
//     for (var i = 0; i < e; i += 1) {
//         var f = parseInt(a.charAt(i), 10);
//         if (f > 0) {
//             if (e > 2 && i === e - 1 && f === 1 && b !== "สตางค์") {
//                 g += "เอ็ด" + c[e - 1 - i];
//             } else {
//                 g += d[f] + c[e - 1 - i];
//             }
//         }
//     }

//     g = g.replace("หนึ่งสิบ", "สิบ");
//     g = g.replace("สองสิบ", "ยี่สิบ");
//     g = g.replace("สิบหนึ่ง", "สิบเอ็ด");

//     return g + b;
// }