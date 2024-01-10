import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// GET
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await fetch("http://localhost:3000/posts");
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
  toast.success("Əməliyyat uğurla yerinə yetirildi");

  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
});
