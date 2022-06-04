export const initialState = {
  user: null,
  // playlist: [
  //   "Playlist 1",
  //   "Playlist 2",
  //   "Playlist 3",
  //   "Playlist 4",
  //   "Playlist 5",
  //   "Playlist 6",
  //   "Playlist 7",
  //   "Playlist 8",
  //   "Playlist 9",
  //   "Playlist 10",
  //   "Playlist 11",
  //   "Playlist 12",
  //   "Playlist 13",
  //   "Playlist 14",
  //   "Playlist 15",
  //   "Playlist 16",
  //   "Playlist 1",
  //   "Playlist 2",
  //   "Playlist 3",
  //   "Playlist 4",
  //   "Playlist 5",
  //   "Playlist 6",
  //   "Playlist 7",
  //   "Playlist 8",
  //   "Playlist 9",
  //   "Playlist 10",
  //   "Playlist 11",
  //   "Playlist 12",
  //   "Playlist 13",
  //   "Playlist 14",
  //   "Playlist 15",
  //   "Playlist 16",
  // ],
  playlist: [],
  playing: false,
  item: null,
  // token:
  //   "BQD7r0iDp8w-rzx8bazg-EdiWoazb3AFIPrztc_JtoLF3FEJsnsuUzBe5insxnEhGrll6D_WI2sl9uUW65YA2fHYZbbQ8UbAWT2r9TdTcyESSSWjXBhGwuKBOgyZnulSEuibmB67KB0mkDqzed6AlQm_2Y5SmhvZxc633KmVjgEE4ZzkeJnB",
};

const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISt":
      return {
        ...state,
        playlist: action.playlist,
      };
    case "SET_DISCOVERWEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
