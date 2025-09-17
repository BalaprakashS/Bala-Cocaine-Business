import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateUserData {
  user_insert: User_Key;
}

export interface GetWatchListData {
  watches: ({
    id: UUIDString;
    movie: {
      title: string;
      year: number;
    };
      watchDate: DateString;
  } & Watch_Key)[];
}

export interface ListMoviesData {
  movies: ({
    id: UUIDString;
    title: string;
    year: number;
  } & Movie_Key)[];
}

export interface MovieListEntry_Key {
  movieListId: UUIDString;
  movieId: UUIDString;
  __typename?: 'MovieListEntry_Key';
}

export interface MovieList_Key {
  id: UUIDString;
  __typename?: 'MovieList_Key';
}

export interface Movie_Key {
  id: UUIDString;
  __typename?: 'Movie_Key';
}

export interface Review_Key {
  id: UUIDString;
  __typename?: 'Review_Key';
}

export interface UpdateReviewData {
  review_update?: Review_Key | null;
}

export interface UpdateReviewVariables {
  id: UUIDString;
  text?: string | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

export interface Watch_Key {
  id: UUIDString;
  __typename?: 'Watch_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface ListMoviesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMoviesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMoviesData, undefined>;
  operationName: string;
}
export const listMoviesRef: ListMoviesRef;

export function listMovies(): QueryPromise<ListMoviesData, undefined>;
export function listMovies(dc: DataConnect): QueryPromise<ListMoviesData, undefined>;

interface UpdateReviewRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateReviewVariables): MutationRef<UpdateReviewData, UpdateReviewVariables>;
  operationName: string;
}
export const updateReviewRef: UpdateReviewRef;

export function updateReview(vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;
export function updateReview(dc: DataConnect, vars: UpdateReviewVariables): MutationPromise<UpdateReviewData, UpdateReviewVariables>;

interface GetWatchListRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetWatchListData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetWatchListData, undefined>;
  operationName: string;
}
export const getWatchListRef: GetWatchListRef;

export function getWatchList(): QueryPromise<GetWatchListData, undefined>;
export function getWatchList(dc: DataConnect): QueryPromise<GetWatchListData, undefined>;

