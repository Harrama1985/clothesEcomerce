import {createSelector} from 'reselect'

const selectDirectory = state => state.directory

export const selectDirectorys = createSelector(
    [selectDirectory],
    (directory)=> directory.sections
)