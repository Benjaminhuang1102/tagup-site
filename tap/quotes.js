const quotes = [
  "You miss 100% of the shots you don’t take.",
  "Champions keep playing until they get it right.",
  "Hard work beats talent when talent doesn’t work hard.",
  "It’s not whether you get knocked down; it’s whether you get up.",
  "The difference between the impossible and the possible lies in a person’s determination.",
  "Success isn’t owned. It’s leased. And rent is due every day.",
  "Do something today that your future self will thank you for.",
  "Never say never because limits, like fears, are often just an illusion.",
  "Pain is temporary. Quitting lasts forever.",
  "It never gets easier. You just get better.",
  "I’ve failed over and over and over again in my life. And that is why I succeed.",
  "Winning means you’re willing to go longer, work harder, and give more than anyone else.",
  "If something stands between you and your success, move it. Never be denied.",
  "There may be people with more talent than you, but there’s no excuse for anyone to work harder than you do.",
  "Push yourself again and again. Don’t give an inch until the final buzzer sounds.",
  "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing.",
  "The only way to prove you are a good sport is to lose.",
  "It’s not the will to win that matters—everyone has that. It’s the will to prepare to win that matters.",
  "The only one who can tell you ‘you can’t win’ is you and you don’t have to listen.",
  "If you train hard, you’ll not only be hard, you’ll be hard to beat.",
  "A champion is afraid of losing. Everyone else is afraid of winning.",
  "You have to expect things of yourself before you can do them.",
  "Age is no barrier. It’s a limitation you put on your mind.",
  "The harder the battle, the sweeter the victory.",
  "Adversity causes some men to break; others to break records.",
  "Practice does not make perfect. Only perfect practice makes perfect.",
  "Gold medals aren’t really made of gold. They’re made of sweat, determination, and a hard-to-find alloy called guts.",
  "Don’t measure yourself by what you have accomplished, but by what you should have accomplished with your ability.",
  "Excellence is not a singular act but a habit. You are what you repeatedly do.",
  "The more difficult the victory, the greater the happiness in winning.",
  "You can’t put a limit on anything. The more you dream, the farther you get.",
  "Never give up! Failure and rejection are only the first step to succeeding.",
  "Don’t count the days, make the days count.",
  "Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it.",
  "Success usually comes to those who are too busy to be looking for it.",
  "You have to believe in yourself when no one else does.",
  "The only disability in life is a bad attitude.",
  "I don’t count my sit-ups; I only start counting when it starts hurting because they’re the only ones that count.",
  "Do not let what you cannot do interfere with what you can do.",
  "Don’t quit. Suffer now and live the rest of your life as a champion.",
  "Make each day your masterpiece.",
  "To uncover your true potential, you must first find your own limits and then have the courage to blow past them.",
  "The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it.",
  "You have to do something in your life that is honorable and not cowardly if you are to live in peace with yourself.",
  "Greatness is not in where we stand, but in what direction we are moving.",
  "A trophy carries dust. Memories last forever.",
  "We can’t become what we need to be by remaining what we are.",
  "The best way to predict the future is to create it.",
  "It’s not the size of the dog in the fight, but the size of the fight in the dog.",
  "Every strike brings me closer to the next home run.",
  "You win some, you lose some, but you live to fight another day.",
  "Effort only fully releases its reward after a person refuses to quit.",
  "You don’t have to be the best, but you have to be willing to work the hardest.",
  "The more I practice, the luckier I get.",
  "Success is where preparation and opportunity meet.",
  "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
  "The will to win means nothing without the will to prepare.",
  "Don’t let what you cannot do stop you from doing what you can do.",
  "Winning isn’t everything, but wanting to win is.",
  "Motivation is what gets you started. Habit is what keeps you going.",
  "The only place success comes before work is in the dictionary.",
  "A good hockey player plays where the puck is. A great hockey player plays where the puck is going to be.",
  "Some people want it to happen, some wish it would happen, others make it happen.",
  "If you fail to prepare, you’re prepared to fail.",
  "Success isn’t permanent and failure isn’t fatal.",
  "Do what you have to do until you can do what you want to do.",
  "Winners are not afraid of losing. But losers are.",
  "A champion shows who he is by what he does when he thinks no one is watching.",
  "Don’t be afraid to fail. Be afraid not to try.",
  "You don’t have to be great to start, but you have to start to be great.",
  "You’re never a loser until you quit trying.",
  "When you win, say nothing. When you lose, say less.",
  "Every champion was once a contender that refused to give up.",
  "Some people say I have attitude – maybe I do... but I think you have to.",
  "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’",
  "When you get knocked down, get back up and try again.",
  "The greatest test of courage on earth is to bear defeat without losing heart.",
  "Your biggest opponent isn’t the other guy. It’s human nature.",
  "Be the best version of yourself in anything you do. You don’t have to live anybody else’s story.",
  "I never worry about the problem. I worry about the solution.",
  "Don’t practice until you get it right. Practice until you can’t get it wrong.",
  "If you don’t have confidence, you’ll always find a way not to win.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "Talent wins games, but teamwork and intelligence win championships.",
  "The harder you work for something, the greater you’ll feel when you achieve it."
];

const authors = [
  "Wayne Gretzky", "Billie Jean King", "Tim Notke", "Vince Lombardi", "Tommy Lasorda", "J.J. Watt", "Sean Patrick Flanery",
  "Michael Jordan", "Lance Armstrong", "Unknown", "Michael Jordan", "Vince Lombardi", "Dwayne Johnson", "Derek Jeter",
  "Larry Bird", "Pelé", "Ernie Banks", "Paul Bryant", "Jessica Ennis-Hill", "Herschel Walker", "Billie Jean King",
  "Michael Jordan", "Jackie Joyner-Kersee", "Les Brown", "William Arthur Ward", "Vince Lombardi", "Dan Gable",
  "John Wooden", "Shaquille O’Neal", "Pele", "Michael Phelps", "Jim Valvano", "Muhammad Ali", "Michael Jordan",
  "Henry David Thoreau", "Serena Williams", "Scott Hamilton", "Muhammad Ali", "John Wooden", "Muhammad Ali",
  "John Wooden", "Picabo Street", "Billie Jean King", "Arnold Schwarzenegger", "Larry Brown", "Oliver Wendell Holmes",
  "Mary Lou Retton", "Oprah Winfrey", "Peter Drucker", "Mark Twain", "Babe Ruth", "Unknown", "Napoleon Hill",
  "Unknown", "Gary Player", "Bobby Unser", "Vince Lombardi", "Juma Ikangaa", "John Wooden", "Vince Lombardi",
  "Jim Ryun", "Vince Lombardi", "Michael Jordan", "Wayne Gretzky", "Michael Jordan", "Mark Spitz", "Mike Ditka",
  "Oprah Winfrey", "Robert Kiyosaki", "Unknown", "Michael Jordan", "Zig Ziglar", "Tim Notke", "Tommy Lasorda",
  "Mike Ditka", "Paul Brown", "Rocky Balboa", "Venus Williams", "Muhammad Ali", "Muhammad Ali", "Unknown",
  "Robert Green Ingersoll", "Bobby Knight", "Steph Curry", "Shaquille O’Neal", "Unknown", "Carl Lewis",
  "Robert Collier", "Pele", "Michael Jordan", "Unknown"
];

function getQuoteOfTheDay() {
  const d = new Date();
  const day = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  const i = day % quotes.length;
  let splitQuote = quotes[i].replace(/, /g, ",\n");
  return { text: splitQuote, author: authors[i] };
}
