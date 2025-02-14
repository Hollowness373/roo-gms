export const navigationLinks = [
    {
      href: "/library",
      label: "Library",
    },
  
    {
      img: "/icons/user.svg",
      selectedImg: "/icons/user-fill.svg",
      href: "/my-profile",
      label: "My Profile",
    },
  ];
  
  export const adminSideBarLinks = [
    {
      img: "/icons/admin/home.svg",
      route: "/admin",
      text: "Home",
    },
    {
      img: "/icons/admin/users.svg",
      route: "/admin/users",
      text: "All Users",
    },
    {
      img: "/icons/admin/book.svg",
      route: "/admin/books",
      text: "All Books",
    },
    {
      img: "/icons/admin/bookmark.svg",
      route: "/admin/book-requests",
      text: "Borrow Requests",
    },
    {
      img: "/icons/admin/user.svg",
      route: "/admin/account-requests",
      text: "Account Requests",
    },
  ];
  
  export const FIELD_NAMES = {
    inGameName: "In-Game Name",
    email: "Email",
    classId: "Class",
    password: "Password",
    confirmPass: "Confirm Password",
  };
  
  export const FIELD_TYPES = {
    inGameName: "text",
    email: "email",
    classId: "text",
    password: "password",
    confirmPass: "password"
  };
  
  export const sampleGuides = [
    {
        id: 1,
        title: "Warlock Guide",
        author: "W4TTs",
        genre: "Mage",
        rating: 4,
        cover: "https://ik.imagekit.io/nmxcxnfxh/GuideCover/Warlock.png",
        color: "#1e2a4b",
        description: "In depth guide for Warlock Class, Wizards such as Warlock utilized crowd control to secure points in map during war, in this guide I'll explain the proper build, stat points, and key positioning in war.",
        video: "https://ik.imagekit.io/pwd17k26p/books/videos/file_O-O0Z_Vz5.png",
        summary: "Wizards such as Warlock utilized crowd control to secure points in map during war, in this guide I'll explain the proper build, stat points, and key positioning in war."
    },
    {
      id: 2,
      title: "Rune Knight Guide",
      author: "Hollowness",
      genre: "Swordsman",
      rating: 4.9,
      description:
        "Rune Knights are deadlier than their non-transcendent variant, these armor-clad warriors will prove their might with their vast armory of deadly tools. They can conquer anything that prevents them from pursuing truth and justice.",
      color: "#B74542",
      cover: "https://ik.imagekit.io/nmxcxnfxh/GuideCover/Rune-Knight.png",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "Rune Knights are deadlier than their non-transcendent variant, these armor-clad warriors will prove their might with their vast armory of deadly tools. They can conquer anything that prevents them from pursuing truth and justice. Rune Knights have matched the defensive capabilities of a Crusader with the use of gigantic, two-handed swords. If all else fails, don't fret. These powerful warmongers have the ability to go Berserk, striking fear in the hearts of their enemies. The massive power output of a Lord Knight in this state can crush through the tapestry of the tough.",
    },
    {
      id: 3,
      title: "Guillotine Cross Guide",
      author: "Codiwomp",
      genre: "Thief",
      rating: 4.7,
      description:
        "An elite group of Assassins. The Assassin Cross utilizes stealth and confusion in order to land the perfect killing blow. The Assassin Cross has a huge repertoire of lethal arts including ultimate mastery of poison, better than the original Assassin.",
      color: "#8C419B",
      cover:
        "https://ik.imagekit.io/nmxcxnfxh/GuideCover/Guillotine-Cross.png",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "An elite group of Assassins. The Assassin Cross utilizes stealth and confusion in order to land the perfect killing blow. The Assassin Cross has a huge repertoire of lethal arts including ultimate mastery of poison, better than the original Assassin. With these new skills, the Assassin Cross now has a wide choice of brutal methods to overcome opponents. All without ever leaving the shadows, Transcending the assassin class, Assassin cross is a league of its own! Having the skill to buff their attack, they can unleash a barrage of burst damage.",
    },
    {
      id: 4,
      title: "High Priest Guide",
      author: "Codiwomp",
      genre: "Acolyte",
      rating: 4.5,
      description:
        "The High Priest is the Transcendent variant of the Priest. The High Priest is the epitome of spiritual calm. A bulwark in the storm of chaos, he is more than capable of protecting his comrades when faced with even the most ferocious enemy.",
      color: "#70A44F",
      cover:
        "https://ik.imagekit.io/nmxcxnfxh/GuideCover/Archbishop.png",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "The High Priest is the Transcendent variant of the Priest. The High Priest is the epitome of spiritual calm. A bulwark in the storm of chaos, he is more than capable of protecting his comrades when faced with even the most ferocious enemy. Despite the many skills taught to them by the Priests of the Prontera Church, they still need to learn a few more from the Gods themselves. Now able to create areas where no violence may occur, they are able to Heal more, Bless more, and Serve even more. Their skills are truly gifts from God.The High Priest is the Transcendent variant of the Priest. The High Priest is the epitome of spiritual calm. A bulwark in the storm of chaos, he is more than capable of protecting his comrades when faced with even the most ferocious enemy. Despite the many skills taught to them by the Priests of the Prontera Church, they still need to learn a few more from the Gods themselves. Now able to create areas where no violence may occur, they are able to Heal more, Bless more, and Serve even more. Their skills are truly gifts from God.",
    },
    {
      id: 5,
      title: "Ranger Guide",
      author: "Codiwomp",
      genre: "Archer",
      rating: 4.7,
      description:
        "One shot, one kill. The Sniper job class specializes in precision and powerful ranged attacks. The Sniper is truly the Master of the Bow, wherein it becomes a deadly instrument capable of dealing massive damage.",
      color: "#80671E",
      cover: "https://ik.imagekit.io/nmxcxnfxh/GuideCover/Ranger.png",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "One shot, one kill. The Sniper job class specializes in precision and powerful ranged attacks. The Sniper is truly the Master of the Bow, wherein it becomes a deadly instrument capable of dealing massive damage. The Falcon returns to its aid, with new Falcon skills, especially Falcon Assault. They will be able to deploy traps just like their pre-transcendental form, the Hunter job class. With the ability to deal mass amounts of damage quickly, lock your opponent in place, and have the added advantage of having a Falcon, Snipers can be extremely deadly.",
    },
    {
      id: 6,
      title: "Mechanic Guide",
      author: "Hollowness",
      genre: "Merchant",
      rating: 4.8,
      description:
        "When the Blacksmith transcends the limitations of working with Steel, the realization that any material existing in the world can be used to create valuable items naturally follows. It is this level of artistry in creating weapons that define the Whitesmith. The Whitesmith also specializes in manipulating fire and using Mace and Ax weapons in battle.",
      color: "#764016",
      cover:
        "https://ik.imagekit.io/nmxcxnfxh/GuideCover/Mechanic.png",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "When the Blacksmith transcends the limitations of working with Steel, the realization that any material existing in the world can be used to create valuable items naturally follows. It is this level of artistry in creating weapons that define the Whitesmith. The Whitesmith also specializes in manipulating fire and using Mace and Ax weapons in battle. Whitesmith is the pinnacle of the Blacksmith's career. The Whitesmith skill base grows upon the Blacksmith's Axe/Mace skills and received a lot of nice new skills. Smiths pose a dangerous threat to almost every class. They have the power to break Weapons and Armor while they're attacking their enemy with Shattering Strike (Meltdown) and then unleash a flurry of High-Speed Cart Rams (Cart Termination). This class takes a lot of customization in order to make work properly and takes a lot of time and effort to play one well.",
    },
    {
      id: 7,
      title: "Monk Guide",
      author: "Codiwomp",
      genre: "Acolyte",
      rating: 4.8,
      description:
        "Monks are martial artists who use a combination of Holy magic and their fists to combat their enemies.",
      color: "#70A44F",
      cover:
        "https://ik.imagekit.io/nmxcxnfxh/GuideCover/Monk.png",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "Monks are martial artists who use a combination of Holy magic and their fists to combat their enemies. They invested the time and effort to sharpen their bodies rather than their mind. Rising in power with the mysterious abilities of the spirit and body, they were able to break everything that stood in their way with their strong stamina and powerful rehabilitation techniques.",
    },
    {
      id: 8,
      title: "Maestro Guide",
      author: "Codiwomp",
      genre: "Archer",
      rating: 4.7,
      description:
        "One shot, one kill. The Sniper job class specializes in precision and powerful ranged attacks. The Sniper is truly the Master of the Bow, wherein it becomes a deadly instrument capable of dealing massive damage.",
      color: "#80671E",
      cover: "https://ik.imagekit.io/nmxcxnfxh/GuideCover/Maestro.png",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "One shot, one kill. The Sniper job class specializes in precision and powerful ranged attacks. The Sniper is truly the Master of the Bow, wherein it becomes a deadly instrument capable of dealing massive damage. The Falcon returns to its aid, with new Falcon skills, especially Falcon Assault. They will be able to deploy traps just like their pre-transcendental form, the Hunter job class. With the ability to deal mass amounts of damage quickly, lock your opponent in place, and have the added advantage of having a Falcon, Snipers can be extremely deadly.",
    },
    {
      id: 9,
      title: "Sorcerer Guide",
      author: "W4TTs",
      genre: "Mage",
      rating: 4.8,
      description:
        "Quenching their lifelong thirst for learning, Professors have accumulated a greater body of knowledge than ever before! They have new, creative uses for their mystical skills to support allies and frustrate enemies. ",
      color: "#1e2a4b",
      cover:
        "https://ik.imagekit.io/nmxcxnfxh/GuideCover/Sorcerer.png",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "Quenching their lifelong thirst for learning, Professors have accumulated a greater body of knowledge than ever before! They have new, creative uses for their mystical skills to support allies and frustrate enemies. Although Professors do not boast the sheer power of their counterpart, the High Wizard, their inventive applications of magic are their keys to victory. ",
    },
    {
      id: 10,
      title: "Royal Guard Guide",
      author: "Hollowness",
      genre: "Swordsman",
      rating: 4.9,
      description:
        "There is nothing more encouraging and inspiring on a battlefield than a Paladin fighting for one's side. Whether he or she is defending the exposed flanks or taking the fight against the enemy, a Paladin in action is a wonderful sight",
      color: "#B74542",
      cover: "https://ik.imagekit.io/nmxcxnfxh/GuideCover/Royal-Guard.png",
      video: "/sample-video.mp4?updatedAt=1722593504152",
      summary:
        "There is nothing more encouraging and inspiring on a battlefield than a Paladin fighting for one's side. Whether he or she is defending the exposed flanks or taking the fight against the enemy, a Paladin in action is a wonderful sight",
    },
  ];