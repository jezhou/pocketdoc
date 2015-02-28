// For scoring the collection 

// Environmental Statistics 
cursor = EnvironmentalStats.find();

totalEnvStats = {
gender: 0,
crowding: 0,
landType: 0, 
plumbing: 0, 
mosquitos: 0,
temperature: 0, 
bodyOfWater: 0, 
precipitation: 0, 
latitutde: 0, 
longitude: 0,
envCount: 0
};

cursor.forEach(function(ESObject) {
	totalEnvStats.gender += ESObject.gender;
	totalEnvStats.crowding += ESObject.crowding;
	totalEnvStats.plumbing += ESObject.plumbing; 
	totalEnvStats.mosquitos += ESObject.mosquitos;
	totalEnvStats.temperature += ESObject.temperature; 
	totalEnvStats.bodyOfWater += ESObject.BodyOfWater;
	totalEnvStats.precipitation += ESObject.precipitation; 
	totalEnvStats.latitutde += ESObject.latitutde; 
	totalEnvStats.longitude += ESObject.longitude;
	totalEnvStats.envCount += 1
});

// Individual Statistics
cursor = IndivdualStats.find();

totalInvStats = {
	cough: 0,
	breathing: 0, 
	fatigue: 0, 
	vomit: 0, 
	chills: 0, 
	bodyType: 0,
	hair: 0, 
	breastFeed: 0, 
	stomachPains: 0, 
	stoolDensity: 0, 
	stoolBlood: 0,
	invCount: 0
};

cursor.forEach(function(ISObject) {
	totalInvStats.cough += ISObject.cough;
	totalInvStats.breathing += ISObject.breathing;
	totalInvStats.fatigue += ISObject.fatigue;
	totalInvStats.vomit += ISObject.vomit;
	totalInvStats.chills += ISObject.chills;
	totalInvStats.bodyType += ISObject.bodyType;
	totalInvStats.hair += ISObject.hair;
	totalInvStats.breastFeed += ISObject.breastFeed;
	totalInvStats.stomachPains += ISObject.stomachPains;
	totalInvStats.stoolDensity += ISObject.stoolDensity;
	totalInvStats.stoolBlood += ISObject.stoolBlood;
	totalInvStats.invCount += 1;
});