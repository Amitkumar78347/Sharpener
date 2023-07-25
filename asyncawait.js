// Function to create a post (returns a Promise)
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

// Function to update the last user activity time (returns a Promise)
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const currentTime = new Date().toISOString();
            resolve(currentTime);
        }, 1000);
    });
}

// Function to delete the last post (returns a Promise)
function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts available to delete.");
            }
        }, 1000);
    });
}

// Function to log all the posts and lastActivityTime of the user
function logPostsAndLastActivityTime(posts, lastActivityTime) {
    console.log("Posts created:");
    console.log(posts);
    console.log("Last activity time:", lastActivityTime);
}

// Sample posts array
const posts = [];

// Usage example using async/await
async function main() {
    try {
        const post = await createPost({ title: "Post 1" });
        const lastActivityTime = await updateLastUserActivityTime();

        logPostsAndLastActivityTime(posts, lastActivityTime);

        const deletedPost = await deleteLastPost();
        console.log("Post successfully deleted:", deletedPost);
        console.log("New set of Posts:", posts);
    } catch (error) {
        console.log(error);
    }
}

main();
