import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { store } from '../../../../store/store'
import { formMutEmpty, IFormMutation } from './card-mutation'

export type Props = {
  formMutation: IFormMutation
}

const initialState: Props = {
  formMutation: formMutEmpty
}

export const cardMutationSlice = createSlice({
  name: 'form-mutation',
  initialState,
  reducers: {
    changeFormMutation: (
      state,
      action: PayloadAction<IFormMutation>
    ) => {
      state.formMutation = action.payload
    }
  }
})

export const { changeFormMutation } = cardMutationSlice.actions
export type cardMutationState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
