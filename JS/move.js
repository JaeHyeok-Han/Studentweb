const menubtn = document.querySelector('.head .menubtn');
const menulist = document.querySelector('.head .menubox');

menubtn.addEventListener('click', function() {
 menulist.classList.toggle('open');
 menubtn.classList.toggle('open');
});

const wisebox = document.querySelector('.wisebox .wise');
const wise =
[
'장미꽃은 가시 틈에서 자란다. - 탈무드',
'최후의 승리는 출발선의 비약이 아니라, 결승점에 이르기까지의 끈기와 노력이다. - 워나매커',
'만족하게 살고 때때로 웃으며 많은 사람을 사랑한 삶이 성공한다. - 스탠리',
'꿈은 어느 날 하늘에서 뚝 떨어질 수 있어도, 목표는 하루에 한 발짝씩 걸어야 도달할 수 있다. - 한비야',
'1퍼센트의 가능성, 그것이 나의 길이다. - 나폴레옹',
"'내일'을 입에 달고 다니는 사람에게 내일이란 없다. '내일'을 만드는 것은 바로 '오늘'의 실천이다. - 하우석",
'고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다. - 괴테',
'행복한 사람은 특별한 환경 속에 있는 사람이 아니라 어떤 특별한 마음자세를 갖고 살아가는 사람이다. - 휴 다운스',
]
let num = Math.floor(Math.random()*wise.length);

window.onload = function() {
  wisebox.innerHTML = wise[num];
};
