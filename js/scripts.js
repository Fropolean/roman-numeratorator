var breakDown = function(number) {
  // var badNews = [900, 400, 90, 40, 9, 4]
  // var components = [500, 100, 50, 10, 5, 1];
  // var romanArray = ["D", "C", "L", "X", "V", "I"];
  var resultArray = [];

  while (number >= 1000) {
    resultArray.push("M");
    number -= 1000;
  }

  while (number >= 500) {
    if (number < 900) {
      resultArray.push("D");
      number -= 500;
    } else {
      resultArray.push("CM");
      number -= 900;
    }
  }

  while (number >= 100) {
    if (number < 400) {
      resultArray.push("C");
      number -= 100;
    } else {
      resultArray.push("CD");
      number -= 400;
    }
  }

  while (number >= 50) {
    if (number < 90) {
      resultArray.push("L");
      number -= 50;
    } else {
      resultArray.push("XC");
      number -= 90;
    }
  }

  while (number >= 10) {
    if (number < 40) {
      resultArray.push("X");
      number -= 10;
    } else {
      resultArray.push("XL");
      number -= 40;
    }
  }

  while (number >= 5) {
    if (number < 9) {
      resultArray.push("V");
      number -= 5;
    } else {
      resultArray.push("IX");
      number -= 9;
    }
  }

  while (number >= 1) {
    if (number < 4) {
      resultArray.push("I");
      number -= 1;
    } else {
      resultArray.push("IV");
      number -= 4;
    }
  }
  resultArray = resultArray.join();
  return resultArray;
};

$(document).ready(function() {
  $("form#inquiry").submit(function(event) {
    var number = parseInt($("input#userInput").val());
    var result = breakDown(number);

    $("#output").append(result);
    event.preventDefault();
  });
});

  // for (var i = 0; i < components.length; i++)
  //   while (number >= components[i]) {
  //     if (number < badNews[i]) {
  //       resultArray.push(romanArray[i]);
  //       number -= components[i];
  //
  //   }

  // for (var i = number; i >= 0; i -= component)
  //  for (var j = 0; j <= components.length; j++)
  //   if (number % components[j] < number) {
  //     resultArray.push(components[j]);
  //     number -= components[j];
  //     var component = components[j];
  //   }


// var converter = function(resultArray) {
//   var convertedArray = breakDown(number);
//   convertedArray = convertedArray.replace(/[,]/g, "");
//   convertedArray = convertedArray.replace(/1000/g, "M");
//   convertedArray = convertedArray.replace(/500/g, "D");
//   convertedArray = convertedArray.replace(/100/g, "C");
//   convertedArray = convertedArray.replace(/50/g, "L");
//   convertedArray = convertedArray.replace(/10/g, "X");
//   convertedArray = convertedArray.replace(/5/g, "V");
//   convertedArray = convertedArray.replace(/1/g, "I");
//   resultArray = convertedArray;
//   return resultArray;
// }
