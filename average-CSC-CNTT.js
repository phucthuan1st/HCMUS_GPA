var credit = document.querySelectorAll("td:nth-child(3)");
var subject = document.querySelectorAll("td:nth-child(2)");
var score = document.querySelectorAll("td:nth-child(6)");

var _credit_ = 0,
    _GPA_ = 0; //GPA

var majority_num = 0,
    majority_GPA = 0,
    CSC00004 = 0; //Majority

for (var i = 1; i < credit.length; i++) {
    if (subject[i].innerText.includes("Thể dục") ||
        subject[i].innerText.includes("Anh văn") ||
        subject[i].innerText.includes("Giáo dục") ||
        subject[i].innerText.includes("Tin học") ||
        Number(score[i].innerText) < 5) {
        continue;
    } else if (subject[i].innerText.includes("CSC")) {
        //Change CSC to suitable code, ex: PHY, MTH,...
        majority_GPA += Number(score[i].innerText);
        majority_num += 1
        if (subject[i].innerText.includes("CSC00004"))
            CSC00004 = Number(score[i].innerText);
    }
    _GPA_ += Number(credit[i].innerText) * Number(score[i].innerText);
    _credit_ += Number(credit[i].innerText);
}

console.clear()
console.log("------------------------------------");
console.log("Number of credit / Tong so tin chi: " + _credit_);
console.log("GPA / Diem trung binh: " + Math.round(_GPA_ / _credit_ * 100) / 100);

console.log("------------------------------------");
console.log("Number of majority credit / Tong so mon chuyen nganh: " + majority_num);
console.log("Majority GPA / Diem trung binh chuyen nganh: " + Math.round(majority_GPA / majority_num * 100) / 100);

console.log("------------------------------------");
console.log("Exclude NMCNTT / Khong tinh NMCNTT");
majority_num -= 1;
majority_GPA -= CSC00004;
console.log("Number of majority credit / Tong so mon chuyen nganh: " + majority_num);
console.log("Majority GPA / Diem trung binh chuyen nganh: " + Math.round(majority_GPA / majority_num * 100) / 100);
