"use server";

export async function createComment() {
    const { createComment : _createComment } = await import("./create-comment");
    return _createComment;
}

export async function createPost() {
    const { createPost : _createPost } = await import("./create-post");
    return _createPost;
}

export async function createTopic() {
    const { createTopic : _createTopic } = await import("./create-topic");
    return _createTopic;
}

import * as auth from "@/auth";

export async function signIn() {
    return await auth.signIn("github");
}

export async function signOut() {
    return await auth.signOut();
}

