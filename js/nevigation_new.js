function new_news() {
    const articleBoxes = document.querySelectorAll("article");
// Сколько последних статей считаются новыми
    let counter_new = 2;
    for (var i = 0; i < articleBoxes.length;i++) {
        if(i > counter_new - 1) {
            articleBoxes[i].style.display = 'none'
        }
    }
    //Добавляем кнопке "Новое" цвет фона и рамку
       var navA = document.querySelector('a[href="#"]');
       navA.style.backgroundColor = '#ff000097';
       navA.style.borderStyle = 'inset';
       navA.style.borderRadius = '5px';
}