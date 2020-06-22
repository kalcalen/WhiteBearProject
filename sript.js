$("#form-toggle").toggle();

// Save button on "create-imagery"
$("#save-imagery").click(function () {
  $("#overlay-success").toggleClass("d-flex d-none");

  // Variables for "create-imagery"
  let currentDate = new Date();
  console.log("current date", currentDate.toString());
  let currentYear = currentDate.getYear() - 100;
  console.log("current year", currentYear);
  let currentMonth = currentDate.getMonth() + 1;
  console.log("current month", currentMonth);
  let currentDay = currentDate.getDate();
  console.log("current day", currentDay);
  let currentHour = currentDate.getHours();
  console.log("current hour", currentHour);
  let currentMinutes = currentDate.getMinutes();
  console.log("current minutes", currentMinutes);
  let currentSeconds = currentDate.getSeconds();
  console.log("current senconds", currentSeconds);
  let currentMiliSeconds = currentDate.getMilliseconds();
  console.log("current miliseconds", currentMiliSeconds);

  let getFullDate =
    addTwoPadding(currentYear) +
    addTwoPadding(currentMonth) +
    addTwoPadding(currentDay) +
    addTwoPadding(currentHour) +
    addTwoPadding(currentMinutes) +
    addThreePadding(currentMiliSeconds) +
    addTwoPadding(currentSeconds);
  console.log("Full date", getFullDate);

  // Function for making a number 3 digits
  function addThreePadding(num) {
    var numAsString = String(num);
    if (numAsString.length === 1) {
      return "00" + numAsString; // 4 returns "004"
    } else if (numAsString.length === 2) {
      return "0" + numAsString; // 44 returns "044"
    } else {
      return numAsString;
    }
  }

  // Function for making a number 2 digits
  function addTwoPadding(num) {
    var numAsString = String(num);
    if (numAsString.length === 1) {
      return "0" + numAsString; // 4 returns "04"
    } else {
      return numAsString;
    }
  }

  // Variable for creating random number
  var getNumber = Math.floor(Math.random() * 1000);
  console.log(getNumber);
  var idCreated = "" + currentMiliSeconds + getNumber;
  console.log(idCreated);

  var userObj = {
    _id: getNumber,
    imagery:
      "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG.",
    answer:
      "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
    levelNum: 1,
    successfulAttemptsNum: 0,
    createdOn: 200508232659,
    lastAttemptedOn: getFullDate,
  };

  console.log(userObj);
});

$("#back2-answer").click(function () {
  $("#overlay-error").toggleClass("d-flex d-none");
});

// Sign-up button on index
$("#sign-up").click(function () {
  $("#form-toggle").toggle();
  $("#sign-up").toggle();
});

