// Tạo ra store chứa dữ liệu
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // demo về lưu trữ dữ liệu trên store
    hoTen: (state, action) => {
      // bắt những tín hiệu dispatch được gửi từ component lên
      console.log(action);
      if (action.type == 'CHANGE_NAME') {
        return action.payload;
      }
      if (action.type == 'TANG_GIAM_GIA_TRI') {
      }
      return 'Đông Trần';
    },
  },
});
