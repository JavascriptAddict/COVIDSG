function getAPK(){

ga('send', 'event', {
  eventCategory: 'APK Download',
  eventAction: 'click',
  eventLabel: 'download',
  transport: 'beacon'
});
window.location.href = 'covidsg.apk';

}
