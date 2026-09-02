function ($scope, $location) {
  var c = this;


  var RECORD_PRODUCER_SYS_ID = 'ae2cd61183433210de6fc590ceaad3a4';


  c.openRecordProducer = function () {
    $location.url(
      'sp?id=sc_cat_item&sys_id=' + RECORD_PRODUCER_SYS_ID
    );
  };
} .
