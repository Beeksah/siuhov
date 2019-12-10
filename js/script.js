$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  nextArrow: '<button class="slick-btn next"><img src="assets/img/arrow.svg"></button>',
  prevArrow: '<button class="slick-btn prev"><img src="assets/img/arrow.svg"></button>',
});
$('.sertificates').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: '<button class="slick-btn next"><img src="assets/img/arrow.svg"></button>',
  prevArrow: '<button class="slick-btn prev"><img src="assets/img/arrow.svg"></button>',
});

var checkboxMark = document.getElementById('checkbox-mark');
var checkboxLabel = document.getElementById('checkbox-label');
checkboxLabel.addEventListener("click", function(){
  if(checkboxMark.style.display=="block"){
    checkboxMark.style.display="none";
  }
  else{
    checkboxMark.style.display="block";
  }
});

var questions = document.getElementsByClassName('question');
function questionListener(question, index){
  question.addEventListener('click', function(){
    for(var i=0; i<questions.length; i++){
      if(i==index){
        questions[i].classList.toggle('opened');
      }
      else{
        questions[i].classList.remove('opened');
      }
    }
  })
}
for(var i=0; i<questions.length; i++){
  questionListener(questions[i],i);
}


var link1 = document.getElementById('first-procedure-link');
var link2 = document.getElementById('second-procedure-link');
var link3 = document.getElementById('third-procedure-link');
var link4 = document.getElementById('fourth-procedure-link');
var specs = document.getElementsByClassName('specs-info');
function toggleSpec(index){
  for(var i=0;i<specs.length;i++){
    if(i==index){
      specs[i].classList.toggle('closed-spec');
    }
    else{
      specs[i].classList.add('closed-spec');
    }
  }
}
link1.addEventListener('click', function(){toggleSpec(0)});
link2.addEventListener('click', function(){toggleSpec(1)});
link3.addEventListener('click', function(){toggleSpec(2)});
link4.addEventListener('click', function(){toggleSpec(3)});



$(function(){
  $(":input").inputmask();
  $(".email").inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: "lower"
      }
    }
  });
  $(".phone").inputmask({"mask": "9 (999) 999-9999"});
  $(".date").inputmask({"mask": "99.99.9999, 99:99"});
})

var menuImages = document.getElementsByClassName('menu-img');
var smallMenu = document.getElementById('small-menu-content');
document.getElementById('small-menu-btn').addEventListener('click',function(){
  smallMenu.classList.toggle('hidden');
  for(var i=0; i<2; i++){
    menuImages[i].classList.toggle('closing-input');
  }
})