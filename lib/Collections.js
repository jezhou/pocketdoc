EnvironmentStats = new Meteor.Collection("estats");

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
	this.latitute = lat;
	this.longitute = lon;
}

IndividualStats = new Meteor.Collection("istats");

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