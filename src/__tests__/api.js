import * as api from "../api";

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});

test("should get user from localStorage", () => {
  const persona = "Steffe";
  api.storeCurrentPersona(persona);
  expect(api.fetchCurrentPersona()).toMatch(persona);
});

test("should add comment to localStorage", () => {
  const comment = "blablabla";
  api.storeCommentObject(comment);
  expect(api.fetchAllComments()).toMatch(comment);
});

test("should add post", () => {
  const post = "bla bla bla";
  api.storePostObject(post);
  expect(api.fetchAllPosts()).toMatch(post);
});

test("should contain default user Zac", () => {
  expect(api.fetchCurrentPersona()).toBe("Zac");
});

test("should remove comment", () => {
  const comment = "blabla";
  const postId = "1231d";
  const author = "pelle";
  const commentObj = api.createCommentObject(comment, postId, author);
  api.storeCommentObject([commentObj]);
  api.removeComment(commentObj.id);
  expect(api.fetchAllComments()).toStrictEqual([]);
});

test("should remove post", () => {
  const title = "blaawd12";
  const content = "1231d";
  const author = "pelle";
  const postObj = api.createPostObject(title, content, author);
  api.storePostObject([postObj]);
  api.removePost(postObj.id);
  expect(api.fetchAllPosts()).toStrictEqual([]);
});
