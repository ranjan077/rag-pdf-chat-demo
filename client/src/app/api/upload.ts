const uploadFile = async (formData) => {
  try {
    const response = await fetch("http://localhost:8000/upload/pdf", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }
  } catch (error) {
    console.log(error);
  }
};

export default uploadFile;
