export const EmojiLibrary = (dayRating: number) => {
  // if (dayRating < 2) return "😭";
  // else if (dayRating < 3) return "🙁";
  // else if (dayRating < 4) return "😐";
  // else if (dayRating < 5) return "😊";
  // else return "😄";
  if (dayRating < 2) return "crying";
  else if (dayRating < 3) return "sad";
  else if (dayRating < 4) return "neutral";
  else if (dayRating < 5) return "smiling";
  else return "grinning";
};
