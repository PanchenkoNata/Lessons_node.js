Евгений Лукашевский

паттерн мидл вейр - промежуточный обработчик

вход данные
пачка функций последовательно что-то с ними делает ( напр первые буквы болшие, из имени и отчества делает инициалы) каждую такую ф-ю наз мидл вейр

cli  для экспресса создает быстро само настройки



поставить проект как инструмент cli на диск (глобально), чтоб не подкачивать к каждому проекту

интолим глобальна cli генератор
npm install express-generator -g

создать папку   express-app   для экспресса  (название любое)
express express-app

модуль www наз ранером, запуск для вэба

app.use(express.urlencoded({ extended: false })); боди парсер, чтоб видеть эти данные
app.use(express.json()); парсит json
app.use(cookieParser()); парсит кукисы

строка 25 генерирует ошибку
строка 30 обработка ошибок

routes/index.js  


nodemon посмотреть в гугл, чтоб не прергружать сервер постоянно при разработке

єкспресс єто часть приложения, поєтому app лучше переписать на 


#!/usr/bin/env node   первая строка из файла www




д.з.

создать єкспрес приложение
удалить папки views? public без шаблонизаторов, 
сделать чтоб работало без ошибок (зашла на / и все работает)

нарисовать два роута, один  отдает хтмл, второй отдает что нибудь
в первом написать джс код , он исполняется на фронте (это типа аякс) который делает запрос на второй и 
получить ответ(ответ от 2) и вывести в браузерную консоль

эксиос