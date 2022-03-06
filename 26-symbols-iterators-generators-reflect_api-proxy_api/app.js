// ? Symbols

// Library Land
const uid = Symbol("uid");
console.log(uid);

const user = {
  [uid]: "p1",
  name: "ibnu",
  age: 19,
  [Symbol.toStringTag]: "User",
};

// app land => Using the library

user.id = "p2"; // tidak bisa

console.log(user);

// console.log(user[uid]) // * Dapet
// console.log(user[Symbol("uid")]) // ! Tidak Dapet

// ? Iterators

const company = {
  users: ["Rina", "Yuri"],
  [Symbol.iterator]: function* employeeGenerator() {
    let currentIndex = 0;
    while (currentIndex < this.users.length) {
      // * yield sama seperti return tapi melakukan return tidak dari 0
      //  * melainkan melanjutkan return
      yield this.users[currentIndex];
      currentIndex++;
    }
  },
};

// const it = company.getEmployee();

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// * Kenapa dia bisa tau berhenti ? karena tidak ada nilai yang di return lagi
for (const employee of company) {
  console.log(employee);
}

// ? Reflect API adalah Object tetapi memiliki fitur lebih banyak course 473

// * Proxy API

const course = {
  title: "Javascript - Complete Guide",
};

const courseHandler = {
  get(obj, propertyName) {
    console.log(propertyName);
    return obj[propertyName] || "Not Found";
  },
  set(obj, propertyName, newValue) {
    if (propertyName === "rating") {
      return;
    }
    obj[propertyName] = newValue;
  },
};

const proxyCourse = new Proxy(course, courseHandler);
console.log(proxyCourse.pengajar); // * Menghasilkan nilai not found
