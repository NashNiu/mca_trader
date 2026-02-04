$(() => {
  getNewsList();
});

function getNewsList() {
  $.ajax({
    url: `${location.origin}/top_news/news_7x24_noauth`,
    type: 'get',
    success(res) {
      let html = '';
      for (let i = 0; i < 3; i++) {
        const { time } = res.data[i];
        const indexOne = time.indexOf('年');
        const indexTwo = time.indexOf('月');
        const indexThree = time.indexOf('日');

        html = `${html
        }<div class='col-lg-4'><div class='featured-imagebox featured-imagebox-post style1'><div class='featured-thumbnail'><img class='img-fluid' src='${
          res.data[i].image
        }'></div><div class='featured-content'><div class='post-title featured-title'><h3><a style='font-size:16px' href='newsDetails.html?id=${
          res.data[i].articleId
        }'>${
          res.data[i].title
        }</a></h3></div><div>${
          res.data[i].time
        }</div><a class='ttm-btn ttm-btn-size-md ttm-btn-color-darkgrey btn-inline' href='newsDetails.html?id=${
          res.data[i].articleId
        }' tabindex='-1'></a></div></div></div>`;
      }
      $('#newsBoxId').html(html);
    },
  });
}
