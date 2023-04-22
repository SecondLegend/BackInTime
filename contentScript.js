function handleTimeUpdate(_event){
   // Сохраняем текущее время воспроизведения
   var currentTime = this.currentTime;
   // Если прошло достаточно времени обновляем startTime
   if (currentTime - previousTime > 6 && currentTime - previousTime < 7) {
     previousTime = currentTime;
     startTime = currentTime;
   }
   // Костыль?! addEventListener("seeking", function() работает через раз
   if (currentTime - previousTime > 7) {
     previousTime = currentTime;
   }
 
   if (currentTime - previousTime < -5) {
     previousTime = currentTime;
   }
}

// Сохраняем предыдущую позицию воспроизведения видео
var previousTime = 0;
// Сохраняем время непрерывного просмотра
var startTime = 0;


// Обрабатываем событие, когда изменяется текущее время воспроизведения видео
document.querySelector("video").addEventListener("timeupdate", handleTimeUpdate);

// Обрабатываем нажатие на клавишу "B" на любой раскладке клавиатуры
document.addEventListener("keydown", function(event) {
  if (event.code.includes("KeyB")) {
    // Возвращаемся к предыдущей позиции воспроизведения
    document.querySelector("video").currentTime = startTime;
    previousTime = startTime;
  }
});
