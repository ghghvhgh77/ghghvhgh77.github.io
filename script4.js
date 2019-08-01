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
    ment[0] = "눈이 감길 때 스타벅스 시그니처 초콜릿에 샷을 추가하고, 에스프레소휩을 한가득 올려 먹어보세요. 심봉사가 눈을 뜨게 만드는 마법은 아니지만, 당신을 옅은 각성상태로 데려다줄 것입니다.";
    ment[1] = "Leon 자몽 맛 젤리를 먹어보세요. 상큼한 맛과 꽤 잘 구현된 자몽 향이 당신을 조금 더 움직일 수 있게 해줄 것 입니다.";
    ment[2] = "Freegells를 먹어보세요. 민트의 강력한 향이 당신의 잠에 대신 재채기를 해줄지도 모릅니다.";
    ment[3] = "Organica의 쫀득한 군고구마를 먹어보세요. 쫀득하고 달콤한 고구마 맛에 놀라게 되는 것도 잠시, 당신의 치아와 한 몸이 된 것을 분리시키려 노력하다보면 잠이 조금 달아날거에요.";
    ment[4] = "크리스피크림에서 아메리카노와 도넛 세트를 골라 봅시다. 카페인과 지방, 설탕의 삼박자를 온 몸으로 느끼다보면 미세하게 정신이 돌아오는 것이 느껴질 것 입니다.";
    document.querySelector('#ment').innerHTML = randomItem(ment) + '<br />';
    function randomItem(a){
    return a[Math.floor(Math.random() * a.length)];}
    };
    mentr();
  /* when popup closed remove it from the dom tree*/
  // document.querySelector('.popup .close').addEventListener('click', () => {
  //   document.querySelector('.wrapper').remove()
});  

  
