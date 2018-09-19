function hover(name) {
  $(name).mouseenter(function() {
    $(this).css("color", "white");
    $(this).css("text-decoration", "underline");
  });
  $(name).mouseleave(function() {
    $(this).css("color", "gray");
    $(this).css("text-decoration", "none");
  });
}




function clock() {
  var d = new Date();
  var hoursin24 = d.getHours();
  var currentminute = d.getMinutes();
  if (hoursin24 < 12) {
    $("#전").addClass("active");
    $("#후").removeClass("active");
  } else if (hoursin24 >= 12) {
    $("#전").removeClass("active");
    $("#후").addClass("active");
  }

  var hoursin12 = hoursin24;

  if (hoursin24 == 0) {
    hoursin12 = 12;
  } else if (hoursin24 > 12) {
    hoursin12 = hoursin24 - 12;
  }

  clockHour(hoursin12);

  clockMinute(currentminute);

  setTimeout("clock()", 1000);
}


function clockHour(hour) {
  switch (hour) {
    case 1:
      $(".hour").removeClass("active");
      $("#한").addClass("active");
      break;
    case 2:
      $(".hour").removeClass("active");
      $("#두").addClass("active");
      break;
    case 3:
      $(".hour").removeClass("active");
      $("#세").addClass("active");
      break;
    case 4:
      $(".hour").removeClass("active");
      $("#네").addClass("active");
      break;
    case 5:
      $(".hour").removeClass("active");
      $("#다").addClass("active");
      $("#섯").addClass("active");
      break;
    case 6:
      $(".hour").removeClass("active");
      $("#여").addClass("active");
      $("#섯").addClass("active");
      break;
    case 7:
      $(".hour").removeClass("active");
      $("#일").addClass("active");
      $("#곱").addClass("active");
      break;
    case 8:
      $(".hour").removeClass("active");
      $("#여2").addClass("active");
      $("#덟").addClass("active");
      break;
    case 9:
      $(".hour").removeClass("active");
      $("#아").addClass("active");
      $("#홉").addClass("active");
      break;
    case 10:
      $(".hour").removeClass("active");
      $("#열").addClass("active");
      break;
    case 11:
      $(".hour").removeClass("active");
      $("#열").addClass("active");
      $("#한").addClass("active");
      break;
    case 12:
      $(".hour").removeClass("active");
      $("#열").addClass("active");
      $("#두").addClass("active");
      break;
  }

}



function clockMinute(minute) {
  var tenth = Math.floor(minute / 10);
  var oneth = minute % 10;
  /*십자리 분 표시 */
  switch (tenth) {
    case 0:
      $(".tenminute").removeClass("active");
      break;
    case 1:
      $(".tenminute").removeClass("active");
      $("#십").addClass("active");
      break;
    case 2:
      $(".tenminute").removeClass("active");
      $("#이").addClass("active");
      $("#십").addClass("active");
      break;
    case 3:
      $(".tenminute").removeClass("active");
      $("#삼").addClass("active");
      $("#십").addClass("active");
      break;
    case 4:
      $(".tenminute").removeClass("active");
      $("#사").addClass("active");
      $("#십").addClass("active");
      break;
    case 5:
      $(".tenminute").removeClass("active");
      $("#오").addClass("active");
      $("#십").addClass("active");
      break;
  }
  /*일자리 분 표시*/
  switch (oneth) {
    case 1:
      $(".oneminute").removeClass("active");
      $("#일2").addClass("active");
      break;
    case 2:
      $(".oneminute").removeClass("active");
      $("#이2").addClass("active");
      break;
    case 3:
      $(".oneminute").removeClass("active");
      $("#삼2").addClass("active");
      break;
    case 4:
      $(".oneminute").removeClass("active");
      $("#사2").addClass("active");
      break;
    case 5:
      $(".oneminute").removeClass("active");
      $("#오2").addClass("active");
      break;
    case 6:
      $(".oneminute").removeClass("active");
      $("#육").addClass("active");
      break;
    case 7:
      $(".oneminute").removeClass("active");
      $("#칠").addClass("active");
      break;
    case 8:
      $(".oneminute").removeClass("active");
      $("#팔").addClass("active");
      break;
    case 9:
      $(".oneminute").removeClass("active");
      $("#구").addClass("active");
      break;
  }
}


function calendar() {
  var d = new Date();
  var todaymonth = d.getMonth() + 1;
  var todayday = d.getDate();

  monthcalendar(todaymonth);
  daycalendar(todayday);
  setTimeout("calendar()", 1000);


}


function monthcalendar(month) {
  switch (month) {
    case 1:
      $("#month").text("일");
      break;
    case 2:
      $("#month").text("이");
      break;
    case 3:
      $("#month").text("삼");
      break;
    case 4:
      $("#month").text("사");
      break;
    case 5:
      $("#month").text("오");
      break;
    case 6:
      $("#month").text("유");
      break;
    case 7:
      $("#month").text("칠");
      break;
    case 8:
      $("#month").text("팔");
      break;
    case 9:
      $("#month").text("구");
      break;
    case 10:
      $("#month").text("시");
      break;
    case 11:
      $("#month").text("십일");
      break;
    case 12:
      $("#month").text("십이");
      break;
  }
}

function daycalendar(day) {
  var tenth = Math.floor(day / 10);
  var oneth = day % 10;
  if (tenth == 0) {
    $("#day").text("" + showoneth(oneth));
  } else if (tenth == 1) {
    $("#day").text("십" + showoneth(oneth));
  } else if (tenth == 2) {
    $("#day").text("이십" + showoneth(oneth));
  } else if (tenth == 3) {
    $("#day").text("삼십" + showoneth(oneth));
  }


}

function showoneth(oneth) {
  switch (oneth) {
    case 0:
      return "";
      break;
    case 1:
      return "일";
      break;
    case 2:
      return "이";
      break;
    case 3:
      return "삼";
      break;
    case 4:
      return "사";
      break;
    case 5:
      return "오";
      break;
    case 6:
      return "육";
      break;
    case 7:
      return "칠";
      break;
    case 8:
      return "팔";
      break;
    case 9:
      return "구";
      break;
  }
}


function searchbarFocus(idname){
  $(idname).focusin(function(){
    $(this).css("border-bottom-color", "white");
    $(this).attr("placeholder", "");
  });
  $(idname).focusout(function(){
    $(this).css("border-bottom-color", "gray");
    $(this).attr("placeholder", "구글 검색");
  });

}
