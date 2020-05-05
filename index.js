function getAPK(){
 ga('send', 'event', 'APK Download', 'download', {
    hitCallback: function() {
      window.location.href = 'covidsg.apk';
    }
  });   
}
