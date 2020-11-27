
// In this project we’ll calculate if you’re getting enough study time each week using a Study Time Calculator.
// The program will determine the actual and ideal hours of study time for each day of the last week.
// Finally, it will calculate, in hours, how far you are from your weekly study goal.




const getStudyHours = (day) => {
  if (day === "monday") {
    return 17;
  } else if (day === "tuesday") {
    return 27;
  } else if (day === "wednesday") {
    return 8;
  } else if (day === "thursday") {
    return 6;
  } else if (day === "friday") {
    return 9;
  } else if (day === "saturday") {
    return 4;
  } else if (day === "sunday") {
    return 2;
  }
};

const getWeeklyStudyHours = () =>
  getStudyHours("monday") +
  getStudyHours("tuesday") +
  getStudyHours("wednesday") +
  getStudyHours("thursday") +
  getStudyHours("friday") +
  getStudyHours("saturday") +
  getStudyHours("sunday");

console.log(getWeeklyStudyHours());

const getIdealStudyHours = () => {
  let idealHours = 9;
  return idealHours * 7;
};
console.log(getIdealStudyHours());

const calculateStudyDept = () => {
  let actualStudyHours = getWeeklyStudyHours();
  let IdealStudyHours = getIdealStudyHours();
  let dept = IdealStudyHours - actualStudyHours;
  if (actualStudyHours === IdealStudyHours) {
    return "Perfect!You have studied just the right amount of time.";
  } else if (actualStudyHours > IdealStudyHours) {
    return "Wow!That is just great you have exceeded the ideal study hours per week.";
  } else if (actualStudyHours < IdealStudyHours) {
    return (
      "Sorry.You have not studied enough. You should have studied " +
      dept +
      " hours more to reach your weekly goal."
    );
  }
};

console.log(calculateStudyDept());
