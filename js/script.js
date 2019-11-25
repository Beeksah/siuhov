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
    //debugger;
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
    menuImages[i].classList.toggle('hidden');
  }
})