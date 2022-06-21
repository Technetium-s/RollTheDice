(function (){
    var run = document.getElementById("run");

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
    var char_select = document.getElementById("char_select");
    var map = document.getElementById("map");

    
    //캐릭터 위치 변경 표시
    var cityAll = document.querySelectorAll(".city li");//맵 요소 20개 전부 선택
    const selectMap = Array.from(cityAll); //선택된 맵 요소 20개 묶음을 배열로 변환
    var user = document.getElementById("user"); //캐릭터 요소 선택
    

    //플레이 인원수 선택시 실행됨
    char_select.addEventListener("click", function(){
        char_select.style.display = "none";
        run.style.display = "inline-block";
        map.style.display = "block";
        user.style.display = "block";
    });

    //굴리기 버튼 클릭 시 실행됨
    document.getElementById("run").addEventListener("click", function (){

        var result = getResult(2,12); //현재 주사위 결과값 입력
        document.getElementById("result").innerHTML = "현재 주사위 결과값: " + result;
       
        accum += result; //주사위 결과값 누적합계 입력
        document.getElementById("total").innerHTML = "누적 주사위 결과값: " + accum;

        let calcPos = calcUserPos(); //이동한 칸 수 입력
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

        const myTimeout = setTimeout(pauseHome, 5000);
        var home = document.getElementById("home");
        function resumeHome(){
            home.style.animationPlayState = "resume";
        }
        function pauseHome(){
            home.style.animationPlayState = "paused";
            
        }
        //캐릭터 이동 후 발생하는 이벤트
        (function event(){
            if(calcPos < 1){
                resumeHome();
                myTimeout;
                return console.log("0칸");

            }else if( calcPos < 2){ 
                resumeHome();
                myTimeout;
                return console.log("1칸");

            }else if( calcPos < 3){
                resumeHome();
                myTimeout;
                return console.log("2칸"); 

            }else if( calcPos < 4){
                resumeHome();
                myTimeout;
                return console.log("3칸"); 
            }else if( calcPos < 5){
                resumeHome();
                myTimeout;
                return console.log("4칸"); 
            }else if( calcPos < 6){
                resumeHome();
                myTimeout;
                return console.log("5칸"); 
            }else if( calcPos < 7){
                resumeHome();
                myTimeout;
                return console.log("6칸"); 
            }else if( calcPos < 8){
                return console.log("7칸"); 
            }else if( calcPos < 9){
                return console.log("8칸"); 
            }else if( calcPos < 10){
                return console.log("9칸"); 
            }else if( calcPos < 11){
                return console.log("10칸"); 
            }else if( calcPos < 12){
                return console.log("11칸"); 
            }else if( calcPos < 13){
                return console.log("12칸"); 
            }else if( calcPos < 14){
                return console.log("13칸"); 
            }else if( calcPos < 15){
                return console.log("14칸"); 
            }else if( calcPos < 16){
                return console.log("15칸"); 
            }else if( calcPos < 17){
                return console.log("16칸"); 
            }else if( calcPos < 18){
                return console.log("17칸"); 
            }else if( calcPos < 19){
                return console.log("18칸"); 
            }else if( calcPos < 20){
                return console.log("19칸"); 
            }else if( calcPos < 21){
                return console.log("20칸"); 
            }else if( calcPos < 22){
                return console.log("21칸"); 
            }else if( calcPos < 23){
                return console.log("22칸"); 
            }else if( calcPos < 24){
                return console.log("23칸"); 
            }else if( calcPos < 25){
                return console.log("24칸"); 
            }else{
                return console.log("25칸"); 
            }
        })();
    });

})();





