const class_names = [
  'barbarian',
  'bard',
  'cleric',
  'druid',
  'fighter',
  'monk',
  'paladin',
  'ranger',
  'rogue',
  'sorcerer',
  'warlock',
  'wizard'
];

const class_map = {};
class_map[class_names[0]] = 'Barbarian';
class_map[class_names[1]] = 'Bard';
class_map[class_names[2]] = 'Cleric';
class_map[class_names[3]] = 'Druid';
class_map[class_names[4]] = 'Fighter';
class_map[class_names[5]] = 'Monk';
class_map[class_names[6]] = 'Paladin';
class_map[class_names[7]] = 'Ranger';
class_map[class_names[8]] = 'Rogue';
class_map[class_names[9]] = 'Sorcerer';
class_map[class_names[10]] = 'Warlock';
class_map[class_names[11]] = 'Wizard';

const subclass_names = [
  'berserker',
  'lore',
  'life',
  'land',
  'champion',
  'openhand',
  'devotion',
  'hunter',
  'thief',
  'draconic',
  'fiend',
  'evocation'
];

const subclass_map = {};
subclass_map[subclass_names[0]] = 'Berserker';
subclass_map[subclass_names[1]] = 'Lore';
subclass_map[subclass_names[2]] = 'Life';
subclass_map[subclass_names[3]] = 'Land';
subclass_map[subclass_names[4]] = 'Champion';
subclass_map[subclass_names[5]] = 'Open Hand';
subclass_map[subclass_names[6]] = 'Devotion';
subclass_map[subclass_names[7]] = 'Hunter';
subclass_map[subclass_names[8]] = 'Thief';
subclass_map[subclass_names[9]] = 'Draconic';
subclass_map[subclass_names[10]] = 'Fiend';
subclass_map[subclass_names[11]] = 'Evocation';

const race_names = [
  'dwarf',
  'elf',
  'halfling',
  'human',
  'dragonborn',
  'gnome',
  'half-elf',
  'half-orc',
  'tiefling'
];
const race_map = {};
race_map[race_names[0]] = 'Dwarf';
race_map[race_names[1]] = 'Elf';
race_map[race_names[2]] = 'Halfling';
race_map[race_names[3]] = 'Human';
race_map[race_names[4]] = 'Dragonborn';
race_map[race_names[5]] = 'Gnome';
race_map[race_names[6]] = 'Half-Elf';
race_map[race_names[7]] = 'Half-Orc';
race_map[race_names[8]] = 'Tiefling';

const subrace_names = ['hill-dwarf', 'high-elf', 'lightfoot-halfling', 'rock-gnome'];
const subrace_map = {};
subrace_map[subrace_names[0]] = 'Hill Dwarf';
subrace_map[subrace_names[1]] = 'High Elf';
subrace_map[subrace_names[2]] = 'Lightfoot Halfling';
subrace_map[subrace_names[2]] = 'Rock Gnome';

const proficiency_categories = [
  'armor',
  'weapons',
  'artisans-tools',
  'gaming-sets',
  'musical-instruments',
  'vehicles',
  'other',
  'skills',
  'saving-throws'
];
const proficiency_map = {};
proficiency_map[proficiency_categories[0]] = 'Armor';
proficiency_map[proficiency_categories[1]] = 'Weapons';
proficiency_map[proficiency_categories[2]] = "Artisan's Tools";
proficiency_map[proficiency_categories[3]] = 'Gaming Sets';
proficiency_map[proficiency_categories[4]] = 'Musical Instruments';
proficiency_map[proficiency_categories[5]] = 'Vehicles';
proficiency_map[proficiency_categories[6]] = 'Other';
proficiency_map[proficiency_categories[7]] = 'Skills';
proficiency_map[proficiency_categories[8]] = 'Saving Throws';

// TODO: I'm pretty sure all of these `is___Name` methods would translate better as routes on the type it's checking
function isClassName(class_name) {
  let bool = false;

  class_names.forEach(function(element) {
    if (class_name === element) {
      bool = true;
    }
  });

  return bool;
}

function isSubclassName(subclass_name) {
  let bool = false;

  subclass_names.forEach(function(element) {
    if (subclass_name === element) {
      bool = true;
    }
  });

  return bool;
}

function isRaceName(race_name) {
  let bool = false;

  race_names.forEach(function(element) {
    if (race_name === element) {
      bool = true;
    }
  });

  return bool;
}

function isSubraceName(race_name) {
  let bool = false;

  subrace_names.forEach(function(element) {
    if (race_name === element) {
      bool = true;
    }
  });

  return bool;
}

function isProficiencyCategory(race_name) {
  let bool = false;

  proficiency_categories.forEach(function(element) {
    if (race_name === element) {
      bool = true;
    }
  });

  return bool;
}

function APIResource(data) {
  return {
    count: data.length,
    results: data.map(item => {
      return {
        index: item.index,
        url: item.url
      };
    })
  };
}

function ClassAPIResource(data) {
  return {
    count: data.length,
    results: data.map(item => {
      return {
        index: item.index,
        class: item.class.name,
        url: item.url
      };
    })
  };
}

function NamedAPIResource(data) {
  let mapped = data.map(item => {
    return {
      index: item.index,
      name: item.name,
      url: item.url
    };
  });

  return {
    count: data.length,
    results: mapped
  };
}

function NamedAPIResourceWithDesc(data) {
  return {
    count: data.length,
    results: data.map(item => {
      return {
        index: item.index,
        name: item.name,
        url: item.url,
        desc: item.desc[0]
      };
    })
  };
}

//TODO: Clear out what isn't being used.

var utility = {
  isClassName,
  isSubclassName,
  isRaceName,
  isSubraceName,
  isProficiencyCategory,
  APIResource,
  NamedAPIResource,
  NamedAPIResourceWithDesc,
  ClassAPIResource,
  subrace_map,
  proficiency_map,
  class_map,
  race_map,
  subclass_map
};

module.exports = utility;
