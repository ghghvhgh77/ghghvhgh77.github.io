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
    ment[0] = "힘들 때 킷캣을 먹어보세요. 웨이퍼의 바삭한 식감이 찰나의 순간 잠깐이나마 힘의 존재를 느낄 수 있게 도와줄 수도 있습니다. *킷캣과 키커의 맛과 효과의 차이가 다르니 비슷한 상표에 주의하세요.";
    ment[1] = "주변에 보이는 스타벅스로 잽싸게 들어가 블루베리 마카롱을 먹어보세요. 블루베리의 과육이 씹히는 순간의 행복이 당신을 조금 더 살아갈 수 있게 도와줄 것입니다.";
    ment[2] = "마침 경주에서 부스터가 필요하다면 황남빵 본점에서 황남빵을 먹어보세요. 김이 오르는 황남빵을 바라보고만 있어도 힘듦의 수치가 자연스럽게 떨어지는 것을 경험할 수 있습니다.";
    ment[3] = "ABC 초콜릿을 먹어보세요. 익숙한 맛의 저렴한 초콜릿은 고생 끝에 만난 한 줄기 빛 처럼 힘을 줄 것입니다.";
    ment[4] = "힘이 떨어지기 시작 할 때, 마침 옆에 델리만주를 판다면 망설이지 말고 마음속에 품고 다니는 3000원을 꺼내 봅시다. 냄새가 제일 맛있는 델리만주이지만, 냄새를 구입하는 것만으로도 큰 힘이 될 것입니다.";
    document.querySelector('#ment').innerHTML = randomItem(ment) + '<br />';
    function randomItem(a){
    return a[Math.floor(Math.random() * a.length)];}
    };
    mentr();
  /* when popup closed remove it from the dom tree*/
  // document.querySelector('.popup .close').addEventListener('click', () => {
  //   document.querySelector('.wrapper').remove()
});  

  
