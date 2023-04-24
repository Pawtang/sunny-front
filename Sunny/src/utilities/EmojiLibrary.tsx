export const EmojiLibrary = (dayRating: number) => {
  if (dayRating < 2) return "😭";
  else if (dayRating < 3) return "🙁";
  else if (dayRating < 4) return "😐";
  else if (dayRating < 5) return "😊";
  else return "😄";
};
