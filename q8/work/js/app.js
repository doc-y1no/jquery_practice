// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });


$(document).ready(function() {
  const searchBtn = $('.search-btn');
  const resetBtn = $('.reset-btn');
  const searchInput = $('#search-input');
  const lists = $('.lists');

  let pageCount = 1;
  let lastSearchWord = '';

  function displayResult(results) {
    lists.empty();
    if (!results || results.length === 0) {
      lists.append('<li class="lists-item message">見つかりませんでした。もう一度検索してください。</li>');
      return;
    }

    results.forEach(item => {
      const title = item['title'] || 'No Title';
      let author = 'No Author';
      if (item['dc:creator']) {
        author = Array.isArray(item['dc:creator']) ? item['dc:creator'].join(', ') : item['dc:creator'];
      }
      const publisher = item['dc:publisher'] ? item['dc:publisher'][0] : 'No Publisher';
      const bookInfo = item['description'] ? item['description'] : '書籍情報';

      const listItem = $(`
        <li class="lists-item">
          <div class="list-inner">
            <p><strong>タイトル:</strong> ${title}</p>
            <p><strong>作者:</strong> ${author}</p>
            <p><strong>出版社:</strong> ${publisher}</p>
            <p><strong>書籍情報:</strong> ${bookInfo}</p>
          </div>
        </li>
      `);
      lists.append(listItem);
    });
  }

  function displayError(err) {
    lists.empty();
    lists.append('<li class="lists-item message">通信エラーが発生しました。</li>');
    throw new Error('通信エラーが発生しました: ' + err.statusText);
  }

  searchBtn.on('click', function() {
    const searchWord = searchInput.val();
    if (!searchWord) {
      alert('検索ワードを入力してください。');
      return;
    }

    if (searchWord === lastSearchWord) {
      pageCount++;
    } else {
      pageCount = 1;
      lastSearchWord = searchWord;
    }

    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${encodeURIComponent(searchWord)}&format=json&p=${pageCount}&count=20`,
      "method": "GET",
    };

    $.ajax(settings).done(function(response) {
      console.log(response); // デバッグ用に追加
      try {
        const result = response['@graph'][0]['items'];
        displayResult(result);
      } catch (e) {
        console.error('Error parsing response:', e);
        lists.empty();
        lists.append('<li class="lists-item message">見つかりませんでした。もう一度検索してください。</li>');
        throw new Error('検索結果の解析中にエラーが発生しました: ' + e.message);
      }
    }).fail(function(err) {
      displayError(err);
    });
  });

  resetBtn.on('click', function() {
    searchInput.val('');
    lists.empty();
    pageCount = 1;
    lastSearchWord = '';
  });
});
