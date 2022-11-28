const initialState = [
  {
    id: 1,
    title: "Apprendre Redux",
    content: "Comment apprendre redux avec react",
    createAt: Date.now(),
  },
  {
    id: 2,
    title: "Apprendre React-Redux",
    content: "Comment creer un store",
    createAt: Date.now(),
  },
  {
    id: 3,
    title: "Apprendre les actions dans Redux",
    content: "Comment creer une action",
    createAt: Date.now(),
  },
];

export const postReducer = (state = initialState) => {
  return state;
};
