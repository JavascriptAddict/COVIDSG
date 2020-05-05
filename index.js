var clientId = ga.getAll()[0].get('clientId');

 ga('create', 'UA-165610630-1', {
        'clientId': clientId
    });

function getAPK(){

 ga('send', 'event', {
   'eventCategory': 'APK Download', //required
   'eventAction': 'download', //required
   'eventLabel': 'APK Download',
   'eventValue': 1,
   'hitCallback': function() {
       console.log('Sent!!');
       window.location.href = 'covidsg.apk'; 
      //callback function
    },
   'hitCallbackFail' : function () {
      console.log("Unable to send Google Analytics data");
      //callback function
   }
}
