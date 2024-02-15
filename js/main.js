(() => {
  navigator.serviceWorker.register('/sw.js');
  getData();
})();

function getData() {
  //fetch some data then add it to #datalist on the page.
}
