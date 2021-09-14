var link = document.getElementById('test');

analytics.trackLink(link, 'Clicked Free-Trial Link', {
  plan: 'Enterprise'
});

console.log(link)