import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'canteen-management',
  location: 'us-central1'
};

export const createUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser');
}
createUserRef.operationName = 'CreateUser';

export function createUser(dc) {
  return executeMutation(createUserRef(dc));
}

export const listMoviesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMovies');
}
listMoviesRef.operationName = 'ListMovies';

export function listMovies(dc) {
  return executeQuery(listMoviesRef(dc));
}

export const updateReviewRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateReview', inputVars);
}
updateReviewRef.operationName = 'UpdateReview';

export function updateReview(dcOrVars, vars) {
  return executeMutation(updateReviewRef(dcOrVars, vars));
}

export const getWatchListRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWatchList');
}
getWatchListRef.operationName = 'GetWatchList';

export function getWatchList(dc) {
  return executeQuery(getWatchListRef(dc));
}

