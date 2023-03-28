import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./tuits-service";

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits',
    async () => {
      const tuits = await service.findTuits();
      return tuits;
    }
);

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId);
      return tuitId;
});

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
      async (tuit) => {
            const newTuit = await service.createTuit(tuit);
            return newTuit;
});

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) => {
      const status = await service.updateTuit(tuit);
      return status;
    }
);



