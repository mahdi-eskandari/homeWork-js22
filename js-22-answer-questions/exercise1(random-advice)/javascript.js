const adviceId = document.querySelector(".advice_id")
const adviceText = document.querySelector(".advice")
const button = document.querySelector(".button")



async function request() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice")
        if (!response.ok) {
            throw "undefined data !!!!!"
        }

        const data = await response.json()
        console.log(data);
        displayAdvice(data)

    } catch (error) {
        alert(error)
    }
}
request()

function displayAdvice(data) {

    adviceId.textContent = `ADVICE #${data.slip.id}`
    adviceText.textContent = `"${data.slip.advice}"`

}


button.addEventListener("click", request)



























// // گرفتن المنت‌های HTML
// const adviceId = document.getElementById("advice-id");
// const adviceText = document.getElementById("advice-text");
// const newAdviceBtn = document.getElementById("new-advice");

// // تابع برای دریافت نقل‌قول جدید
// async function fetchAdvice() {
//     try {
//         const response = await fetch("https://api.adviceslip.com/advice");
//         const data = await response.json();
//         const advice = data.slip;

//         // نمایش اطلاعات در صفحه
//         adviceId.textContent = advice.id;
//         adviceText.textContent = `"${advice.advice}"`;
//     } catch (error) {
//         adviceText.textContent = "Error fetching advice. Try again!";
//     }
// }

// // اجرای تابع هنگام بارگذاری صفحه
// fetchAdvice();

// // کلیک روی دکمه برای دریافت Advice جدید
// newAdviceBtn.addEventListener("click", fetchAdvice);
