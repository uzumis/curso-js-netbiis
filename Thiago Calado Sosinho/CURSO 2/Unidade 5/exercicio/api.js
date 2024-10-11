const ENDPOINT = 'https://api.github.com/users';
export async  function getPosts(user) {
    const response = await fetch(ENDPOINT+"/"+user);
    console.log("Requisição para " + response.url + "retornou status" + response.status);
    const data = await response.json();
    return data;
}

export async  function getPostsById(id) {
    const response = await fetch(ENDPOINT + "/" + id);
    console.log("Requisição para " + response.url + "retornou status" + response.status);
    const data = await response.json();
    return data;

}

export async  function getCommentsByPost(postId) {
    const req = new URL(ENDPOINT);
    req.searchParams.append('postId', postId);

    // url.search = new URLSearchParams({
    //     postId: postId
    // })

    const response = await fetch(req, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log("Requisição para " + response.url + "retornou status" + response.status);
    const data = await response.json();
    return data;
}

export async  function createPost(post) {
    const body = {
        userId: post.userId,
        title: post.title,
        body: post.body
    }
    const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("Requisição para " + response.url + "retornou status" + response.status);
    const data = await response.json();
    return data;
}



export async  function updatePost(post) {
    const body = {
        userId: post.userId,
        title: post.title,
        body: post.body
    }
    const response = await fetch(ENDPOINT +"/"+ post.id, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("Requisição para " + response.url + "retornou status" + response.status);
    const data = await response.json();
    return data;
}

export async  function updatePostTitle(id, title) {
    const body = {
        title: title,
    }
    const response = await fetch(ENDPOINT +"/"+id, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("Requisição para " + response.url + "retornou status" + response.status);
    const data = await response.json();
    return data;
}


export async  function deletePost(id){
    const response = await fetch(ENDPOINT+"/"+id, {
        method: 'DELETE',
        });
        console.log("Requisição para " + response.url + "retornou status" + response.status);
        return (response.status == 200);
}

// getPosts().then(posts => {
//     console.log(posts);
// });

// getPostsById(1).then(post => {
//     console.log(post);
// });

// getCommentsByPost(1).then(post => {
//     console.log(post);
// })

// createPost({
//     title: 'foo',
//     body: 'bar',
//     userId: '1'
// }).then(post => {
//     console.log(post);
// })

// updatePost({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1
// }).then(post => {
//     console.log(post)
// });
// updatePostTitle(1, 'foo').then(post => {
//     console.log(post);
// })

// deletePost(1).then(success=>{
//     console.log(success);
// })