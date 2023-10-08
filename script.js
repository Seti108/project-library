/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: "./books-images/harry-potter-and-the-sorcerer.jpg"
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
]

//As sort modifies the array, I create a copy to be able to display both the original and a sorted array
let modifiedBooks = [...books];

// Selectors
const container = document.querySelector('.container');
const linkSortByDate = document.querySelector('#date');
const linkSortByRating = document.querySelector('#rating');
const navChevronDate = document.querySelector('#nav-chevron-date');
const navChevronRating = document.querySelector('#nav-chevron-rating');
const genreDropdown = document.querySelector('#genre-dropdown');

// Globals
// I needed some variables to indicate if the array was sorted (feedback welcome)
let dateIsSorted;
let ratingIsSorted;
const uniqueGenres = new Set();

// TASK - Your page should display all of the elements (and their information) in the chosen array when the website is loaded

// Display all the cards on page load

renderBooks(books);

// A function to reset all filters/sortings

const init = ()=> {
  navChevronDate.classList.add('nav-chevron-hide');
  navChevronRating.classList.add('nav-chevron-hide');
  genreDropdown.value = 'no genre';
  renderBooks(books);
}

//Build a function that renders the cards on the page
// A function that takes an array as an argument and loops over every entry and produces the html for the cards

function renderBooks(booksArray){
  container.innerHTML = "";
  booksArray.forEach(book => {
    // Make a variable that contains the markup and variables
    let html = `
    <div class="card">
    <div class="text">
      <div class="title">
        <span>${book.title}</span>
      </div>
      <div class="author-year flex-space-apart">
        <span class="author">${book.author}</span>
        <span class="year">${book.year}</span>
      </div>
      <div class="description">
        <p>${book.description}</p>
      </div>
      <div class="genre-rating flex-space-apart">
        <p class="genre">${book.genre}</p>
        <span class="rating">⭐ ${book.rating}/5</span>
      </div>
    </div>
    <div class="image">
      <img src="${book.image}" alt="photo of book">
    </div>
  </div>
    `
  // Render every element from the array by adding the markup to the container element
  container.innerHTML += html;
  });
}


//  TASK- Your page should have at least one `filter`, e.g. on genre or cuisine type

// Populate the "Genre dropdown" with the genres in the array (no duplicates), used Set() for this

books.forEach((book) => {
  if(uniqueGenres.has(book.genre)){
    return;
  } else {
    let html = `
    <option value="${book.genre}">${book.genre}</option>
    `
    genreDropdown.innerHTML += html;
    uniqueGenres.add(book.genre);
  }
})

//Add an event listener to listen to the change of "value" in dropdown
// Add a function that resets all chevrons (icons to indicate sort order)
const resetChevrons = ()=> {
  navChevronDate.classList.add('nav-chevron-hide');
  navChevronRating.classList.add('nav-chevron-hide');
  toggleChevron(navChevronRating, false);
  toggleChevron(navChevronDate, false);
}
genreDropdown.addEventListener('change', (e)=> {
  resetChevrons();
  dateIsSorted = false;
  ratingIsSorted = false;
  if(genreDropdown.value === 'no genre'){
    renderBooks(books);
  } else {
    //Create a function that filters by the selected genre
    modifiedBooks = books.filter((selectedGenre)=> {return selectedGenre.genre === genreDropdown.value});
    renderBooks(modifiedBooks);
  }
 
})


// - TASK Your page should be able to `sort` on at least one property, e.g.
//   for books:
//     - from newest to oldest and vice versa
//     - from the highest to lowest rating and vice versa

// A function to sort by date and rating (attribute) (takes argument of a boolean value to reverse the array)

const sortByAttribute = function(array, attribute, reverse){
  if (reverse) {
    array.sort((a, b) => a[attribute] - b[attribute]);
  } else {
    array.sort((a, b) => b[attribute] - a[attribute]);
  }
  renderBooks(modifiedBooks);
}

// A function that toggles the chevron up/down for ease of use in the program

const toggleChevron = function(chevron, toggle) {
  if (toggle){
    chevron.src = './books-images/chevron-up-icon.png';
  } else {
    chevron.src = './books-images/chevron-down-icon.png';
  }
}

//An event listener that sorts an array of objects by "year" with possibility to reverse it on additional click

linkSortByDate.addEventListener('click',()=> {
  toggleChevron(navChevronRating, false);
  ratingIsSorted = false;
  navChevronDate.classList.remove('nav-chevron-hide');
  navChevronRating.classList.add('nav-chevron-hide');
  if(dateIsSorted) {
    sortByAttribute(modifiedBooks, "year", true);
    toggleChevron(navChevronDate, false);
    dateIsSorted = false;
  } else {
    sortByAttribute(modifiedBooks, "year", false);
    toggleChevron(navChevronDate, true);
    dateIsSorted = true;
  }
} )

//An event listener that sorts an array of objects by "rating" with possiblity to reverse it on additional click

linkSortByRating.addEventListener('click',()=> {
  toggleChevron(navChevronDate, false);
  dateIsSorted = false;
  navChevronDate.classList.add('nav-chevron-hide');
  navChevronRating.classList.remove('nav-chevron-hide');
  if(ratingIsSorted) {
    sortByAttribute(modifiedBooks, "rating", true);
    toggleChevron(navChevronRating, false);
    ratingIsSorted = false;
  } else {
    sortByAttribute(modifiedBooks, "rating", false);
    toggleChevron(navChevronRating, true);
    ratingIsSorted = true;
  }
} )


