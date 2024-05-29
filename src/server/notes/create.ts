"use server";

export const createNote = async (formData: FormData) => {
    if(formData.get("title") == "" && formData.get("content") == "") {
        throw new Error("Title and content are required to create a note");
    }

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(`Creating note with title: ${title} and content: ${content}`);
    return {
        id: 1,
        title,
        content,
        createdAt: new Date(),
    };
}