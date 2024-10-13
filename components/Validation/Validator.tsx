export class Validator {
  value: string | number;
  key: string;
  field: string;
  errors: { [key: string]: { message: string } };
  constructor({
    value,
    key,
    field,
  }: {
    value: string | number;
    field: string;
    key: string;
  }) {
    this.value = value;
    this.key = key;
    this.field = field;
    this.errors = {};
  }

  required = () => {
    if (this.value.toString().trim() === "") {
      this.errors[this.key] = {
        message: `${this.field} is required`,
      };
    }
    return this;
  };

  numberRequired = () => {
    if (this.value === 0) {
      this.errors[this.key] = {
        message: `${this.field} is required`,
      };
    }
    return this;
  };

  email = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(this.value.toString())) {
      this.errors[this.key] = { message: "Invalid email address" };
    }
    return this;
  };

  //   required = () => {
  //     if (this.value.toString().trim() === "") {
  //       this.errors.push({ message: `${this.field} is required` });
  //     }
  //     return this;
  //   };

  //   email = () => {
  //     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //     if (!emailRegex.test(this.value.toString())) {
  //       this.errors.push({ message: "Invalid email address" });
  //     }
  //     return this;
  //   };

  // static validateEmail = (email: string) => {
  //     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //     return emailRegex.test(email);
  // };

  // static validatePassword = (password: string) => {
  //     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  //     return passwordRegex.test(password);
  // };

  // static required = (value: string) => {
  //     return value.trim() !== "";
  // }
}
