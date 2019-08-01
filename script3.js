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
    ment[0] = "지칠 때 호올스 XS 3단계를 입에 넣고 물을 한모금 마셔보세요. 정신을 차리다 못해 각성의 효과를 만날 수 있게 됩니다. 가끔은 위로보다 따끔한 한 방이 필요하기도 하니까요.";
    ment[1] = "지칠 때 파주의 명물 라 본느의 비스토네를 먹어보세요. 향긋한 유자 향과 함께 풍부한 버터의 유지방, 팥앙금의 단맛이 잠시나마 위로해 줄 수 있습니다.";
    ment[2] = "지칠 때 리터 초콜릿의 화이트 마카다미아 맛을 먹어보세요. 호사스러운 단맛은 당신의 에너지를 조금 더 짜낼 수 있게 해줍니다.";
    ment[3] = "지칠 때 공차로 달려가서 펄 추가를 한 얼그레이 밀크티를 주문합시다. 당도와 얼음은 취향것 넣어도 좋지만, 힘이 나야 한다면 당도 선택은 옵션이 아닙니다.";
    ment[4] = "지칠 때 탱크보이를 먹어보세요. 아삭아삭한 식감의 아이스크림을 먹다보면 잠시 모든 것을 잊을 수도 있습니다. ";
    document.querySelector('#ment').innerHTML = randomItem(ment) + '<br />';
    function randomItem(a){
    return a[Math.floor(Math.random() * a.length)];}
    };
    mentr();
  /* when popup closed remove it from the dom tree*/
  // document.querySelector('.popup .close').addEventListener('click', () => {
  //   document.querySelector('.wrapper').remove()
});  

  
