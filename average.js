var tinchi = document.querySelectorAll("td:nth-child(3)");
var monhoc = document.querySelectorAll("td:nth-child(2)");
var diem = document.querySelectorAll("td:nth-child(6)");

var credit = 0,
    GPA = 0; //GPA
var majority_credit = 0,
    majority_GPA = 0; //Majority

for (var i = 1; i < tinchi.length; i++) {
    if (monhoc[i].innerText.includes("Thể dục") ||
        monhoc[i].innerText.includes("Anh văn") ||
        monhoc[i].innerText.includes("Giáo dục") ||
        Number(diem[i].innerText) < 5) {
        continue;
    } else if (monhoc[i].innerText.includes("CSC")) {
        //Change CSC to suitable code, ex: PHY, MTH,...
        majority_credit += Number(tinchi[i].innerText) * Number(diem[i].innerText);
        majority_GPA += Number(tinchi[i].innerText);
    }
    credit += Number(tinchi[i].innerText) * Number(diem[i].innerText);
    GPA += Number(tinchi[i].innerText);
}
console.log("Number of credit: " + GPA);
console.log("GPA: " + credit / GPA);
console.log("Number of majority credit: " + majority_GPA);
console.log("Majority GPA: " + majority_credit / majority_GPA);
