function getAPK(){
  ga('send', {
  hitType: 'event',
  eventCategory: 'App',
  eventAction: 'click',
  eventLabel: 'APK Download'
});
  window.location.href = 'covidsg.apk';
}
