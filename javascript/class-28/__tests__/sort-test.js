const Movies = require("../movies");
const { inGenre, sortTitle, sortYear } = require("../sort");

describe("Sorters", () => {
  test("can sort movies by year", () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "The Cotton Club",
      "Crocodile Dundee",
      "Beetlejuice",
      "The Shawshank Redemption",
      "Memento",
      "City of God",
      "Ratatouille",
      "Stardust",
      "Valkyrie",
      "The Untouchables",
    ]);
  });

  test("can sort movies by title", () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      "Beetlejuice",
      "City of God",
      "The Cotton Club",
      "Crocodile Dundee",
      "Memento",
      "Ratatouille",
      "The Shawshank Redemption",
      "Stardust",
      "The Untouchables",
      "Valkyrie",
    ]);
  });

  test("can find movies by genre", () => {
    const movies = sortYear(inGenre(Movies, "Adventure"));
    expect(movies.map((m) => m.title)).toEqual([
      "Crocodile Dundee",
      "Stardust",
    ]);
  });
});
