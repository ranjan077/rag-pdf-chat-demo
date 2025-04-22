const uploadFile = async (formData) => {
  try {
    const urlEncoded = new URLSearchParams(formData);
    const response = await fetch("http://localhost:8000/upload/pdf", {
      method: "POST",
      body: urlEncoded,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }
  } catch (error) {
    console.log(error);
  }
};

export default uploadFile;
