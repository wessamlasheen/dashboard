//add active class on page you are on
console.log(window.location.pathname);

let percentEle = Array.from(document.getElementsByClassName("percent"));
console.log(percentEle);
percentEle.forEach((element) => {
  element.style.width = element.dataset.width;
});

// static number increase
let staticNum = document.querySelectorAll(".static-num");
staticNum.forEach((ele) => {
  let handler = setInterval(() => {
    ele.innerHTML++;
    if (ele.innerHTML === ele.dataset.number) {
      clearInterval(handler);
    }
  }, ele.dataset.number / 5000);
});

// delete icons
let recycle = document.querySelectorAll(".delete");
recycle.forEach((ele) => {
  ele.onclick = function (e) {
    ele.parentElement.remove();
  };
});

// done icon
let done = Array.from(document.getElementsByClassName("done-icon"));
done.forEach((ele) => {
  ele.onclick = function (e) {
    ele.parentElement.classList.toggle("done");
  };
});

// change mail button
let changeBtn = document.querySelector(".change-mail");
console.log(changeBtn);
let mailInput = document.querySelector(
  ".general-info form input[type='email']"
);
changeBtn.onclick = function () {
  mailInput.removeAttribute("disabled");
};
mailInput.onblur = function () {
  mailInput.setAttribute("disabled", true);
};

// remove and set active class on div box in backup manager in setting page

let backupBoxs = document.querySelectorAll(".backup-manager .data .box");
backupBoxs.forEach((ele) => {
  ele.onclick = function (e) {
    backupBoxs.forEach((el) => {
      el.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
});
