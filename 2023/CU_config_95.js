const pitScouting = false;
var requiredFields = ["e", "m", "l", "r", "s", "as"];
var config_data = {
  title: "ScoutingPASS 3173",
  page_title: "ScoutingPASS 3173",
  prematch: {
    Prematch: {
      code: "prm-div",
      title: "Pregame",
      type: "divider",
      text: 'Fill in "Match #" and "Robot" fields',
    },
    "Scouter Name": {
      code: "s",
      title: "Scouter Name",
      type: "scouter",
      size: 10,
      maxSize: 20,
    },
    Event: {
      code: "e",
      title: "Event",
      type: "event",
      defaultValue: "2023nyro",
      disabled: "true",
    },
    "Match Level": {
      code: "l",
      title: "Match Level",
      type: "level",
      choices: {
        qm: "Qualifiers<br>",
        ef: "Eighthfinals<br>",
        qf: "Quarterfinals<br>",
        sf: "Semifinals<br>",
        f: "Finals",
      },
      defaultValue: "qm",
    },
    "Match Number": {
      code: "m",
      title: "Match Number",
      type: "match",
      min: 1,
      max: 100,
    },
    Robot: {
      code: "r",
      title: "Robot",
      type: "robot",
      choices: {
        r1: "Red-1",
        b1: "Blue-1<br>",
        r2: "Red-2",
        b2: "Blue-2<br>",
        r3: "Red-3",
        b3: "Blue-3",
      },
    },
    "Team Number": {
      code: "t",
      title: "Team Number",
      type: "team",
      min: 1,
      max: 9999,
    },
    "Auto Start Position": {
      gsCol: "autoStartPos",
      code: "as",
      type: "field_image",
      filename: "2023/field_image.png",
      clickRestriction: "one",
      shape: "circle 5 black red true",
    },
    Autonomous: {
      code: "a-div",
      title: "Autonomous",
      type: "divider",
    },
    "Auto Scoring": {
      code: "asg",
      type: "clickable_image",
      filename: "2023/grid_image.png",
      dimensions: "9 4",
      clickRestriction: "onePerBox",
      toggleClick: "true",
      showFlip: "false",
      showUndo: "false",
      shape: "circle 12 black red true",
    },
    "Auton Exits Community?": {
      code: "ae",
      title: "Exits Community?",
      type: "bool",
    },
    "Auton Charging Pad Level": {
      code: "ac",
      title: "Charging Pad Level",
      type: "radio",
      choices: {
        None: "None<br>",
        Docked: "Docked<br>",
        Engaged: "Engaged<br>",
        "Not Observed": "Not Observed",
      },
      defaultValue: "Not Observed",
    },
    Teleop: {
      code: "t-div",
      title: "Teleop",
      type: "divider",
    },
    "Cycle Timer": {
      code: "tct",
      type: "cycle",
    },
    "Grid Scoring": {
      code: "tsg",
      type: "clickable_image",
      filename: "2023/grid_image.png",
      dimensions: "9 4",
      clickRestriction: "onePerBox",
      toggleClick: "true",
      showFlip: "false",
      showUndo: "false",
      shape: "circle 12 black red true",
      cycleTimer: "tct",
    },
    "Teleop Picks Up From Ground": {
      code: "tpg",
      title: "Picks Up From Ground",
      type: "bool",
    },
    "Teleop Picks Up From Chute": {
      code: "tpc",
      title: "Picks Up From Chute",
      type: "bool",
    },
    "Teleop Picks Up From Shelf": {
      code: "tps",
      title: "Picks Up From Shelf",
      type: "bool",
    },
    Endgame: {
      code: "eg-div",
      title: "Endgame",
      type: "divider",
    },
    "Endgame Returns to Community?": {
      code: "er",
      title: "Returns to Community?",
      type: "bool",
    },
    "Endgame Charging Pad Level": {
      code: "ec",
      title: "Charging Pad Level",
      type: "radio",
      choices: {
        None: "None<br>",
        Docked: "Docked<br>",
        Engaged: "Engaged<br>",
        "Not Observed": "Not Observed",
      },
      defaultValue: "Not Observed",
    },
    "Endgame Time to Dock": {
      code: "et",
      title: "Time to Dock",
      type: "radio",
      choices: {
        "0-5": "0-5 secs<br>",
        "5-15": "5-15 secs<br>",
        "15-30": "15-30 secs<br>",
        "30-more": ">30 secs<br>",
        NA: "Not Attempted<br>",
        "Not Observed": "Not Observed",
      },
      defaultValue: "Not Observed",
    },
    Postmatch: {
      code: "pom-div",
      title: "Postmatch",
      type: "divider",
    },
    "Driver Skill": {
      code: "pdrs",
      title: "Driver Skill",
      type: "radio",
      choices: {
        Low: "Low<br>",
        Medium: "Medium<br>",
        High: "High<br>",
        "Not Observed": "Not Observed",
      },
      defaultValue: "Not Observed",
    },
    "Defense Skill": {
      code: "pdes",
      title: "Defense Skill",
      type: "radio",
      choices: {
        "Didn't Defend": "Didn't Defend<br>",
        Low: "Low<br>",
        Medium: "Medium<br>",
        High: "High<br>",
        "Not Observed": "Not Observed",
      },
      defaultValue: "Not Observed",
    },
    "Defense Tolerance": {
      code: "pdet",
      title: "Defense Tolerance",
      type: "radio",
      choices: {
        "Wasn't Defended": "Wasn't Defended<br>",
        Low: "Low<br>",
        Medium: "Medium<br>",
        High: "High<br>",
        "Not Observed": "Not Observed",
      },
      defaultValue: "Not Observed",
    },
    "Yellow Card": {
      code: "pyc",
      title: "Yellow Card",
      type: "bool",
    },
    "Red Card": {
      code: "prc",
      title: "Red Card",
      type: "bool",
    },
    "Died During Match (put info in comments)": {
      code: "pdd",
      title: "Died",
      type: "bool",
    },
    Comments: {
      code: "co",
      title: "Comments",
      type: "text",
      maxSize: 255,
    },
  },
};
