
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];
                

 const articleList = document.querySelector('#book-list');

movies.forEach(book => {
      // Code for going through each movie and creating content for that movie
  const article = document.createElement('article');
  article.className = 'book';

let html= `<article class="book">
          <div class="book-content">
            <h2>Septimus Heap Book One: Magyk</h2>
            <img src="img/Magkycover2.jpg" alt="Picture of Septimus Heap Book One: Magyk">
            <p id="book-description">If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.</p>
          </div>
          <div class="book-info">
            <p><strong>July 5,2022</strong> </p>
            <p><strong>10-14</strong></p>
            <p><strong>Fantasy</strong> Action/Adventure</p>
            <p><span aria-label="5 out of 5 stars" role="img">⭐⭐⭐⭐⭐</span></p>
          </div>
        </article>`
          `;

  article.innerHTML = html;
  movieList.appendChild(article);
});
