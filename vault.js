'use strict';

module.exports = function() {
  var storage = {};
  return {
    setValue : function(key, value) {
      storage.key = key;
      storage.value = value;
    },
    getValue : function(key) {
      if (key === undefined) {
        return null;
      } else if (key === storage.key) {
        return storage.value;
      } else {
        return null;
      }
    }
  };
};
