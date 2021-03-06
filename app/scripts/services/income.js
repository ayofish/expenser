'use strict';

/**
 * @ngdoc service
 * @name expenserApp.income
 * @description
 * # income
 * Service in the expenserApp.
 */
angular.module('expenserApp')
  .service('income', ['const_db', '$webSql', function(const_db, $webSql) {
  	var db = $webSql.openDatabase(const_db.name, const_db.version, const_db.desc, const_db.size);
    // AngularJS will instantiate a singleton by calling "new" on this function
  }]);
