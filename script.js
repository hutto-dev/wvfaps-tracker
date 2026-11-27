const button = document.getElementById("submit-btn");
const natList = document.getElementById("natList");
const presList = document.getElementById("presList");

const maleList11 = document.getElementById("maleList11");
const maleList12 = document.getElementById("maleList12");
const maleList13 = document.getElementById("maleList13");
const femaleList11 = document.getElementById("femaleList11");
const femaleList12 = document.getElementById("femaleList12");
const femaleList13 = document.getElementById("femaleList13");

// calculate bmi

const standards = {
  Male: {
    11: {
      flex: { hfz: 8 },
      trunk: { hfz: 9 },
      pacer: { hfz: 20, nat: 31, pres: 60 },
      plank: { hfz: 40, nat: 71, pres: 119 },
      pushup: { hfz: 8, nat: 15, pres: 27 },
    },
    12: {
      flex: { hfz: 8 },
      trunk: { hfz: 9 },
      pacer: { hfz: 23, nat: 37, pres: 65 },
      plank: { hfz: 45, nat: 71, pres: 127 },
      pushup: { hfz: 10, nat: 18, pres: 32 },
    },
    13: {
      flex: { hfz: 8 },
      trunk: { hfz: 9 },
      pacer: { hfz: 29, nat: 42, pres: 70 },
      plank: { hfz: 50, nat: 83, pres: 134 },
      pushup: { hfz: 12, nat: 24, pres: 39 },
    },
    14: {
      flex: { hfz: 8 },
      trunk: { hfz: 9 },
      pacer: { hfz: 36, nat: 44, pres: 75 },
      plank: { hfz: 55, nat: 90, pres: 134 },
      pushup: { hfz: 14, nat: 24, pres: 40 },
    },
  },

  Female: {
    11: {
      flex: { hfz: 10 },
      trunk: { hfz: 9 },
      pacer: { hfz: 20, nat: 24, pres: 46 },
      plank: { hfz: 40, nat: 67, pres: 105 },
      pushup: { hfz: 7, nat: 13, pres: 20 },
    },
    12: {
      flex: { hfz: 10 },
      trunk: { hfz: 9 },
      pacer: { hfz: 23, nat: 26, pres: 49 },
      plank: { hfz: 45, nat: 69, pres: 127 },
      pushup: { hfz: 7, nat: 13, pres: 20 },
    },
    13: {
      flex: { hfz: 10 },
      trunk: { hfz: 9 },
      pacer: { hfz: 25, nat: 26, pres: 50 },
      plank: { hfz: 45, nat: 69, pres: 127 },
      pushup: { hfz: 7, nat: 13, pres: 21 },
    },
    14: {
      flex: { hfz: 10 },
      trunk: { hfz: 9 },
      pacer: { hfz: 27, nat: 27, pres: 50 },
      plank: { hfz: 45, nat: 79, pres: 134 },
      pushup: { hfz: 7, nat: 13, pres: 21 },
    },
  },
};

console.log(standards);

button.addEventListener("click", function () {
  const row = document.querySelectorAll("#rows tr");

  const students = [];

  row.forEach((row) => {
    const student = {
      name: row.querySelector(".student-name").value,
      gender: row.querySelector(".gender").value,
      age: row.querySelector(".student-age").value,
      trunk: Number(row.querySelector(".trunk").value),
      srL: Number(row.querySelector(".sitReachL").value),
      srR: Number(row.querySelector(".sitReachR").value),
      pushup: Number(row.querySelector(".pushup").value),
      pacer: Number(row.querySelector(".pacer").value),
      plank: Number(row.querySelector(".plank").value),
    };
    students.push(student);
  });

  function sortZones() {
    hfzList.innerHTML = "";
    natList.innerHTML = "";
    presList.innerHTML = "";

    students.forEach((item) => {
      const li = document.createElement("li");
      const studentCategory = standards[item.gender][item.age];
      if (
        item.pushup >= studentCategory.pushup.pres &&
        item.pacer >= studentCategory.pacer.pres &&
        item.plank >= studentCategory.plank.pres
      ) {
        li.textContent = item.name;
        presList.appendChild(li);
      } else if (
        item.pushup >= studentCategory.pushup.nat &&
        item.pacer >= studentCategory.pacer.nat &&
        item.plank >= studentCategory.plank.nat
      ) {
        li.textContent = item.name;
        natList.appendChild(li);
      } else if (
        item.pushup >= studentCategory.pushup.hfz &&
        item.pacer >= studentCategory.pacer.hfz &&
        item.plank >= studentCategory.plank.hfz
      ) {
        li.textContent = item.name;
        hfzList.appendChild(li);
      }
    });
  }

  sortZones();
});
