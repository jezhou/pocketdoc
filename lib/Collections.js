EnvironmentStats = new Meteor.Collection("estats");

EnvironmentStats.attachSchema(new SimpleSchema({
  gender: {
    type: Boolean,
    label: "Female?",
  },
  crowding: {
    type: Number,
    label: "Crowding",
    min: 0,
    max: 100
  },
  landType: {
    type: Number,
    label: "Landtype",
    min: 0,
    max: 100
  },
  plumbing: {
    type: Number,
    label: "Plumbing",
    min: 0,
    max: 100
  },
  mosquitos: {
    type: Number,
    label: "Mosquitos",
    min: 0,
    max: 100
  },
  temperature: {
    type: Number,
    label: "Temperature",
    min: 0,
    max: 100
  },
  bodyOfWater: {
    type: Number,
    label: "Bodies of water",
    min: 0,
    max: 100
  },
  precipitation: {
    type: Number,
    label: "Precipitation",
    min: 0,
    max: 100
  },
}));

function ESObject(gen, crowd, land, plumb, mosq,
 temp, water, precip, lat, lon){
  this.gender = gen;
  this.crowding = crowd;
  this.landType = land;
  this.plumbing = plumb;
  this.mosquitos = mosq;
  this.temperature = temp;
  this.bodyOfWater = water;
  this.precipitation = precip;
}

IndividualStats = new Meteor.Collection("istats");

IndividualStats.attachSchema(new SimpleSchema({
  cough: {
    type: Number,
    label: "Coughing",
    min: 0,
    max: 3,
  },
  breathing: {
    type: Number,
    label: "Breathing",
    min: 0,
    max: 100
  },
  fatigue: {
    type: Number,
    label: "Fatigue",
    min: 0,
    max: 100,
  },
  vomit: {
    type: Number,
    label: "Vomit",
    min: 0,
    max: 100,
  },
  chills: {
    type: Number,
    label: "Chills",
    min: 0,
    max: 100,
  },
  bodyType: {
    type: Number,
    label: "Body Type",
    min: 0,
    max: 100,
  },
  hair: {
    type: Number,
    label: "Amount of Hair",
    min: 0,
    max: 100,
  },
  breastFeed: {
    type: Number,
    label: "Breast feed",
    min: 0,
    max: 100,
  },
  stomachPains: {
    type: Number,
    label: "Stomach Pain",
    min: 0,
    max: 100
  },
  stoolDensity: {
    type: Number,
    label: "Stool Density",
    min: 0,
    max: 100
  },
  stoolBlood: {
    type: Boolean,
    label: "Blood in Stool",
  },
}));

function ISObject(cough, breathing, fatigue, vomit, chills, bodyType,
  hair, breastFeed, stomachPains, stoolDensity, stoolBlood ){
  this.cough = cough;
  this.breathing = breathing;
  this.fatigue = fatigue;
  this.vomit = vomit;
  this.chills = chills;
  this.bodyType = bodyType;
  this.hair = hair;
  this.breastFeed = breastFeed;
  this.stomachPains = stomachPains;
  this.stoolDensity = stoolDensity;
  this.stoolBlood = stoolBlood;
}
