
    $(document).ready(function(){
        $("button:eq(0)").click(function(){
            //animate(객체,시간,속도)
            $('.m0').animate({left:500}, "fast", 'swing')
                .animate({left:0}, "slow", 'swing');
        });
          $("button:eq(1)").click(function(){
            //이동할때는 오른ㅉ녹으로 500px 만큼 이동하고
            //돌아올때는 텍스트 애니메이션을 함께 작동
            $('.m1').animate({left:500}, "fast", 'swing')
            .animate({left:0}, "slow", 'swing',function(){
                //find()는 선택한요소의 자식요소를 선택함
                $(this).find('span').animate({top:10}, 'fast','swing')
            });
        });
          $("button:eq(2)").click(function(){
            $('.m2').animate({width:"toggle"}, "fast", 'swing')
            
        });
    });

