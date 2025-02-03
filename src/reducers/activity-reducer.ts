import { Activity } from "../types";

export type ActivityActions =
  | { type: "save-activity"; payload: { newActivity: Activity } }
  | { type: "sat-activeId"; payload: { id: Activity["id"] } };

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

export const initialState: ActivityState = {
  activities: [],
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "save-activity") {
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }

  if (action.type === "sat-activeId") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  return state;
};
