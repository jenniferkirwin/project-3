'use strict';

const assignmentSeeds = [
  {
    assignmentText: "Bacon ipsum dolor amet pork loin boudin sirloin strip steak drumstick alcatra jerky turducken tenderloin flank doner frankfurter landjaeger rump. Meatloaf ham hock landjaeger drumstick salami chislic biltong shankle short loin frankfurter tongue jerky short ribs turducken ball tip. Shoulder boudin prosciutto, pancetta drumstick leberkas tri-tip doner kevin spare ribs strip steak filet mignon brisket short ribs swine. Tail cow sausage pastrami, salami tri-tip brisket fatback biltong. Ground round chicken cow sausage kielbasa chislic brisket swine salami beef ribs pork belly meatball spare ribs porchetta hamburger. Ball tip chicken bresaola bacon beef ribs. Meatloaf filet mignon cupim, chicken bresaola ham short ribs shoulder buffalo tenderloin.",
  },
  {
    assignmentText: "Shoulder swine frankfurter buffalo hamburger filet mignon shankle ball tip venison. Turkey buffalo flank pork. Shoulder frankfurter porchetta, pork belly cupim hamburger corned beef chuck capicola bresaola filet mignon ground round bacon chislic. Pork loin kevin frankfurter ball tip spare ribs, tri-tip kielbasa salami strip steak boudin. Biltong flank cupim chislic tenderloin. Short ribs pork belly prosciutto pastrami t-bone ground round pancetta pig cupim tail andouille brisket jowl pork loin short loin.",
  },
  {
    assignmentText: "Boudin hamburger tri-tip prosciutto sausage, cow beef. Andouille beef ground round spare ribs chicken, shoulder turducken sausage shankle. Chislic short loin filet mignon pastrami. Ribeye chicken shankle pastrami leberkas pig beef ribs sirloin filet mignon andouille. Hamburger cow biltong short ribs pastrami. Meatloaf turducken ball tip tail, hamburger rump drumstick jowl shankle short ribs sirloin boudin kielbasa chislic. Short loin capicola salami prosciutto beef venison burgdoggen, buffalo bresaola brisket swine.",
  },
  {
    assignmentText: "Picanha pork chop short loin bresaola pork chuck andouille ball tip salami pancetta leberkas beef ribs. Short ribs andouille beef ribs tenderloin, drumstick spare ribs boudin. Kevin landjaeger tongue, rump ground round meatloaf filet mignon pork belly chicken. Kevin pork chop tenderloin boudin beef sausage, drumstick cupim turkey leberkas spare ribs turducken. Ball tip pork sirloin biltong ribeye picanha turducken leberkas swine burgdoggen venison. Frankfurter short loin shoulder, ground round swine turducken pastrami chicken pork loin sausage salami pork belly short ribs.",
  },
  {
    assignmentText: "Pork prosciutto cow, buffalo rump pork chop kielbasa short ribs tongue. Flank rump pastrami, frankfurter ribeye pork loin ham. Shoulder sausage capicola, burgdoggen t-bone fatback corned beef short ribs buffalo pork loin short loin chuck kielbasa pork chop frankfurter. Strip steak pork belly pork shank tail alcatra chuck, buffalo picanha ham frankfurter ball tip. Bacon tri-tip shoulder corned beef turducken brisket strip steak prosciutto drumstick short ribs ground round boudin kevin hamburger ribeye.",
  }
];

module.exports = function seedAssignments() {
  return assignmentSeeds.forEach( (assignment) => {
    db.Assignment.create({
      assignmentText: assignment.assignmentText,
    })
  });
};