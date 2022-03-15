export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J.Fowler",
      price: 20,
      coverImage:
        "https://static01.nyt.com/images/2021/11/30/books/30TenBest-02/30TenBest-02-mobileMasterAt3x.jpg",
    },
    {
      id: 2,
      title: "Release it!",
      author: "Michael T. Nygard",
      price: 35,
      coverImage:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634487762l/56898145.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }
}
