import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateType, UserType } from "../@types";

const initialState: initialStateType = {
  incomingUser: undefined,
  onCall: false,
  isMicMute: false,
  isLoudSpeaker: false,
};

const callState = createSlice({
  name: "call",
  initialState,
  reducers: {
    setIncomingID: (state, action: PayloadAction<UserType>) => {
      state.incomingUser = action.payload;
    },
    setOnCall: (state, action: PayloadAction<boolean>) => {
      state.onCall = action.payload;
    },
    setIsMicMute: (state, action: PayloadAction<boolean>) => {
      state.isMicMute = action.payload;
    },
    setIsLoudSpeaker: (state, action: PayloadAction<boolean>) => {
      state.isLoudSpeaker = action.payload;
    },
  },
});

export default callState;
