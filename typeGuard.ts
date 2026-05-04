// type guard --> in, and typeof

type Alphaneumeric = number | string;
const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

const add1 = add(2, 2);
const add2 = add(2, "2");

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`This ${user.name} and his role is ${user.role}`);
  } else {
    console.log(`This ${user.name}`);
  }
};

getUserInfo({ name: "Normal", role: "Admin" });
