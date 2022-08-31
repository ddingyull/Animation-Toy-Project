//@t s-check

// //Tip) 변수 선언은 자동 호이스팅이 발생한다 때문에 class일 때는 변수 호이스팅 안된다

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    console.log(`shape의 넓이 : ${this.width * this.width}`);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    console.log(`Rectangle의 넓이 : ${this.width * this.width}`);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    console.log(`trieangle의 넓이 : ${this.width * this.height / 2 }`);
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height); //brand와 color는 부모것을 쓰겠다는 의미
    this.radius = radius;
  }
  getArea() {
    console.log(`circle의 넓이 : ${(this.radius**2)*3.14}`);
  }
}

const shape = new Shape(5, 5);
const rectangle = new Rectangle(5, 5);
const triangle = new Triangle(5, 5);
const circle = new Circle(4, 4, 2);

  shape.getArea()
  rectangle.getArea()
  triangle.getArea(), circle.getArea()


// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }

//   drive() {
//     console.log();(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
//   }

//   showSpec() {
//     console.log(`이 차의 브랜드는 ${this.brand}이고, 색상은 ${this.color}입니다.`);
//   }
// }

// // const hyundai = new Car('hyundai', 'black');
// // const porche = new Car('porche', 'red');
// // const toyota = new Car('toyota', 'silver');

// // console.log(hyundai.brand, hyundai.color);
// // porche.drive();
// // toyota.drive();

// // function Car(brand, color) {
// //   this.brand = brand;
// //   this.color = color;
// //   this.drive = () => {
// //     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다`);
// //   }
// // }

// // 사실 파일 1개당 class 1개를 권장함 
// class ElecCar extends Car {
//   constructor(brand, color, fuel) {
//     super(brand,color); //brand와 color는 부모것을 쓰겠다는 의미
//     this.fuel = fuel;
//   }

//   //사실 drive()메소드가 상속되어져있는 상태임
//   showFuel() {
//     console.log(`자동차는 ${this.fuel}의 힘으로 주행합니다.`);
//   }

//   //overriding : drive를 그대로 가져다 사용하되 글씨를 변경하여 사용
//   drive() {
//     console.log(
//       `${this.brand}의 ${this.color}색 자동차는 ${this.fuel}의 힘으로 주행합니다.`)
//   }

//   //부모요소의 showSpec을 그대로 사용하더라도 생성자 함수 내부에 있는 this와 동일하게 적용됨(this 대신 super예약어 사용 해도 됨)
//   showSpec() {
//     super.showSpec();
//     console.log(`그리고 이 차는 ${this.fuel} 힘으로 주행 합니다.`);
//   }
// }

// const hyundai = new Car('hyundai', 'black');
// hyundai.showSpec();
// // const porche = new Car('porche', 'red');
// // const toyota = new Car('toyota', 'silver');
// const tesla = new ElecCar('tesla', 'red', 'electricity');
// tesla.showSpec();

// // console.log(hyundai.brand, hyundai.color);
// // porche.drive();
// // toyota.drive();
// // console.log(tesla.brand, tesla.color, tesla.fuel);
// // tesla.showFuel();
// // tesla.drive();


// //예전에 사용하던 overridin, inherit
// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;

//   this.drive() = () => {
//     console.log(`이 차의 브랜드는 ${this.brand}이고, 색상은 ${this.color}입니다.`);
//   }
// }

// function ElecCar(brand, color, fuel) {
//   Car.call(this, brand, color);
//   this.fuel = fuel;
//   this.drive  = () => {
//     //받아온 것은 this를 안쓰고, 새로 생긴거는 this를 만든다
//     console.log(`${brand}의 ${color}색 자동차는 ${this.fuel}의 힘으로 주행합니다.`)
//   }
// }
// // ElecCar를 Car에 상속받으라고 아래처럼 하나씩 적어줘야했음
// ElecCar.prototype = Object.create(Car.prototype); //프로토타입으로 받아서 오브젝트로 생성해주고 
// ElecCar.prototype.constructor = ElecCar; //프로토타입으로 받아서 

// const tesla = new ElecCar('tesla', 'red', 'elec')
// tesla.drive()