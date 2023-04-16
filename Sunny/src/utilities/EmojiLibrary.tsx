export const EmojiLibrary = (quality: number) => {
  if (quality < 2) return "😭";
  else if (quality < 3) return "🙁";
  else if (quality < 4) return "😐";
  else if (quality < 5) return "😊";
  else return "😄";
};
