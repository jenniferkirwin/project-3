'use strict';
const db = require('../models');

const announcementSeeds = [
  {
    announcementText: "Chuck pork andouille flank, shank ham hock frankfurter tail t-bone ribeye jowl. Beef pork loin turducken venison, jowl picanha frankfurter doner burgdoggen alcatra sirloin pork belly andouille meatball cupim. Drumstick short ribs meatball alcatra corned beef chicken kielbasa, shank cow buffalo leberkas kevin bacon. Beef ribs shoulder andouille ball tip. Shankle kielbasa bacon short ribs short loin chicken cupim jerky meatball drumstick pastrami sausage buffalo leberkas shank. Short loin tenderloin jerky fatback ham.",
  },
  {
    announcementText: "Pork belly turkey meatloaf, sirloin fatback rump shankle venison ham cow bacon. Jowl boudin shank bresaola, alcatra hamburger frankfurter tail buffalo ball tip cupim corned beef ham t-bone doner. Beef pancetta capicola cupim flank frankfurter filet mignon turducken turkey chuck. Ball tip picanha alcatra biltong meatloaf hamburger doner, short loin swine tri-tip ribeye tenderloin pork loin tongue. Flank pork loin picanha hamburger, cow jowl biltong fatback porchetta pork belly turducken salami. Pork chop fatback t-bone swine cow hamburger tongue.",
  },
  {
    announcementText: "Pancetta bresaola sirloin salami flank burgdoggen pastrami spare ribs turducken. Brisket tri-tip pork chop strip steak boudin porchetta meatball biltong buffalo shoulder. Salami jerky pork chop frankfurter, leberkas venison rump short ribs kevin. Ham hock pork belly drumstick, biltong pork chop tongue t-bone corned beef rump chicken bresaola meatloaf beef ribs short loin shankle. Shank turducken ribeye leberkas, beef ribs kielbasa kevin landjaeger jowl pork chop pancetta shoulder bresaola. Bacon spare ribs ribeye pork loin, hamburger short loin meatball fatback prosciutto porchetta cow. Capicola kielbasa drumstick hamburger prosciutto ribeye t-bone buffalo.",
  },
  {
    announcementText: "Pastrami bacon alcatra chicken chuck tail shankle ribeye. Kielbasa picanha turkey, flank alcatra spare ribs leberkas sausage. Buffalo shankle alcatra ground round beef ribs. Tongue sirloin strip steak, leberkas bresaola short ribs pork chop prosciutto flank.",
  },
  {
    announcementText: "Prosciutto pork loin frankfurter chicken venison. Brisket kevin t-bone kielbasa hamburger beef ribs cupim sirloin bacon meatloaf meatball. Leberkas flank biltong chicken chislic. Boudin landjaeger brisket burgdoggen tail turducken picanha prosciutto doner hamburger kevin ribeye beef short ribs salami. Pig boudin turducken prosciutto beef ribs chicken bresaola sausage corned beef chuck leberkas filet mignon sirloin. Filet mignon drumstick tenderloin, doner spare ribs jerky frankfurter landjaeger ribeye picanha venison kielbasa bacon.",
  },
];

module.exports = function seedAnnouncements() {
  return announcementSeeds.forEach( (announcement) => {
    db.Announcement.create({
      announcementText: announcement.announcementText,
    })
  });
};