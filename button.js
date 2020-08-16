    window.onload = function() {
    
    a()
    
    }
    
    var m1 = 0;
    var m2 = 0;
    var m3 = 0;
    var tps1 = 7000000;
    var tps2 = 4000000;
    var tps3 = 3000000;
    var tps4 = 3600000;
    var tps5 = 3000000;
    var tps6 = 1800000;
    var ren1 = 6000000;
    var ren2 = 4000000;
    var ren3 = 3000000;
    var ren4 = 3600000;
    var ren5 = 3000000;
    var ren6 = 1800000;
    
    
    // 제품 스팩 검색 링크
    
    function makeLink(){
    var temp = document.getElementById ("link").value;
    // document.write('<a href="http://m.빌리고.com/model/search.php?ss_tx='+temp+'"> 링크 </a>')
    document.getElementById('click').innerHTML = '<a href="http://m.빌리고.com/model/search.php?ss_tx='+temp+'" target="_blank"    > '+temp+'링크 <클릭> </a>'
    }
    
    // https://www.hello-rental.net/goods/goods_search.php?keyword=K579TS35E&recentCount=10
    
    
    function a(m,l)
    
    {
        var month = m;
        var line = l
    
        var a1 = document.getElementById ("input1").value;
        var a2 = document.getElementById ("input2").value;
        var a3 = document.getElementById ("input3").value;
    
        a1 = a1.replace(/[^\d]+/g, "");
        a2 = a2.replace(/[^\d]+/g, "");
        a3 = a3.replace(/[^\d]+/g, "");
    
        if (line == 1) { m1= a1 * month
        
        document.getElementById ("output1").value = m1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } 
        else if (line == 2){ m2= a2 * month
            document.getElementById ("output2").value = m2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } 
        else if (line == 3){ m3= a3 * month
            document.getElementById ("output3").value = m3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } 
    
        var mm1 = document.getElementById ("output1").value;
        var mm2 = document.getElementById ("output2").value;
        var mm3 = document.getElementById ("output3").value;
    
        var now = document.getElementById ("now").value;
        now = now.replace(/[^\d]+/g, "");
        mm1 = mm1.replace(/[^\d]+/g, "");
        mm2 = mm2.replace(/[^\d]+/g, "");
        mm3 = mm3.replace(/[^\d]+/g, "");
        var tot = +mm1 + +mm2 + +mm3 + +now;
        var subtot = +a1+ +a2+ +a3
        document.getElementById ("subtot").value = subtot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        document.getElementById ("tot").value = tot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    
        // 그린등급 품의 가능여부 표시
    
        if (tot > 5400000) {
            document.getElementById ("air").value = "품의 불가능"
            document.getElementById ("air").style.color = 'red';
            var air1 = (tot - 5400000)/36;
            air1 = Math.ceil(air1) 
            document.getElementById ("airover").style.color = 'red';
            document.getElementById ("airover").value = "월 "+air1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원 초과"
            }
    
        else 
            {document.getElementById ("air").value = "품의 가능";
            document.getElementById ("air").style.color = 'blue';
            var air1 = (5400000-tot)/36;
            air1 = Math.ceil(air1) 
            document.getElementById ("airover").style.color = 'blue';
            document.getElementById ("airover").value = "월 "+air1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원 더 가능"
            }	 
    
    
        // 블루에 자동이체  1 , 5
    
    
        // 품의 가능 불가능 구분 수식
    
         var stps5 = tps1 -  tot;  
          stps05 = (tot/tps1)*100     //앞에 0을 붙여 몇 %가 초과 되었는지 알수 있는 변수로 만들어줌
          stps05 = Math.ceil(stps05)   // 나눈 값의 소수점 아래 삭제
    
    // 조건식 120% 넘으면 품의 불가능으로 그외 값이 초과는 되지만 120% 미만값은 0이 붙은 변수값에 %를 붙여 값 표시함. 그외는 렌탈 가능으로 표시
    
        if (stps05 > 120) {
            document.getElementById ("stps5").value = stps05+"% 품의 불가능" ; 
        }
          else {
    
         if (stps5 < 0 ) {       
            document.getElementById ("stps5").value = stps05+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps5").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps1 = stps5 / 36
        
        stps1 = Math.ceil(stps1)
        document.getElementById ("stps1").value = stps1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        // 0이 붙은 초과 금액이 120%가 초과되면 빨간색으로 표시 
        if (stps1 < 0) {
    
            if (stps05 > 120) {
                document.querySelector('#stps1').style.color = 'red';
                document.querySelector('#stps5').style.color = 'red';
            }
            
            else if (stps05 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps5').style.color = 'black';
             document.querySelector('#stps1').style.color = 'red';
                }
            }
            else {(stps1 >= 0) 
            document.querySelector('#stps1').style.color = 'blue';
            document.querySelector('#stps5').style.color = 'blue';
            }
        
    
    
    // 블루에 자동이체  2 , 6
    
    
        // 품의 가능 불가능 구분 수식
    
         var stps6 = tps4 -  tot;  
          stps06 = (tot/tps4)*100
          stps06 = Math.ceil(stps06)
    
        if (stps06 > 120) {
            document.getElementById ("stps6").value = stps06+"% 품의 불가능" ; 
        }
          else {
    
         if (stps6 < 0 ) {       
            document.getElementById ("stps6").value = stps06+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps6").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps2 = stps6 / 36
        
        stps2 = Math.ceil(stps2)
        document.getElementById ("stps2").value = stps2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps2 < 0) {
    
            if (stps06 > 120) {
                document.querySelector('#stps2').style.color = 'red';
                document.querySelector('#stps6').style.color = 'red';
            }
            
            else if (stps06 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps6').style.color = 'black';
             document.querySelector('#stps2').style.color = 'red';
                }
            }
            else {(stps2 >= 0) 
            document.querySelector('#stps2').style.color = 'blue';
            document.querySelector('#stps6').style.color = 'blue';
            }
    
    
    
    
    
    
    
    
    
    
    // 블루에 렌탈단독 신용카드  3 , 7
    
        // 품의 가능 불가능 구분 수식
    
        var stps7 = ren1 -  tot;  
          stps07 = (tot/ren1)*100
          stps07 = Math.ceil(stps07)
    
        if (stps07 > 120) {
            document.getElementById ("stps7").value = stps07+"% 품의 불가능" ; 
        }
          else {
    
         if (stps7 < 0 ) {       
            document.getElementById ("stps7").value = stps07+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps7").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps3 = stps7 / 36
        
        stps3 = Math.ceil(stps3)
        document.getElementById ("stps3").value = stps3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps3 < 0) {
    
            if (stps07 > 120) {
                document.querySelector('#stps3').style.color = 'red';
                document.querySelector('#stps7').style.color = 'red';
            }
            
            else if (stps07 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps7').style.color = 'black';
             document.querySelector('#stps3').style.color = 'red';
                }
            }
            else {(stps3 >= 0) 
            document.querySelector('#stps3').style.color = 'blue';
            document.querySelector('#stps7').style.color = 'blue';
            }
    
    
    
    
    
    
    
    // 블루에 렌탈단독 자동이체  4 , 8
    
        // 품의 가능 불가능 구분 수식
    
        var stps8 = ren4 -  tot;  
          stps08 = (tot/ren4)*100
          stps08 = Math.ceil(stps08)
    
        if (stps08 > 120) {
            document.getElementById ("stps8").value = stps08+"% 품의 불가능" ; 
        }
          else {
    
         if (stps8 < 0 ) {       
            document.getElementById ("stps8").value = stps08+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps8").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps4 = stps8 / 36
        
        stps4 = Math.ceil(stps4)
        document.getElementById ("stps4").value = stps4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps4 < 0) {
    
            if (stps08 > 120) {
                document.querySelector('#stps4').style.color = 'red';
                document.querySelector('#stps8').style.color = 'red';
            }
            
            else if (stps08 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps8').style.color = 'black';
             document.querySelector('#stps4').style.color = 'red';
                }
            }
            else {(stps4 >= 0) 
            document.querySelector('#stps4').style.color = 'blue';
            document.querySelector('#stps8').style.color = 'blue';
            }
    
    
    
    
    // 그린 신용카드  9 , 13
    
        // 품의 가능 불가능 구분 수식
    
        var stps13 = tps2 -  tot;  
          stps013 = (tot/tps2)*100
          stps013 = Math.ceil(stps013)
    
        if (stps013 > 120) {
            document.getElementById ("stps13").value = stps013+"% 품의 불가능" ; 
        }
          else {
    
         if (stps13 < 0 ) {       
            document.getElementById ("stps13").value = stps013+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps13").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps9 = stps13 / 36
        
        stps9 = Math.ceil(stps9)
        document.getElementById ("stps9").value = stps9.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps9 < 0) {
    
            if (stps013 > 120) {
                document.querySelector('#stps9').style.color = 'red';
                document.querySelector('#stps13').style.color = 'red';
            }
            
            else if (stps013 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps9').style.color = 'red';
             document.querySelector('#stps13').style.color = 'black';
        
                }
            }
            else {(stps9 >= 0) 
            document.querySelector('#stps9').style.color = 'blue';
            document.querySelector('#stps13').style.color = 'blue';
            }
    
    
    
    
    
    
    
    
    
    
    
    
    // 그린 자동이체  10 , 14
    
        // 품의 가능 불가능 구분 수식
    
        var stps14 = tps5 -  tot;  
          stps014 = (tot/tps5)*100
          stps014 = Math.ceil(stps014)
    
        if (stps014 > 120) {
            document.getElementById ("stps14").value = stps014+"% 품의 불가능" ; 
        }
          else {
    
         if (stps14 < 0 ) {       
            document.getElementById ("stps14").value = stps014+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps14").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps10 = stps14 / 36
        
        stps10 = Math.ceil(stps10)
        document.getElementById ("stps10").value = stps10.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps10 < 0) {
    
            if (stps014 > 120) {
                document.querySelector('#stps10').style.color = 'red';
                document.querySelector('#stps14').style.color = 'red';
            }
            
            else if (stps014 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps10').style.color = 'red';
             document.querySelector('#stps14').style.color = 'black';
        
                }
            }
            else {(stps10 >= 0) 
            document.querySelector('#stps10').style.color = 'blue';
            document.querySelector('#stps14').style.color = 'blue';
            }
    
    
    
    
    
    // 그린 자동이체  11 , 15
    
    // 품의 가능 불가능 구분 수식
        var stps15 = ren2 -  tot;  
          stps015 = (tot/ren2)*100
          stps015 = Math.ceil(stps015)
    
        if (stps015 > 120) {
            document.getElementById ("stps15").value = stps015+"% 품의 불가능" ; 
        }
          else {
    
         if (stps15 < 0 ) {       
            document.getElementById ("stps15").value = stps015+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps15").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps11 = stps15 / 36
        
        stps11 = Math.ceil(stps11)
        document.getElementById ("stps11").value = stps11.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps11 < 0) {
    
            if (stps015 > 120) {
                document.querySelector('#stps11').style.color = 'red';
                document.querySelector('#stps15').style.color = 'red';
            }
            
            else if (stps015 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps11').style.color = 'red';
             document.querySelector('#stps15').style.color = 'black';
        
                }
            }
            else {(stps11 >= 0) 
            document.querySelector('#stps11').style.color = 'blue';
            document.querySelector('#stps15').style.color = 'blue';
            }
    
    
    
    
    
    
    
    // 그린 자동이체  12 , 16
    
    // 품의 가능 불가능 구분 수식
    var stps16 = ren5 -  tot;  
          stps016 = (tot/ren5)*100
          stps016 = Math.ceil(stps016)
    
        if (stps016 > 120) {
            document.getElementById ("stps16").value = stps016+"% 품의 불가능" ; 
        }
          else {
    
         if (stps16 < 0 ) {       
            document.getElementById ("stps16").value = stps016+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps16").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps12 = stps16 / 36
        
        stps12 = Math.ceil(stps12)
        document.getElementById ("stps12").value = stps12.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps12 < 0) {
    
            if (stps016 > 120) {
                document.querySelector('#stps12').style.color = 'red';
                document.querySelector('#stps16').style.color = 'red';
            }
            
            else if (stps016 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps12').style.color = 'red';
             document.querySelector('#stps16').style.color = 'black';
        
                }
            }
            else {(stps12 >= 0) 
            document.querySelector('#stps12').style.color = 'blue';
            document.querySelector('#stps16').style.color = 'blue';
            }
    
    
    
    
    
    
    // 엘로우 신용카드  17 , 21
            
    // 품의 가능 불가능 구분 수식
    var stps21 = tps3 -  tot;  
          stps021 = (tot/tps3)*100
          stps021 = Math.ceil(stps021)
    
        if (stps021 > 120) {
            document.getElementById ("stps21").value = stps021+"% 품의 불가능" ; 
        }
          else {
    
         if (stps21 < 0 ) {       
            document.getElementById ("stps21").value = stps021+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps21").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps17 = stps21 / 36
        
        stps17 = Math.ceil(stps17)
        document.getElementById ("stps17").value = stps17.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps17 < 0) {
    
            if (stps021 > 120) {
                document.querySelector('#stps17').style.color = 'red';
                document.querySelector('#stps21').style.color = 'red';
            }
            
            else if (stps021 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps17').style.color = 'red';
             document.querySelector('#stps21').style.color = 'black';
        
                }
            }
            else {(stps17 >= 0) 
            document.querySelector('#stps17').style.color = 'blue';
            document.querySelector('#stps21').style.color = 'blue';
            }
    
    
    
    
    
    
    // 엘로우 자동이체  18 , 22
    
    // 품의 가능 불가능 구분 수식
    var stps22 = tps6 -  tot;  
          stps022 = (tot/tps6)*100
          stps022 = Math.ceil(stps022)
    
        if (stps022 > 120) {
            document.getElementById ("stps22").value = stps022+"% 품의 불가능" ; 
        }
          else {
    
         if (stps22 < 0 ) {       
            document.getElementById ("stps22").value = stps022+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps22").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps18 = stps22 / 36
        
        stps18 = Math.ceil(stps18)
        document.getElementById ("stps18").value = stps18.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps18 < 0) {
    
            if (stps022 > 120) {
                document.querySelector('#stps18').style.color = 'red';
                document.querySelector('#stps22').style.color = 'red';
            }
            
            else if (stps022 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps18').style.color = 'red';
             document.querySelector('#stps22').style.color = 'black';
        
                }
            }
            else {(stps18 >= 0) 
            document.querySelector('#stps18').style.color = 'blue';
            document.querySelector('#stps22').style.color = 'blue';
            }
    
    
    
    
    // 엘로우 렌탈단독 신용카드  19 , 23
    
            // 품의 가능 불가능 구분 수식
    var stps23 = ren3 -  tot;  
          stps023 = (tot/ren3)*100
          stps023 = Math.ceil(stps023)
    
        if (stps023 > 120) {
            document.getElementById ("stps23").value = stps023+"% 품의 불가능" ; 
        }
          else {
    
         if (stps23 < 0 ) {       
            document.getElementById ("stps23").value = stps023+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps23").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps19 = stps23 / 36
        
        stps19 = Math.ceil(stps19)
        document.getElementById ("stps19").value = stps19.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps19 < 0) {
    
            if (stps023 > 120) {
                document.querySelector('#stps19').style.color = 'red';
                document.querySelector('#stps23').style.color = 'red';
            }
            
            else if (stps023 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps19').style.color = 'red';
             document.querySelector('#stps23').style.color = 'black';
        
                }
            }
            else {(stps19 >= 0) 
            document.querySelector('#stps19').style.color = 'blue';
            document.querySelector('#stps23').style.color = 'blue';
            }
    
    
    
    
    
    
    
    
    // 엘로우 렌탈단독 자동이체  20 , 24
    
    // 품의 가능 불가능 구분 수식
    var stps24 = ren6 -  tot;  
          stps024 = (tot/ren6)*100
          stps024 = Math.ceil(stps024)
    
        if (stps024 > 120) {
            document.getElementById ("stps24").value = stps024+"% 품의 불가능" ; 
        }
          else {
    
         if (stps24 < 0 ) {       
            document.getElementById ("stps24").value = stps024+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps24").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps20 = stps24 / 36
        
        stps20 = Math.ceil(stps20)
        document.getElementById ("stps20").value = stps20.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps20 < 0) {
    
            if (stps024 > 120) {
                document.querySelector('#stps20').style.color = 'red';
                document.querySelector('#stps24').style.color = 'red';
            }
            
            else if (stps024 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps20').style.color = 'red';
             document.querySelector('#stps24').style.color = 'black';
        
                }
            }
            else {(stps24 >= 0) 
            document.querySelector('#stps20').style.color = 'blue';
            document.querySelector('#stps24').style.color = 'blue';
            }
    
    
    }
    
    
    
    function enterkey1(m) {
            if (window.event.keyCode == 13){
            
        var line = m;
    
    
        var a1 = document.getElementById ("input1").value;
        var a2 = document.getElementById ("input2").value;
        var a3 = document.getElementById ("input3").value;
    
    
        a1 = a1.replace(/[^\d]+/g, "");
        a2 = a2.replace(/[^\d]+/g, "");
        a3 = a3.replace(/[^\d]+/g, "");
    
    
        if (line == 1) { m1= a1 * 36
        
        document.getElementById ("output1").value = m1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } 
        else if (line == 2){ m2= a2 * 36
            document.getElementById ("output2").value = m2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } 
        else if (line == 3){ m3= a3 * 36
            document.getElementById ("output3").value = m3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } 
    
    
    
    
    
    
        var mm1 = document.getElementById ("output1").value;
        var mm2 = document.getElementById ("output2").value;
        var mm3 = document.getElementById ("output3").value;
    
        var now = document.getElementById ("now").value;
        now = now.replace(/[^\d]+/g, "");
        mm1 = mm1.replace(/[^\d]+/g, "");
        mm2 = mm2.replace(/[^\d]+/g, "");
        mm3 = mm3.replace(/[^\d]+/g, "");
        var tot = +mm1 + +mm2 + +mm3 + +now;
        var subtot = +a1+ +a2+ +a3
        document.getElementById ("subtot").value = subtot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        document.getElementById ("tot").value = tot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    
    
        // 그린등급 품의 가능여부 표시
    
        if (tot > 5400000) {
            document.getElementById ("air").value = "품의 불가능"
            document.getElementById ("air").style.color = 'red';
            var air1 = (tot - 5400000)/36;
            air1 = Math.ceil(air1) 
            document.getElementById ("airover").style.color = 'red';
            document.getElementById ("airover").value = "월 "+air1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원 초과"
            }
    
        else 
            {document.getElementById ("air").value = "품의 가능";
            document.getElementById ("air").style.color = 'blue';
            var air1 = (5400000-tot)/36;
            air1 = Math.ceil(air1) 
            document.getElementById ("airover").style.color = 'blue';
            document.getElementById ("airover").value = "월 "+air1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원 더 가능"
            }	
    
    
    
    
    
    // 블루에 자동이체  1 , 5
    
        // 품의 가능 불가능 구분 수식
    
        var stps5 = tps1 -  tot;  
          stps05 = (tot/tps1)*100     //앞에 0을 붙여 몇 %가 초과 되었는지 알수 있는 변수로 만들어줌
          stps05 = Math.ceil(stps05)   // 나눈 값의 소수점 아래 삭제
    
    // 조건식 120% 넘으면 품의 불가능으로 그외 값이 초과는 되지만 120% 미만값은 0이 붙은 변수값에 %를 붙여 값 표시함. 그외는 렌탈 가능으로 표시
    
        if (stps05 > 120) {
            document.getElementById ("stps5").value = stps05+"% 품의 불가능" ; 
        }
          else {
    
         if (stps5 < 0 ) {       
            document.getElementById ("stps5").value = stps05+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps5").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps1 = stps5 / 36
        
        stps1 = Math.ceil(stps1)
        document.getElementById ("stps1").value = stps1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        // 0이 붙은 초과 금액이 120%가 초과되면 빨간색으로 표시 
        if (stps1 < 0) {
    
            if (stps05 > 120) {
                document.querySelector('#stps1').style.color = 'red';
                document.querySelector('#stps5').style.color = 'red';
            }
            
            else if (stps05 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps5').style.color = 'black';
             document.querySelector('#stps1').style.color = 'red';
                }
            }
            else {(stps1 >= 0) 
            document.querySelector('#stps1').style.color = 'blue';
            document.querySelector('#stps5').style.color = 'blue';
            }
        
    
    // 블루에 자동이체  2 , 6
        // 품의 가능 불가능 구분 수식
    
         var stps6 = tps4 -  tot;  
          stps06 = (tot/tps4)*100
          stps06 = Math.ceil(stps06)
    
        if (stps06 > 120) {
            document.getElementById ("stps6").value = stps06+"% 품의 불가능" ; 
        }
          else {
    
         if (stps6 < 0 ) {       
            document.getElementById ("stps6").value = stps06+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps6").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps2 = stps6 / 36
        
        stps2 = Math.ceil(stps2)
        document.getElementById ("stps2").value = stps2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps2 < 0) {
    
            if (stps06 > 120) {
                document.querySelector('#stps2').style.color = 'red';
                document.querySelector('#stps6').style.color = 'red';
            }
            
            else if (stps06 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps6').style.color = 'black';
             document.querySelector('#stps2').style.color = 'red';
                }
            }
            else {(stps2 >= 0) 
            document.querySelector('#stps2').style.color = 'blue';
            document.querySelector('#stps6').style.color = 'blue';
            }
    
    
    // 블루에 렌탈단독 신용카드  3 , 7
    
        // 품의 가능 불가능 구분 수식
        var stps7 = ren1 -  tot;  
          stps07 = (tot/ren1)*100
          stps07 = Math.ceil(stps07)
    
        if (stps07 > 120) {
            document.getElementById ("stps7").value = stps07+"% 품의 불가능" ; 
        }
          else {
    
         if (stps7 < 0 ) {       
            document.getElementById ("stps7").value = stps07+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps7").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps3 = stps7 / 36
        
        stps3 = Math.ceil(stps3)
        document.getElementById ("stps3").value = stps3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps3 < 0) {
    
            if (stps07 > 120) {
                document.querySelector('#stps3').style.color = 'red';
                document.querySelector('#stps7').style.color = 'red';
            }
            
            else if (stps07 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps7').style.color = 'black';
             document.querySelector('#stps3').style.color = 'red';
                }
            }
            else {(stps3 >= 0) 
            document.querySelector('#stps3').style.color = 'blue';
            document.querySelector('#stps7').style.color = 'blue';
            }
    
    
    // 블루에 렌탈단독 자동이체  4 , 8
    
        // 품의 가능 불가능 구분 수식
    
        var stps8 = ren4 -  tot;  
          stps08 = (tot/ren4)*100
          stps08 = Math.ceil(stps08)
    
        if (stps08 > 120) {
            document.getElementById ("stps8").value = stps08+"% 품의 불가능" ; 
        }
          else {
    
         if (stps8 < 0 ) {       
            document.getElementById ("stps8").value = stps08+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps8").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps4 = stps8 / 36
        
        stps4 = Math.ceil(stps4)
        document.getElementById ("stps4").value = stps4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps4 < 0) {
    
            if (stps08 > 120) {
                document.querySelector('#stps4').style.color = 'red';
                document.querySelector('#stps8').style.color = 'red';
            }
            
            else if (stps08 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps8').style.color = 'black';
             document.querySelector('#stps4').style.color = 'red';
                }
            }
            else {(stps4 >= 0) 
            document.querySelector('#stps4').style.color = 'blue';
            document.querySelector('#stps8').style.color = 'blue';
            }
    
    
    // 그린 신용카드  9 , 13
    
        // 품의 가능 불가능 구분 수식
    
        var stps13 = tps2 -  tot;  
          stps013 = (tot/tps2)*100
          stps013 = Math.ceil(stps013)
    
        if (stps013 > 120) {
            document.getElementById ("stps13").value = stps013+"% 품의 불가능" ; 
        }
          else {
    
         if (stps13 < 0 ) {       
            document.getElementById ("stps13").value = stps013+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps13").value = "렌탈 가능";
         }
        }
    
        // 가능한 금액 수식
        var stps9 = stps13 / 36
        
        stps9 = Math.ceil(stps9)
        document.getElementById ("stps9").value = stps9.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps9 < 0) {
    
            if (stps013 > 120) {
                document.querySelector('#stps9').style.color = 'red';
                document.querySelector('#stps13').style.color = 'red';
            }
            
            else if (stps013 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps9').style.color = 'red';
             document.querySelector('#stps13').style.color = 'black';
        
                }
            }
            else {(stps9 >= 0) 
            document.querySelector('#stps9').style.color = 'blue';
            document.querySelector('#stps13').style.color = 'blue';
            }
    
    
    // 그린 자동이체  10 , 14
    
        // 품의 가능 불가능 구분 수식
    
        var stps14 = tps5 -  tot;  
          stps014 = (tot/tps5)*100
          stps014 = Math.ceil(stps014)
    
        if (stps014 > 120) {
            document.getElementById ("stps14").value = stps014+"% 품의 불가능" ; 
        }
          else {
    
         if (stps14 < 0 ) {       
            document.getElementById ("stps14").value = stps014+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps14").value = "렌탈 가능";
         }
        }
    
        // 가능한 금액 수식
        var stps10 = stps14 / 36
        
        stps10 = Math.ceil(stps10)
        document.getElementById ("stps10").value = stps10.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps10 < 0) {
    
            if (stps014 > 120) {
                document.querySelector('#stps10').style.color = 'red';
                document.querySelector('#stps14').style.color = 'red';
            }
            
            else if (stps014 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps10').style.color = 'red';
             document.querySelector('#stps14').style.color = 'black';
        
                }
            }
            else {(stps10 >= 0) 
            document.querySelector('#stps10').style.color = 'blue';
            document.querySelector('#stps14').style.color = 'blue';
            }
    
    
    // 그린 자동이체  11 , 15
    
        // 품의 가능 불가능 구분 수식
        var stps15 = ren2 -  tot;  
          stps015 = (tot/ren2)*100
          stps015 = Math.ceil(stps015)
    
        if (stps015 > 120) {
            document.getElementById ("stps15").value = stps015+"% 품의 불가능" ; 
        }
          else {
    
         if (stps15 < 0 ) {       
            document.getElementById ("stps15").value = stps015+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps15").value = "렌탈 가능";
         }
        }
    
        // 가능한 금액 수식
        var stps11 = stps15 / 36
        
        stps11 = Math.ceil(stps11)
        document.getElementById ("stps11").value = stps11.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps11 < 0) {
    
            if (stps015 > 120) {
                document.querySelector('#stps11').style.color = 'red';
                document.querySelector('#stps15').style.color = 'red';
            }
            
            else if (stps015 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps11').style.color = 'red';
             document.querySelector('#stps15').style.color = 'black';
        
                }
            }
            else {(stps11 >= 0) 
            document.querySelector('#stps11').style.color = 'blue';
            document.querySelector('#stps15').style.color = 'blue';
            }
    
    
    // 그린 자동이체  12 , 16
    
        // 품의 가능 불가능 구분 수식
        var stps16 = ren5 -  tot;  
          stps016 = (tot/ren5)*100
          stps016 = Math.ceil(stps016)
    
        if (stps016 > 120) {
            document.getElementById ("stps16").value = stps016+"% 품의 불가능" ; 
        }
          else {
    
         if (stps16 < 0 ) {       
            document.getElementById ("stps16").value = stps016+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps16").value = "렌탈 가능";
         }
        }
    
        // 가능한 금액 수식
        var stps12 = stps16 / 36
        
        stps12 = Math.ceil(stps12)
        document.getElementById ("stps12").value = stps12.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps12 < 0) {
    
            if (stps016 > 120) {
                document.querySelector('#stps12').style.color = 'red';
                document.querySelector('#stps16').style.color = 'red';
            }
            
            else if (stps016 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps12').style.color = 'red';
             document.querySelector('#stps16').style.color = 'black';
        
                }
            }
            else {(stps12 >= 0) 
            document.querySelector('#stps12').style.color = 'blue';
            document.querySelector('#stps16').style.color = 'blue';
            }
    
    
    // 엘로우 신용카드  17 , 21
            
        // 품의 가능 불가능 구분 수식
        var stps21 = tps3 -  tot;  
          stps021 = (tot/tps3)*100
          stps021 = Math.ceil(stps021)
    
        if (stps021 > 120) {
            document.getElementById ("stps21").value = stps021+"% 품의 불가능" ; 
        }
          else {
    
         if (stps21 < 0 ) {       
            document.getElementById ("stps21").value = stps021+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps21").value = "렌탈 가능";
         }
        }
    
        // 가능한 금액 수식
        var stps17 = stps21 / 36
        
        stps17 = Math.ceil(stps17)
        document.getElementById ("stps17").value = stps17.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps17 < 0) {
    
            if (stps021 > 120) {
                document.querySelector('#stps17').style.color = 'red';
                document.querySelector('#stps21').style.color = 'red';
            }
            
            else if (stps021 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps17').style.color = 'red';
             document.querySelector('#stps21').style.color = 'black';
        
                }
            }
            else {(stps17 >= 0) 
            document.querySelector('#stps17').style.color = 'blue';
            document.querySelector('#stps21').style.color = 'blue';
            }
    
    
    
    // 엘로우 자동이체  18 , 22
    
        // 품의 가능 불가능 구분 수식
        var stps22 = tps6 -  tot;  
          stps022 = (tot/tps6)*100
          stps022 = Math.ceil(stps022)
    
        if (stps022 > 120) {
            document.getElementById ("stps22").value = stps022+"% 품의 불가능" ; 
        }
          else {
    
         if (stps22 < 0 ) {       
            document.getElementById ("stps22").value = stps022+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps22").value = "렌탈 가능";
         }
        }
    
        // 가능한 금액 수식
        var stps18 = stps22 / 36
        
        stps18 = Math.ceil(stps18)
        document.getElementById ("stps18").value = stps18.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps18 < 0) {
    
            if (stps022 > 120) {
                document.querySelector('#stps18').style.color = 'red';
                document.querySelector('#stps22').style.color = 'red';
            }
            
            else if (stps022 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps18').style.color = 'red';
             document.querySelector('#stps22').style.color = 'black';
        
                }
            }
            else {(stps18 >= 0) 
            document.querySelector('#stps18').style.color = 'blue';
            document.querySelector('#stps22').style.color = 'blue';
            }
    
    
    
    
    // 엘로우 렌탈단독 신용카드  19 , 23
    
        // 품의 가능 불가능 구분 수식
        var stps23 = ren3 -  tot;  
          stps023 = (tot/ren3)*100
          stps023 = Math.ceil(stps023)
    
        if (stps023 > 120) {
            document.getElementById ("stps23").value = stps023+"% 품의 불가능" ; 
        }
          else {
    
         if (stps23 < 0 ) {       
            document.getElementById ("stps23").value = stps023+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps23").value = "렌탈 가능";
         }
        }
    
        // 가능한 금액 수식
        var stps19 = stps23 / 36
        
        stps19 = Math.ceil(stps19)
        document.getElementById ("stps19").value = stps19.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps19 < 0) {
    
            if (stps023 > 120) {
                document.querySelector('#stps19').style.color = 'red';
                document.querySelector('#stps23').style.color = 'red';
            }
            
            else if (stps023 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps19').style.color = 'red';
             document.querySelector('#stps23').style.color = 'black';
        
                }
            }
            else {(stps19 >= 0) 
            document.querySelector('#stps19').style.color = 'blue';
            document.querySelector('#stps23').style.color = 'blue';
            }
    
    
    
    
    // 엘로우 렌탈단독 자동이체  20 , 24
    
        // 품의 가능 불가능 구분 수식
        var stps24 = ren6 -  tot;  
          stps024 = (tot/ren6)*100
          stps024 = Math.ceil(stps024)
    
        if (stps024 > 120) {
            document.getElementById ("stps24").value = stps024+"% 품의 불가능" ; 
        }
          else {
    
         if (stps24 < 0 ) {       
            document.getElementById ("stps24").value = stps024+"% 품의 가능" ; 
         } else  {
            document.getElementById ("stps24").value = "렌탈 가능";
         }
        }
    
    // 가능한 금액 수식
        var stps20 = stps24 / 36
        
        stps20 = Math.ceil(stps20)
        document.getElementById ("stps20").value = stps20.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        // 금액별 색 스타일 수식
        
        if (stps20 < 0) {
    
            if (stps024 > 120) {
                document.querySelector('#stps20').style.color = 'red';
                document.querySelector('#stps24').style.color = 'red';
            }
            
            else if (stps024 > 100) {
             // document.querySelector('#stps5').style.backgroundColor = 'pink';  품의 가능일 경우 백그라운드 핑크 하려다 실패
             document.querySelector('#stps20').style.color = 'red';
             document.querySelector('#stps24').style.color = 'black';
        
                }
            }
            else {(stps24 >= 0) 
            document.querySelector('#stps20').style.color = 'blue';
            document.querySelector('#stps24').style.color = 'blue';
            }
    
    
    
    
            }
    
    }
    
    
    
    
    
    function reset() {
    
        document.getElementById ("input1").value = ""
        document.getElementById ("input2").value = ""
        document.getElementById ("input3").value = ""
        document.getElementById ("output1").value = ""
        document.getElementById ("output2").value = ""
        document.getElementById ("output3").value = ""
        document.getElementById ("tot").value = ""
        document.getElementById ("now").value = ""
        document.getElementById ("air").value = ""
        document.getElementById ("airover").value = ""
      
    
    }
    
    // 표 아래쪽 한도를 볼수 있는 함수
    
    function aa1(m) {
    
        var month = m;
    
                var a1 = document.getElementById ("input1").value;
                var a2 = document.getElementById ("input2").value;
                var a3 = document.getElementById ("input3").value;
    
    
                a1 = a1.replace(/[^\d]+/g, "");
                a2 = a2.replace(/[^\d]+/g, "");
                a3 = a3.replace(/[^\d]+/g, "");
    
                var m1 = a1 * month
                document.getElementById ("output1").value = m1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
                var mm1 = document.getElementById ("output1").value;
                var mm2 = document.getElementById ("output2").value;
                var mm3 = document.getElementById ("output3").value;
    
                var now = document.getElementById ("now").value;
                now = now.replace(/[^\d]+/g, "");
                mm1 = mm1.replace(/[^\d]+/g, "");
                mm2 = mm2.replace(/[^\d]+/g, "");
                mm3 = mm3.replace(/[^\d]+/g, "");
                var tot = +mm1 + +mm2 + +mm3 + +now;
                var subtot = +a1+ +a2+ +a3
                document.getElementById ("subtot").value = subtot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
                document.getElementById ("tot").value = tot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    
            // 그린등급 품의 가능여부 표시
    
            if (tot > 5400000) {
            document.getElementById ("air").value = "품의 불가능"
            document.getElementById ("air").style.color = 'red';
            var air1 = (tot - 5400000)/36;
            air1 = Math.ceil(air1) 
            document.getElementById ("airover").style.color = 'red';
            document.getElementById ("airover").value = "월 "+air1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원 초과"
            }
    
        else 
            {document.getElementById ("air").value = "품의 가능";
            document.getElementById ("air").style.color = 'blue';
            var air1 = (5400000-tot)/36;
            air1 = Math.ceil(air1) 
            document.getElementById ("airover").style.color = 'blue';
            document.getElementById ("airover").value = "월 "+air1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원 더 가능"
            }	
    
    
    
    // 입력값에도 콤마를 넣는 수식
        // document.getElementById ("input1").value= a1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
       //	document.getElementById ("output1").value = mm1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    
    
    // 블루에 신용카드  1 , 5
         var stps5 = tps1 -  tot
        document.getElementById ("stps5").value = stps5.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps1 = stps5 / 36
        stps1 = Math.ceil(stps1)
        document.getElementById ("stps1").value = stps1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        if (stps1 < 0) {
            document.querySelector('#stps1').style.color = 'red';
            document.querySelector('#stps5').style.color = 'red';
            } else if (stps1 >= 0) {
            document.querySelector('#stps1').style.color = 'blue';
            document.querySelector('#stps5').style.color = 'blue';
            }
            ;
    
    // 블루에 자동이체  2 , 6
    var stps6 = tps4 -  tot
        document.getElementById ("stps6").value = stps6.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps2 = stps6 / 36
        stps2 = Math.ceil(stps2)
        document.getElementById ("stps2").value = stps2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        if (stps2 < 0) {
            document.querySelector('#stps2').style.color = 'red';
            document.querySelector('#stps6').style.color = 'red';
            } else if (stps2 >= 0) {
            document.querySelector('#stps2').style.color = 'blue';
            document.querySelector('#stps6').style.color = 'blue';
            }
            ;
    
    
    // 블루에 렌탈단독 신용카드  3 , 7
    var stps7 = ren1 -  tot
        document.getElementById ("stps7").value = stps7.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps3 = stps7 / 36
        stps3 = Math.ceil(stps3)
        document.getElementById ("stps3").value = stps3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        if (stps3 < 0) {
            document.querySelector('#stps3').style.color = 'red';
            document.querySelector('#stps7').style.color = 'red';
            } else if (stps3 >= 0) {
            document.querySelector('#stps3').style.color = 'blue';
            document.querySelector('#stps7').style.color = 'blue';
            }
            ;
    
    
    // 블루에 렌탈단독 자동이체  4 , 8
    var stps8 = ren4 -  tot
        document.getElementById ("stps8").value = stps8.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps4 = stps8 / 36
        stps4 = Math.ceil(stps4)
        document.getElementById ("stps4").value = stps4.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        
        if (stps4 < 0) {
            document.querySelector('#stps4').style.color = 'red';
            document.querySelector('#stps8').style.color = 'red';
            } else if (stps4 >= 0) {
            document.querySelector('#stps4').style.color = 'blue';
            document.querySelector('#stps8').style.color = 'blue';
            }
            ;
    
    
    
    // 그린 신용카드  9 , 13
    var stps13 = tps2 -  tot
        document.getElementById ("stps13").value = stps13.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps9 = stps13 / 36
        stps9 = Math.ceil(stps9)
        document.getElementById ("stps9").value = stps9.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        if (stps9 < 0) {
            document.querySelector('#stps9').style.color = 'red';
            document.querySelector('#stps13').style.color = 'red';
            } else if (stps9 >= 0) {
            document.querySelector('#stps9').style.color = 'blue';
            document.querySelector('#stps13').style.color = 'blue';
            }
            ;
    
    
    
    // 그린 자동이체  10 , 14
    var stps14 = tps5 -  tot
        document.getElementById ("stps14").value = stps14.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps10 = stps14 / 36
        stps10 = Math.ceil(stps10)
        document.getElementById ("stps10").value = stps10.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        if (stps10 < 0) {
            document.querySelector('#stps10').style.color = 'red';
            document.querySelector('#stps14').style.color = 'red';
            } else if (stps10 >= 0) {
            document.querySelector('#stps10').style.color = 'blue';
            document.querySelector('#stps14').style.color = 'blue';
            }
            ;
    
    
    
    // 그린 자동이체  11 , 15
    var stps15 = ren2 -  tot
        document.getElementById ("stps15").value = stps15.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps11 = stps15 / 36
        stps11 = Math.ceil(stps11)
        document.getElementById ("stps11").value = stps11.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        if (stps11 < 0) {
            document.querySelector('#stps11').style.color = 'red';
            document.querySelector('#stps15').style.color = 'red';
            } else if (stps11 >= 0) {
            document.querySelector('#stps11').style.color = 'blue';
            document.querySelector('#stps15').style.color = 'blue';
            }
            ;
    
    
    // 그린 자동이체  12 , 16
    var stps16 = ren5 -  tot
        document.getElementById ("stps16").value = stps16.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps12 = stps16 / 36
        stps12 = Math.ceil(stps12)
        document.getElementById ("stps12").value = stps12.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        if (stps12 < 0) {
            document.querySelector('#stps12').style.color = 'red';
            document.querySelector('#stps16').style.color = 'red';
            } else if (stps12 >= 0) {
            document.querySelector('#stps12').style.color = 'blue';
            document.querySelector('#stps16').style.color = 'blue';
            }
            ;
    
    
    
    // 엘로우 신용카드  17 , 21
    var stps21 = tps3 -  tot
        document.getElementById ("stps21").value = stps21.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps17 = stps21 / 36
        stps17 = Math.ceil(stps17)
        document.getElementById ("stps17").value = stps17.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        if (stps17 < 0) {
            document.querySelector('#stps17').style.color = 'red';
            document.querySelector('#stps21').style.color = 'red';
            } else if (stps17 >= 0) {
            document.querySelector('#stps17').style.color = 'blue';
            document.querySelector('#stps21').style.color = 'blue';
            }
            ;
    
    // 엘로우 자동이체  18 , 22
    var stps22 = tps6 -  tot
        document.getElementById ("stps22").value = stps22.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps18 = stps22 / 36
        stps18 = Math.ceil(stps18)
        document.getElementById ("stps18").value = stps18.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        if (stps18 < 0) {
            document.querySelector('#stps18').style.color = 'red';
            document.querySelector('#stps22').style.color = 'red';
            } else if (stps18 >= 0) {
            document.querySelector('#stps18').style.color = 'blue';
            document.querySelector('#stps22').style.color = 'blue';
            }
            ;
    
    // 엘로우 렌탈단독 신용카드  19 , 23
    var stps23 = ren3 -  tot
        document.getElementById ("stps23").value = stps23.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps19 = stps23 / 36
        stps19 = Math.ceil(stps19)
        document.getElementById ("stps19").value = stps19.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        if (stps19 < 0) {
            document.querySelector('#stps19').style.color = 'red';
            document.querySelector('#stps23').style.color = 'red';
            } else if (stps19 >= 0) {
            document.querySelector('#stps19').style.color = 'blue';
            document.querySelector('#stps23').style.color = 'blue';
            }
            ;
    
    // 엘로우 렌탈단독 자동이체  20 , 24
    var stps24 = ren6 -  tot
        document.getElementById ("stps24").value = stps24.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        var stps20 = stps24 / 36
        stps20 = Math.ceil(stps20)
        document.getElementById ("stps20").value = stps20.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    
        if (stps20 < 0) {
            document.querySelector('#stps20').style.color = 'red';
            document.querySelector('#stps24').style.color = 'red';
            } else if (stps20 >= 0) {
            document.querySelector('#stps20').style.color = 'blue';
            document.querySelector('#stps24').style.color = 'blue';
            };
    
    
    }
    
    
    // if (tot < 5400000) {
    // 		document.getElementById ("air").value = "품의 불가능"}
    // 	else 
    // 	{document.getElementById ("air").value = "품의 가능"} ; 
    