// Function for "Lets Go" btn on index
$("#letsGo").click(function () {
  // Varaibles for email and password textbox
  var emailInput = $("#emailCreate").val();
  console.log(emailInput);

  var emailInputLength = emailInput.length;
  console.log(emailInputLength);

  var passwordInput = $("#passwordCreate").val();
  console.log(passwordInput);

  var passwordInputLength = passwordInput.length;
  console.log(passwordInput);

  // Grabbing index of where @ symbol is
  var emailAtSymbol = emailInput.indexOf("@");

  // Grabbing local part of the email (front part)
  var emailLocalPart = emailInput.slice(0, emailAtSymbol);

  // For email text box if empty
  if (emailInputLength === 0) {
    $("#emailError").removeClass("d-none");
    $("#emailCreate").addClass("is-invalid");
    // If filled
  } else {
    $("#emailError").addClass("d-none");
    $("#emailCreate").removeClass("is-invalid");
    $("#emailCreate").addClass("is-valid");
  }
  // For password box if completely empty
  if (passwordInputLength === 0) {
    $("#passwordError").removeClass("d-none");
    $("#passwordCreate").addClass("is-invalid");
    $("#passwordError9C").addClass("d-none");
    // If password isless than 9 characters
  } else if (passwordInputLength < 9) {
    $("#passwordCreate").addClass("is-invalid");
    $("#passwordError9C").removeClass("d-none");
    $("#passwordError").addClass("d-none");

    // If password is more than 9 characters
  } else {
    $("#passwordError").addClass("d-none");
    $("#passwordCreate").removeClass("is-invalid");
    $("#passwordCreate").addClass("is-valid");
    $("#passwordError9C").addClass("d-none");
  }

  // Does password contain local part
  if (passwordInput.indexOf(emailLocalPart) > -1) {
    $("#passwordErrorEmVal").removeClass("d-none");
    $("#passwordCreate").addClass("is-invalid");
  } else if (passwordInputLength < 9) {
    $("#passwordCreate").addClass("is-invalid");
    $("#passwordError9C").removeClass("d-none");
    $("#passwordError").addClass("d-none");
    $("#passwordErrorEmVal").addClass("d-none");
  } else {
    $("#passwordCreate").removeClass("is-invalid");
    $("#passwordErrorEmVal").addClass("d-none");
    $("#passwordError9C").addClass("d-none");
  }

  // Variables for index Sign-Up

  let currentDate = new Date();
  console.log("current date", currentDate.toString());
  let currentYear = currentDate.getYear() - 100;
  console.log("current year", currentYear);
  let currentMonth = currentDate.getMonth() + 1;
  console.log("current month", currentMonth);
  let currentDay = currentDate.getDate();
  console.log("current day", currentDay);
  let currentHour = currentDate.getHours();
  console.log("current hour", currentHour);
  let currentMinutes = currentDate.getMinutes();
  console.log("current minutes", currentMinutes);
  let currentSeconds = currentDate.getSeconds();
  console.log("current senconds", currentSeconds);
  let currentMiliSeconds = currentDate.getMilliseconds();
  console.log("current miliseconds", currentMiliSeconds);

  let getFullDate =
    addTwoPadding(currentYear) +
    addTwoPadding(currentMonth) +
    addTwoPadding(currentDay) +
    addTwoPadding(currentHour) +
    addTwoPadding(currentMinutes) +
    addThreePadding(currentMiliSeconds) +
    addTwoPadding(currentSeconds);
  console.log("Full date", getFullDate);

  // Function for making a number 3 digits
  function addThreePadding(num) {
    var numAsString = String(num);
    if (numAsString.length === 1) {
      return "00" + numAsString; // 4 returns "004"
    } else if (numAsString.length === 2) {
      return "0" + numAsString; // 44 returns "044"
    } else {
      return numAsString;
    }
  }

  // Function for making a number 2 digits
  function addTwoPadding(num) {
    var numAsString = String(num);
    if (numAsString.length === 1) {
      return "0" + numAsString; // 4 returns "04"
    } else {
      return numAsString;
    }
  }

  // Variable for creating random number
  var getNumber = Math.floor(Math.random() * 1000);
  console.log(getNumber);
  var idCreated = "" + currentMiliSeconds + getNumber;
  console.log(idCreated);

  var userObj = {
    _id: getNumber,
    email: emailInput,
    password: passwordInput,
    createdOn: getFullDate,
  };

  console.log(userObj);

  // List of common passwords
  var listOfCommonPW = [
    "x002tp00",
    "x4ww5qdr",
    "x72jhhu3z",
    "xaccess2",
    "xakep1234",
    "xboxlive",
    "xcalibur",
    "xcountry",
    "xenocide",
    "xenogear",
    "xenophobia",
    "xenophobic",
    "xenophon",
    "xexeylhf",
    "xianzong",
    "xiaoping",
    "xiaoyua123",
    "xinjiang",
    "xohzi3g4",
    "xpressmusic",
    "xsvnd4b2",
    "xsw21qaz",
    "xsw23edc",
    "xthtgfirf",
    "xtutdfhf",
    "xuanzang",
    "xuanzong",
    "xufrgemw",
    "xxx12345",
    "xxxp455w0rd5",
    "xxxxxxx1",
    "xyh28af4",
    "xylophone",
    "xzsawq21",
    "y'knowwhati'msayin",
    "y'understand",
    "yachting",
    "yaglasph",
    "yakovlev",
    "yakushova",
    "yamagata",
    "yamaha12",
    "yamahar1",
    "yamahar6",
    "yamakasi",
    "yamamoto",
    "yamanashi",
    "yamashita",
    "yammering",
    "yangzhou",
    "yankeemp",
    "yankees0",
    "yankees1",
    "yankees2",
    "yankees3",
    "yankees4",
    "yankees7",
    "yankees9",
    "yankovic",
    "yanochka",
    "yanshi1982",
    "yanukovych",
    "yarborough",
    "yarbrough",
    "yardbird",
    "yardbirds",
    "yardstick",
    "yarmouth",
    "yaroslav",
    "yaroslavl",
    "yasacrac",
    "yasuhiro",
    "ybrbnbyf",
    "ybrbnf_25",
    "ybrbnjcbr",
    "ybrjkftd",
    "ybrjkftdbx",
    "ybrjkftdyf",
    "ycwvrxxh",
    "yeahbaby",
    "yeahrigh",
    "yeahright",
    "year2000",
    "year2005",
    "yearbook",
    "yearbooks",
    "yearning",
    "yearnings",
    "yekaterinburg",
    "yelburton",
    "yelena03",
    "yellow12",
    "yellow22",
    "yellowhead",
    "yellowish",
    "yellowknife",
    "yellowstone",
    "yelverton",
    "yemenite",
    "yengeese",
    "yeomanry",
    "yes90125",
    "yeshivas",
    "yessenia",
    "yesterda",
    "yesterday",
    "yesterdays",
    "yfcnfcmz",
    "yfcntymrf",
    "yfcnz123",
    "yfcnzvjz",
    "yfcnzyfcnz",
    "yfdbufnjh",
    "yfeiybrb",
    "yfgjktjy",
    "yfhrjnbrb",
    "yfltymrf",
    "yfnfitymrf",
    "yfxfkmybr",
    "ygfxbkgt",
    "yggdrasi",
    "yielding",
    "yildirim",
    "yingling",
    "yingyang",
    "yitzchak",
    "yjdbrjdf",
    "yjdjcnbf",
    "yjdsqgfhjkm",
    "yjdsqujl",
    "yjdujhjl",
    "yjhbkmcr",
    "ym3cautj",
    "yogibear",
    "yogyakarta",
    "yohannan",
    "yokohama",
    "yokosuka",
    "yokozuna",
    "yorkshir",
    "yorkshire",
    "yorktown",
    "yorkville",
    "yosemite",
    "yoshihiro",
    "youandme",
    "youlanda",
    "youngblood",
    "youngest",
    "youngman",
    "youngone",
    "youngster",
    "youngsters",
    "youngstown",
    "yourmama",
    "yourmom1",
    "yourname",
    "yourself",
    "yourselves",
    "yousuck1",
    "youthful",
    "yoyodyne",
    "ypsilanti",
    "yqlgr667",
    "yqmbevgk",
    "yr8wdxcq",
    "ytdxz2ca",
    "ytngfhjkz",
    "ytnhjufnm",
    "ytrhjvfyn",
    "ytyfdbcnm",
    "yudhoyono",
    "yugoslav",
    "yugoslavia",
    "yugoslavian",
    "yuitre12",
    "yujyd360",
    "yuletide",
    "yushchenko",
    "yvelines",
    "yvtte545",
    "yxkck878",
    "yy5rbfsc",
    "yyyyyyy1",
    "yzerman1",
    "z1234567",
    "z123456789",
    "z123456z",
    "z1x2c3v4",
    "z1x2c3v4b5",
    "z1x2c3v4b5n6m7",
    "z1z2z3z4",
    "z3cn2erv",
    "zacatecas",
    "zacharia",
    "zachariah",
    "zacharias",
    "zachary1",
    "zaharova",
    "zakamatak",
    "zalewski",
    "zalgiris",
    "zamarripa",
    "zambales",
    "zamboanga",
    "zambrano",
    "zamindar",
    "zamoyski",
    "zanesville",
    "zantopia",
    "zanzibar",
    "zapatista",
    "zaphod42",
    "zaporizhia",
    "zapruder",
    "zaq!2wsx",
    "zaq11qaz",
    "zaq12345",
    "zaq123wsx",
    "zaq12qaz",
    "zaq12wsx",
    "zaq1xsw2",
    "zaq1xsw2cde3",
    "zaqwsx123",
    "zaqwsxcde",
    "zaqwsxcderfv",
    "zaqxsw123",
    "zaqxswcde",
    "zaragoza",
    "zaratustra",
    "zarzuela",
    "zasranec",
    "zatunica",
    "zawahiri",
    "zaxscdvf",
    "zbigniew",
    "zcfvfzkexifz",
    "zcxfcnkbdf",
    "zcxfcnkbdfz",
    "zealander",
    "zealanders",
    "zebra123",
    "zechariah",
    "zeebrugge",
    "zeitgeist",
    "zeitschrift",
    "zeljeznicar",
    "zemanova",
    "zendejas",
    "zenit2011",
    "zeppelin",
    "zeringue",
    "zerocool",
    "zesyrmvu",
    "zhaozong",
    "zhejiang",
    "zhengzhou",
    "zhjckfdf",
    "zhongguo",
    "zhongshan",
    "zhongshu",
    "zhongzong",
    "zhytomyr",
    "zidane10",
    "ziegfeld",
    "zielinski",
    "zigazaga",
    "ziggy123",
    "zildjian",
    "zillions",
    "zimbabwe",
    "zimbabwean",
    "zimmerma",
    "zimmerman",
    "zimmermann",
    "zinedine",
    "zinfandel",
    "zinoviev",
    "zionists",
    "zipdrive",
    "zippy123",
    "zirconia",
    "zirconium",
    "zjses9evpa",
    "zldej102",
    "zoidberg",
    "zolushka",
    "zombie13",
    "zookeeper",
    "zoological",
    "zoologist",
    "zooplankton",
    "zootsuit",
    "zoroaster",
    "zoroastrian",
    "zoroastrianism",
    "zoroastrians",
    "zorro123",
    "zpflhjn1",
    "zqjphsyf6ctifgu",
    "zrjdktdf",
    "zse45rdx",
    "zse4xdr5",
    "zsecyus56",
    "zucchero",
    "zucchini",
    "zuckerberg",
    "zuckerman",
    "zukowski",
    "zulfikar",
    "zulfiqar",
    "zvonareva",
    "zweibrucken",
    "zx123456",
    "zx123456789",
    "zxasqw12",
    "zxc12345",
    "zxc123456",
    "zxc123zxc",
    "zxcasd123",
    "zxcasdqw",
    "zxcasdqwe",
    "zxcasdqwe123",
    "zxcqweasd",
    "zxcv1234",
    "zxcv4321",
    "zxcvasdf",
    "zxcvb123",
    "zxcvb1234",
    "zxcvb12345",
    "zxcvbasdfg",
    "zxcvbn12",
    "zxcvbn123",
    "zxcvbn123456",
    "zxcvbnm.",
    "zxcvbnm1",
    "zxcvbnm12",
    "zxcvbnm123",
    "zxcvbnm123456789",
    "zxcvbnma",
    "zxcvbnmm",
    "zxcvbnmz",
    "zxcvfdsa",
    "zxcvvcxz",
    "zz123456",
    "zz8807zpl",
    "zzxxccvv",
    "zzzxxxccc",
    "zzzzxxxx",
    "zzzzzzz1",
  ];
});

// Textbox counter for "create answer"
// Added keyup and length to textbox to count characters
$("#textBox").keyup(function () {
  //Added .text to manipulate 0 on html
  $("#count").text($("#textBox").val().length);
  // Variable to store information in textbox
  var textBox = $("#textBox").val().length;
  // Enables red text when characters over 240
  if (textBox > 240) {
    $("#count2").addClass("text-danger");
  } else {
    $("#count2").removeClass("text-danger");
  }
  // disables button if less than 0, more than 240 characters
  if (textBox > 0 && textBox < 240) {
    $("#nextBcreate").removeClass("disabled");
    // enabes button when characters inputed
  } else {
    $("#nextBcreate").addClass("disabled");
  }
});
