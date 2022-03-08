const btn = document.getElementById("button");

btn.addEventListener("click", (e) => {
  var user = prompt("What is your name?");
  var userName = user.slice(0, 1).toUpperCase();
  var leftUserName = user.slice(1, user.length).toLowerCase();
  var finalName = userName + leftUserName;

  var crush = prompt("What is your crush's name?");
  var crushName = crush.slice(0, 1).toUpperCase();
  var leftCrushName = crush.slice(1, crush.length).toLowerCase();
  var finalCrushName = crushName + leftCrushName;

  var matchScore = Math.floor(Math.random() * 100) + 1 + "%";

  if (matchScore > 70) {
    alert(
      finalName +
        " and " +
        finalCrushName +
        " is a " +
        matchScore +
        " match! Fantastic, you are bound to be together!"
    );
  } else {
    alert(
      finalName + " and " + finalCrushName + " is a " + matchScore + " match!"
    );
  }

  btn.innerHTML =
    finalName + " and " + finalCrushName + " are a " + matchScore + " match!";
});