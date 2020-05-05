function getAPK(){

window.location.href = 'covidsg.apk';
ga('send', 'event', {
  eventCategory: 'APK Download',
  eventAction: 'click',
  eventLabel: 'download',
  transport: 'beacon'
});
 
}
