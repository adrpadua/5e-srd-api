const redis = require('redis');
const { redisUrl } = require('../../util');

const ClassAPIResource = data => {
  const mapped = data.map(item => {
    return {
      index: item.index,
      class: item.class.name,
      url: item.url
    };
  });

  return {
    count: data.length,
    results: mapped
  };
};

const NamedAPIResource = data => {
  const mapped = data.map(item => {
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
};

const escapeRegExp = string => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
};

const redisClient = redis.createClient(redisUrl);
const closeRedisClient = callback => {
  redisClient.quit(callback);
};

module.exports = {
  NamedAPIResource,
  ClassAPIResource,
  escapeRegExp,
  redisClient,
  closeRedisClient
};
