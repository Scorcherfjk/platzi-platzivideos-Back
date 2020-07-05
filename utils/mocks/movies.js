const moviesMock = [
  {
    title: 'In the Dark',
    year: 2009,
    contentRating: '16+',
    duration: 164,
    cover: 'http://dummyimage.com/800x600.png/99118E/ffffff',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique',
    source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    tags: ['Scripted']
  },
  {
    title: 'Instinct',
    year: 2002,
    contentRating: '16+',
    duration: 137,
    cover: 'http://dummyimage.com/800x600.png/302140/ffffff',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique',
    source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    tags: ['Adventure']
  },
  {
    slug: 'tvshow-4',
    title: 'Grand Hotel',
    year: 2014,
    contentRating: '16+',
    duration: 163,
    cover: 'http://dummyimage.com/800x600.png/5472FF/ffffff',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique',
    source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    tags: ['Comedy']
  },
  {
    title: 'Stargate Atlantis',
    year: 2014,
    contentRating: '16+',
    duration: 194,
    cover: 'http://dummyimage.com/800x600.png/B36F20/ffffff',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique',
    source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    tags: ['Scripted']
  },
  {
    title: 'Final Space',
    year: 2017,
    contentRating: '16+',
    duration: 124,
    cover: 'http://dummyimage.com/800x600.png/CCC539/ffffff',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique',
    source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    tags: ['Scripted']
  },
  {
    title: 'The InBetween',
    year: 2011,
    contentRating: '16+',
    duration: 179,
    cover: 'http://dummyimage.com/800x600.png/FF7A90/ffffff',
    description: 'Vestibulum ac est lacinia nisi venenatis tristique',
    source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    tags: ['Drama']
  },
];

const filteredMoviesMock = (tag) => {
  return moviesMock.filter((movie) => movie.tags.includes(tag))
}

class MoviesServiceMock{
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }

}


module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};