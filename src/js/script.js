// import {one, two} from './main';
// console.log(`${one} and ${two}`);
// -----------------
// импорт с назначением другого имени переменной, когда мы импортируем очень большое название которое не особо удобно читать и использовать
// import {one as first} from './main';
// console.log(first);
// --------------------
// Импорт всего что есть в другом файле
// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();
// ------------------
// Использование default экспорта 
// import sayHi from './main';
// sayHi();
// --------------------
// Импорт из другого файла с использованием html страницы
import sayHi from './main.js';
sayHi();
