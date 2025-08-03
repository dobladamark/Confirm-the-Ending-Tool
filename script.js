function confirmEnding(check,checkEnds) {
if(check.slice(-checkEnds.length) === checkEnds) {
return true;
}else {
  return false;
}

}

console.log(confirmEnding("Congratulation", "on"));
