import { db } from '../config/firebase';
import { calculateDate, dateToString, secondToDate } from './source';

export const setProfileData = (uid, userName, weight, gender, lang) => {
  db.collection('profile').doc(uid).set({
    userName, weight, gender, lang,
  });
};

export const setJournalData = (uid, date, amount, drinkId, drinkVol) => {
  db.collection('journal').add({
    uid, date, amount, drinkId, drinkVol,
  });
};

export const getJournalDataDateFiltered = (uid, update, days) => {
  const date = calculateDate(days);
  db.collection('journal')
    .where('uid', '==', uid)
    .where('date', '>', date)
    .orderBy('date')
    .onSnapshot((snap) => {
      const data = [];
      snap.forEach((doc) => {
        // create date from timestamp
        // * 1000 to convert unix timestamp to date format
        const formatedDate = secondToDate(doc.data().date.seconds);
        // create data arr
        data.push([
          dateToString(formatedDate),
          doc.data().amount,
          doc.data().drinkVol,
          doc.data().drinkId,
        ]);
      });
      // set data to the state
      update(data);
    });
};
