import firebaseDb from "./config";
const insertFunc = (value) => {
  firebaseDb.child(`contacts`).push(value, (err) => {
    console.log("insert data", err);
  });
};
const getFunc = () => {
  let data = {};
  firebaseDb.child("contacts").on("value", (snapshot) => {
    if (snapshot.val() != null) {
      data = snapshot.val();
    }
  });
  return data;
};

const updateFunc = (id, value) => {
  firebaseDb.child(`contacts/${id}`).set(value, (err) => {
    console.log(err);
  });
};
const deleteFunc = (id) => {
  firebaseDb.child(`contacts/${id}`).remove((err) => {
    console.log(err);
  });
};
const API = {
  insertFunc,
  getFunc,
  updateFunc,
  deleteFunc,
};
export default API;
