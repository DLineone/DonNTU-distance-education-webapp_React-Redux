import { configureStore } from "@reduxjs/toolkit";
import groupsSlice from "./groups-slice";
import teacherDisciplinesSlice from "./teacher-disciplines-slice";
import teacherProfileSlice from "./teacher-profile-slice";
import teacherInstitutionsSlice from "./teacher-institutes-slice";
import teacherFacultiesSlice from "./teacher-faculties-slice";
import teacherDepartmentsSlice from "./teacher-departments-slice";
import teacherTeachersSlice from "./teacher-teachers-slice";
import teacherFlowsSlice from "./teacher-flows-slice";
import teacherFlowDiscsSlice from "./teacher-flow-disc-slice";

const store = configureStore({
    reducer: {
        groups: groupsSlice.reducer,
        tc_disciplines: teacherDisciplinesSlice.reducer,
        tc_profile: teacherProfileSlice.reducer,
        tc_institutions: teacherInstitutionsSlice.reducer,
        tc_faculties: teacherFacultiesSlice.reducer,
        tc_departments: teacherDepartmentsSlice.reducer,
        tc_teachers: teacherTeachersSlice.reducer,
        tc_flows: teacherFlowsSlice.reducer,
        tc_flowdiscs: teacherFlowDiscsSlice.reducer
    }
});

export default store;