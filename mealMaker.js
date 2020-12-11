// As a frequent diner, you love trying out new restaurants and experimenting with different foods. 
// However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, 
// and you want an easier way to be able to figure out what you are going to eat.

// In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. 
// We’ll keep running it until we’re satisfied with the generated meal!


const menu = {

    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
  
    get courses() {
      return {
        appertizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
        };
    },
    get appetizers() {
         return this._courses.appetizers;
  
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
  
    },
    get mains() {
        return this._courses.mains;
  
    },
    set mains(mains) {
        this._courses.mains = mains;
  
    },
    get desserts() {
        return this._courses.desserts;
  
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
    },
  
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
          name: dishName,
          price: dishPrice,
        };
       return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
  
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
    },
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'chicken soup', 8.25);
  menu.addDishToCourse('appetizers', 'cream Pie', 100.25);
  
  menu.addDishToCourse('mains', 'Couscous', 12.25);
  menu.addDishToCourse('mains', 'chackshouka', 18.25);
  menu.addDishToCourse('mains', 'caviar', 200.25);
  
  menu.addDishToCourse('desserts', 'Cheese cake', 5.25);
  menu.addDishToCourse('desserts', 'fruits', 3.25);
  menu.addDishToCourse('desserts', 'chocolate', 10.25);
  
  
  
  let meal = menu.generateRandomMeal();
  console.log(meal);