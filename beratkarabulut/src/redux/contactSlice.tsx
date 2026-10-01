import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import emailjs from '@emailjs/browser';
import type { ContactFormValues, ContactState } from '../types/Type';

const DEFAULT_ERROR = 'Something went wrong while sending your message.';

export const sendContactMessage = createAsyncThunk<
    boolean,
    ContactFormValues,
    { rejectValue: string }
>(
    'contact/sendContactMessage',
    async (values, { rejectWithValue }) => {
        try {
            await emailjs.send(
                'service_mj28fus',
                'template_41t31bj',
                {
                    ...values,
                    time: new Date().toLocaleString('tr-TR'),
                },
                'q-piqx8aTI4rxRlvt'
            );

            return true;
        } catch (error) {
            console.error('EmailJS Error:', error);

            const err = error as {
                text?: string;
                message?: string;
            };

            return rejectWithValue(
                err.text || err.message || DEFAULT_ERROR
            );
        }
    }
);

const initialState: ContactState = {
    loading: false,
    success: false,
    error: null,
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,

    reducers: {
        resetContactState: () => initialState,
    },

    extraReducers: (builder) => {
        builder
            .addCase(sendContactMessage.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(sendContactMessage.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                state.error = null;
            })
            .addCase(sendContactMessage.rejected, (state, action) => {
                state.loading = false;
                state.success = false;
                state.error = action.payload || DEFAULT_ERROR;
            });
    },
});

export const { resetContactState } = contactSlice.actions;

export default contactSlice.reducer;