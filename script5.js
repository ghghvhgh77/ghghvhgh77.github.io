$(document).ready(function($){
  $('.handle').each(function(){
    $(".handle").css('transform', 'rotate( 180deg )');
  });
});

/*랜덤색상변경*/
$(function(){
  var colors = ["blue","orange","lightblue","red","purple","lightgreen","green","lightblue","#FF6619","salmon"];
  var randColor = colors[Math.floor(Math.random()*colors.length)];
  $('.finball').each(function() {
    $(".finball").css('background-color', randColor);
  });

  setTimeout(function(){
    document.querySelector('.popup').classList.add('drop')},5000);

  function mentr(){
    var ment = new Array();
    ment[0] = "너무 힘들다면 고양이 사진을 보세요. 고양이의 무해한 귀여움이 당신의 고통을 조금이나마 잊게 해줄 것입니다.";
    ment[1] = "너무 힘들다면 강아지 사진을 보세요. 강아지의 무해한 귀여움이 당신의 고통을 조금이나마 잊게 해줄 것입니다. ";
    ment[2] = "더 이상 버티지 못할 땐, 수액을 맞으러 가봅시다. 1시간 동안 누워서 수액을 맞고 일어나면 잠시 동안 부스터를 단 듯 가벼운 몸을 맞이할 수 있습니다.";
    ment[3] = "물리치료를 받을 구실을 만들어 한 시간 동안 누워있을 수 있는 치트키를 활용해 보세요. 이전보다 조금 살 것 같은 상태가 만들어질 수 있습니다.";
    ment[4] = "더 이상 버틸 수 없다, 어깨가 뻐근하고 머리에 열이 오른다. 그렇다면 한의원에 가봅시다. 한의사 선생님의 따끔한 말씀과 함께 곁들여지는 부황과 침의 콜라보는 뭉친 근육과 함께 정신도 조금은 노곤해지는 효과를 노려보세요. ";
    document.querySelector('#ment').innerHTML = randomItem(ment) + '<br />';
    function randomItem(a){
    return a[Math.floor(Math.random() * a.length)];}
    };
    mentr();
  /* when popup closed remove it from the dom tree*/
  // document.querySelector('.popup .close').addEventListener('click', () => {
  //   document.querySelector('.wrapper').remove()
});  

  