(function (){

    //현재 주사위 결과값 계산 함수
    var accum = 0;
    function getResult(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    //이동한 칸 수 계산 함수
    function calcUserPos(){
        while(true){
            if(accum < 26){
                return (accum);
            }else{
                return ((accum)%26);
            }
        }
    }
    //돌은 바퀴 수 계산 함수
    function calcReturnPos(){
        while(true){
            return parseInt((accum)/26);
        }
    }
    
    //캐릭터 위치 변경 표시
    var cityAll = document.querySelectorAll(".city li");//맵 요소 20개 전부 선택
    const selectMap = Array.from(cityAll); //선택된 맵 요소 20개 묶음을 배열로 변환
    const user = document.getElementById("user"); //캐릭터 요소 선택

    //굴리기 버튼 클릭 시 실행됨
    document.getElementById("run").addEventListener("click", function (){

        var result = getResult(2,12); //현재 주사위 결과값 입력
        document.getElementById("result").innerHTML = "현재 주사위 결과값: " + result;
       
        accum += result; //주사위 결과값 누적합계 입력
        document.getElementById("total").innerHTML = "누적 주사위 결과값: " + accum;

        var calcPos = calcUserPos(); //이동한 칸 수 입력
        document.getElementById("userPos").innerHTML = "이동한 칸 수: " + calcPos;

        var returnPos = calcReturnPos(); //돌은 바퀴 수 입력
        document.getElementById("returnPos").innerHTML = "돌은 바퀴 수: " + returnPos;

        
        var mapPos = selectMap.at(calcPos); //'이동한 칸 수'에 따른 '맵의 index'값을 var로 정의
        let rect = mapPos.getBoundingClientRect(); //반환된 맵의 좌표 계산
        let rectX = rect.x + "px";
        let rectY = rect.y + "px";
        user.style.left = rectX;
        user.style.top = rectY;


        document.getElementById("myPos").innerHTML = "현재 내 위치: " + rectX + ", " + rectY ; //옮겨진 위치값 입력
        
        // console.log(city.offsetWidth/3);
        // console.log("x: "+ rect.x); //콘솔에 계산된 좌표 중 x값 표시
        // console.log(Array.isArray(selectMap)); //맵이 배열로 잘 변환되었는지 확인
        // console.log(selectMap.at(calcPos-1)); //이동한 칸 수에 따른 맵을 반환한다.


            // 새로 옮겨진 위치값 - 원래 있던 위치값 = 만큼 이동시키면 됨
            // 근데 그러려면 기존의 위치값을 저장해둬야 하는데...a
            // 그리고 이동칸수가 20이 넘어갔을 땐 어떻게 애니메이션을 잡을가 일단 0 쪽으로 리버스 시켜보자

    });

})();





