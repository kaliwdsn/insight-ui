'use strict';

angular
    .module('insight.assets')
    .factory('Asset', function($resource, Api) {
        return $resource('http://copay.gat.hoopox.com:8080/v3/assetmetadata/:assetId/:utxo', {
            assetId: '@assetId',
            utxo: '@utxo'
        });
    });
