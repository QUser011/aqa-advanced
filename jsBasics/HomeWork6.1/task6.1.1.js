function calculateRectangleArea1(width, height) {
    const calculate = width*height;
    return calculate;
} 

const area1 = calculateRectangleArea1(5, 10);
console.log(area1);

const calculateRectangleArea2 = function(width, height){
    const calculate = width * height;
    return calculate;
}

const area2 = calculateRectangleArea2(5, 10);
console.log(area2);

const calculateRectangleArea3 = (width, height) => {
    const calculate = width * height;
    return calculate;
};

const area3 = calculateRectangleArea2(5, 10);
console.log(area3);