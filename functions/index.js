const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.isUserAdmin = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be logged in');
  }

  const uid = context.auth.uid;
  const userRef = admin.database().ref(`admins/${uid}`);
  const snapshot = await userRef.once('value');
  
  return { isAdmin: snapshot.exists() };
});
