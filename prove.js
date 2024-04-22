let surveyResults = ["true","true","true","false","false","true"];
let res =[1,2,4,6];
displayResults();
function proveResults(arr, bool) {
    let num = 0;
    let surveyResult_mod = surveyResults.map(function (element) {
      return element === "true";
    });
  
    for (i = 0; i < arr.length; i++) {
      if (surveyResult_mod[arr[i] - 1] === bool) {
        num++;
      }
    }
    return num;
  }
 

  function displayResults() {
    const dost = proveResults(res,false);
    const surveyContainer = document.getElementById("survey-container");
    let res_dost_text = new String();
  switch (true) {
    case dost >= 10:
      res_dost_text =
        "Отримані результати слід вважати необ'єктивними, тому треба пройти тест знову.";
      break;
    case dost <= 9 && dost >= 6:
      res_dost_text =
        "ДОСТАТНЯ достовірність результатів обстеження. Окремі ознаки соціальної бажаності.";
      break;
    default:
      res_dost_text =
        "ВИСОКА достовірність результатів обстеження.";
  }
  surveyContainer.innerHTML = "<h2>Результати опитування:</h2>";
 surveyContainer.innerHTML += `<div><b>Достовірність</b><p>Кількість балів: ${dost}. ${res_dost_text}</p></div>`;
  }