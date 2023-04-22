function handleTimeUpdate(_event){
   var currentTime = this.currentTime;
   // Update the startTime if duration of continuous viewing enough
   if (currentTime - previousTime > 6 && currentTime - previousTime < 7) {
     previousTime = currentTime;
     startTime = currentTime;
   }
   // Detect move in video position || keyboard arrow exception
   if (currentTime - previousTime > 7 || currentTime - previousTime < -7) {
     previousTime = currentTime;
   }
}

function resetVariables(){
  CurrentTime = 0;
  previousTime = 0;
  startTime = 0;
}

// Update default variables
resetVariables();


// Обрабатываем событие, когда изменяется текущее время воспроизведения видео
document.querySelector("video").addEventListener("timeupdate", handleTimeUpdate);


// Open/next video
document.querySelector("video").addEventListener("loadedmetadata", resetVariables);


// Обрабатываем нажатие на клавишу "B" на любой раскладке клавиатуры
document.addEventListener("keydown", function(event) {
  if (event.code.includes("KeyB")) {
    // Возвращаемся к предыдущей позиции воспроизведения
    document.querySelector("video").currentTime = startTime;
    previousTime = startTime;
  }
});
