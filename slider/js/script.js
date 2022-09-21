let images = [{
    url: "../img/image1.png",
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
    title: 'Rostov-on-Don, Admiral'
  }, {
    url: "../img/image2.png",
    city: `Sochi
                Thieves`,
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
    title: 'Sochi Thieves'
  }, {
    url: "../img/image3.png",
    city: `Rostov-on-Don
                Patriotic`,
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
    title: 'Rostov-on-Don Patriotic'
  }];

function initSlider(){
    if (!images || !images.length) return;

    let sliderImages = document.querySelector('.slider__images');
    let sliderArrows = document.querySelector('.slider__arrows');
    let sliderDots = document.querySelector('.slider__dots');
    let columnCity = document.querySelector('.column__city');
    let columnArea = document.querySelector('.column__area');
    let columnTime = document.querySelector('.column__time');
    let columnCost = document.querySelector('.column__cost');
    let sliderTitle = document.querySelector('.name');


    initImages();
    initArrows();
    initDots();
    initCity();
    initArea();
    initTime();
    initCost();
    initTitle();



    function initCity(){
        images.forEach((city, index) => {
            let cityText = `<div class = "city__text n${index} ${index === 0? 'active': ''}" >${images[index].city}</div>`;
            columnCity.innerHTML += cityText;
        });
    }
    function initArea(){
        images.forEach((area, index) => {
            let areaText = `<div class = "area__text n${index} ${index === 0? 'active': ''}">${images[index].area}</div>`;
            columnArea.innerHTML += areaText;
        });
    }
    function initTime(){
        images.forEach((time, index) => {
            let timeText = `<div class = "time__text n${index} ${index === 0? 'active': ''}">${images[index].time}</div>`;
            columnTime.innerHTML += timeText;
        });
    }
    function initCost(){
        images.forEach((cost, index) => {
            let costText = `<div class = "cost__text n${index} ${index === 0? 'active': ''}">${images[index].cost}</div>`;
            columnCost.innerHTML += costText;
        });
    }

    function initImages(){
        images.forEach((image, index) => {
            let imageDiv = `<div class = "image n${index} ${index === 0? "active" : ""}" 
            style = "background-image:url(${images[index].url});" data-index = "${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }

    function initArrows(){
        sliderArrows.querySelectorAll('.slider__arrow').forEach(arrow =>{
            arrow.addEventListener('click', function(){
                let curNumber = +sliderImages.querySelector(".active").dataset.index;
                let nextNumber;
                if (arrow.classList.contains('left')){
                    nextNumber = curNumber === 0? images.length -1 : curNumber - 1;
                } else {
                    nextNumber = curNumber === images.length -1? 0: curNumber + 1;
                }
                moveSlider(nextNumber);
            });
        });
    }

    function initDots(){
        images.forEach((image, index) =>{
            let dot = `<div class = "slider__dots-item n${index} ${index === 0? 'active': ''}" data-index = "${index}"></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll('.slider__dots-item').forEach(dot => {
            dot.addEventListener('click', function(){
                moveSlider(this.dataset.index);
            });
        });
    }
    function initTitle(){
        images.forEach((title, index) =>{
            let nameTitle = `<div class = "name__title n${index} ${index === 0? 'active': ''}" data-index = "${index}">${images[index].title}</div>`;
            sliderTitle.innerHTML += nameTitle;
        });
        sliderTitle.querySelectorAll('.name__title').forEach(nameTitle => {
            nameTitle.addEventListener('click', function(){
                moveSlider(this.dataset.index);
            });
        });
    }

    function moveSlider(num){
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');
        columnCity.querySelector('.active').classList.remove('active');
        columnCity.querySelector('.n' + num).classList.add('active');
        columnArea.querySelector('.active').classList.remove('active');
        columnArea.querySelector('.n' + num).classList.add('active');
        columnTime.querySelector('.active').classList.remove('active');
        columnTime.querySelector('.n' + num).classList.add('active');
        columnCost.querySelector('.active').classList.remove('active');
        columnCost.querySelector('.n' + num).classList.add('active');
        sliderTitle.querySelector('.active').classList.remove('active');
        sliderTitle.querySelector('.n' + num).classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded',initSlider);
