// ข้อ 6: หาค่ามากที่สุดและน้อยที่สุดใน Array
function findMinMax(arr) {
    if (arr.length === 0) return { min: null, max: null };
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

// ข้อ 7: เช็คว่าประโยคเป็น Palindrome หรือไม่
function isPalindrome(sentence) {
    const cleaned = sentence.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// ข้อ 8: หาจำนวนตัวเลขใน Array ที่อยู่ในช่วงที่กำหนด
function countInRange(arr, min, max) {
    return arr.filter(num => num >= min && num <= max).length;
}

// ข้อ 9: แปลงเวลาจากชั่วโมง-นาทีเป็นวินาที
function timeToSeconds(hours, minutes) {
    return (hours * 3600) + (minutes * 60);
}

// ข้อ 10: แปลงข้อความ Snake Case เป็น Camel Case
function snakeToCamel(snakeCase) {
    return snakeCase.split('_').map((word, index) => {
        if (index === 0) return word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

// ทดสอบการทำงาน
console.log("ข้อ 6: หาค่ามากที่สุดและน้อยที่สุดใน Array");
console.log(findMinMax([3, 5, 1, 9, 2])); // { min: 1, max: 9 }
console.log(findMinMax([-10, 0, 10])); // { min: -10, max: 10 }
console.log(findMinMax([5])); // { min: 5, max: 5 }

console.log("\nข้อ 7: เช็คว่าประโยคเป็น Palindrome หรือไม่");
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Madam")); // true

console.log("\nข้อ 8: หาจำนวนตัวเลขใน Array ที่อยู่ในช่วงที่กำหนด");
console.log(countInRange([3, 5, 1, 9, 2], 2, 5)); // 3
console.log(countInRange([], 1, 10)); // 0
console.log(countInRange([-5, 0, 5, 10], -10, 5)); // 3

console.log("\nข้อ 9: แปลงเวลาจากชั่วโมง-นาทีเป็นวินาที");
console.log(timeToSeconds(1, 30)); // 5400
console.log(timeToSeconds(0, 45)); // 2700
console.log(timeToSeconds(2, 0)); // 7200

console.log("\nข้อ 10: แปลงข้อความ Snake Case เป็น Camel Case");
console.log(snakeToCamel("this_is_snake_case")); // thisIsSnakeCase
console.log(snakeToCamel("convert_me")); // convertMe
console.log(snakeToCamel("example")); // example
