import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// GET
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await fetch(
      "http://terlan125-001-site1.ftempurl.com/api/information"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json(); // Burada düzeltme yapıldı
    return data;
  } catch (error) {
    console.error("Fetch data failed:", error); // Hata loglanıyor
    throw error; // Hata dışarı atılıyor
  }
});

// POST
export const postData = createAsyncThunk("data/postData", async (postData) => {
  try {
    const response = await fetch(
      "http://terlan125-001-site1.ftempurl.com/api/information/SendAll",
      {
        method: "POST",
        body: JSON.stringify(postData),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();

    // Başarılı işlem sonrasında toast gösterimi (toast'un nasıl çalıştığınıza bağlı olarak)
    toast.success("Əməliyyat uğurla yerinə yetirildi");

    return responseData;
  } catch (error) {
    // Hata durumunda kullanıcıya bilgi vermek için bir hata fırlatabilirsiniz.
    throw new Error("Network error: " + error.message);
  }
});
