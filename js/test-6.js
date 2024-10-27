// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;

//   console.log(parent.hasOwnProperty("surname"));
//   console.log(child.name);

/////////////////////////////////////////////////////

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
    
//   }
// }
// console.log(new Car("Audi", "Q3", 36000));// {brand: "Audi", model: "Q3", price: 36000}

// //////////////////////////////////////////////////////////

// class Car {
//   constructor(parm) {
//     this.brand = parm.brand;
//     this.model = parm.model;
// //     this.price = parm.price;
// //   }
// // }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));

/////////////////////////////////////////////////////////////////

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
//   getPrice() {
// return this.price;
//   }
//   changePrice(newPrice) {
// this.price = newPrice;
//   }
// }

/////////////////////////////////////////////////////////////////////

// class Car {
//   #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));

/////////////////////////////////////////////////////////////////////////

// class Car {
//     #price;
//     maxPrice = 50000;
  
//     constructor(params) {
//       this.#price = params.price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
       
//         if(newPrice >= Car.maxPrice) {
//             return;
//         } else {
//             return  this.#price = newPrice;
//         }
//     }
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000

////////////////////////////////////////////////////////////

// class Car {
//     static #maxPrice = 50000;
//     static checkPrice(price) {
//       if(price > Car.#maxPrice) {
//   return `Error! Price exceeds the maximum`;      
//       }
//     else {
//       return `Success! Price is within acceptable limits`;
//     }
//     }
  
//     constructor(params) {
//       this.price = params.price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

  //////////////////////////////////////////////////////////////////////////////////

//   class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     static role = {
//       BASIC: "basic",
//       SUPERUSER: "superuser"
//     }
//   }

//////////////////////////////////////////////////////////////////

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     static role = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
//     access;
//     constructor({email, access}) {
//     super(email)
//      this.access = access; 
//     }
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.access); // "superuser"

////////////////////////////////////////////////////////////

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     static role = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
//   blacklistedEmails = [];
//     blacklist(email) {
//     this.blacklistedEmails.push(email);
//     }
//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email)
      
//     }
//     constructor(params) {
//       super(params.email);
//       this.access = params.access;
//     }
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.access); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true