"use server";

import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import * as authAll from "@/auth";
import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";

const createTopicSchema = z.object({
    name: z.string().min(3).regex(/^[a-z-]+$/, { message: "Must be lowercase letters or dashes." }),
    description: z.string().min(10),
});

interface CreateTopicFormState {
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[];
    }
}

export async function createComment() {
    const { createComment : _createComment } = await import("./create-comment");
    return _createComment;
}

export async function createPost() {
    const { createPost : _createPost } = await import("./create-post");
    return _createPost;
}

export async function createTopic(formState: CreateTopicFormState, formData: FormData) : Promise<CreateTopicFormState> {
    //revalidate the homepage
    const name = formData.get("name");
    const description = formData.get("description");

    const result = createTopicSchema.safeParse({
        name,
        description
    });

    const session = await auth();

    if (!session || !session.user) {
        return {
            errors: {
                _form: ["You must be signed in to do this."]
            }
        };
    }

    let topic: Topic;
    try {
        topic = await db.topic.create({
            data: {
                slug: result.data!.name,
                description: result.data!.description
            }
        })

    } catch(err: unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: {
                    _form: ["Something went wrong"]
                }
            }
        }

    }

    revalidatePath("/");
    redirect(paths.topicShow(topic.slug));
}

export async function signIn() {
    return await authAll.signIn("github");
}

export async function signOut() {
    return await authAll.signOut();
}