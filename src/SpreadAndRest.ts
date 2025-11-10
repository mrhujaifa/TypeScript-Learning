//index 01
//*spread oparetor
const friends = ["rohim", "korim"];
const schoolFriends = ["pintu", "chintu", "babul"];

const userInfo = {
  ...friends,
  ...schoolFriends,
};

//index:02
//rest oparetor
const sendInvite = (...friends: string[]) => {
  friends.map((friend) =>
    console.log(`send invite to my all friends: ${friend}`)
  );
};
sendInvite("hujaifa", "shanto", "kabbo");
