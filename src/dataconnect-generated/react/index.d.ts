import { CreateUserData, ListMoviesData, UpdateReviewData, UpdateReviewVariables, GetWatchListData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useListMovies(options?: useDataConnectQueryOptions<ListMoviesData>): UseDataConnectQueryResult<ListMoviesData, undefined>;
export function useListMovies(dc: DataConnect, options?: useDataConnectQueryOptions<ListMoviesData>): UseDataConnectQueryResult<ListMoviesData, undefined>;

export function useUpdateReview(options?: useDataConnectMutationOptions<UpdateReviewData, FirebaseError, UpdateReviewVariables>): UseDataConnectMutationResult<UpdateReviewData, UpdateReviewVariables>;
export function useUpdateReview(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateReviewData, FirebaseError, UpdateReviewVariables>): UseDataConnectMutationResult<UpdateReviewData, UpdateReviewVariables>;

export function useGetWatchList(options?: useDataConnectQueryOptions<GetWatchListData>): UseDataConnectQueryResult<GetWatchListData, undefined>;
export function useGetWatchList(dc: DataConnect, options?: useDataConnectQueryOptions<GetWatchListData>): UseDataConnectQueryResult<GetWatchListData, undefined>;
