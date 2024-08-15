type Profile = [
  {
    Id: string,
    name: string,
    fname: string,
    email: string,
    city: string,
    state: string,
    zipCode: number,
  }
];
type TestQuestion = [
  { id: string, profileId: string, type: "Test", answer: { option: number } }
];
type DescriptiveQuestion = [
  {
    id: string,
    profileId: string,
    type: "Descriptive",
    answer: { description: string },
  }
];
type BlankQuestion = [
  {
    id: string,
    profileId: string,
    type: "Blank",
    answer: {
      option1: string,
      option2: string,
      option3: string,
      option4: string,
    },
  }
];

export { Profile, TestQuestion, DescriptiveQuestion, BlankQuestion };
