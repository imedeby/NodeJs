getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos, levelNumber) => {
        getBrunch(repos[levelNumber], (brunch) => {
            if (brunch == "master")
                postCommit(newVersion, (committed) => {
                    if (committed)
                        console.log("The new version is committed");
                    else
                        console.log("The new version is not committed");
                })
        })
    })
});

//
// Part 1
//

getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos, levelNumber) => {
        getBrunch(repos[levelNumber], brunch => postCommit(newVersion,
            committed => console.log("the new version is" + committed)))
    })
});
function getBrunch(r, callback1) {
    if (brunch == "master")
        callback1();
}
function postCommit(n, callback) {
    if (committed) {
        let data = "commited";
        callback(data);
    } else {
        let data = "not commited";
        callback(data);
    }

}

//
// Part 2
//
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos, levelNumber) => {
        return new Promise((resolve, reject) => {
            resolve(getBrunch(repos[levelNumber], (brunch) => {
                if (brunch == "master")
                    postCommit(newVersion, committed => console.log("the new version is" + committed));
            }))
        })

    })
});

function postCommit(n, callback) {
    return new Promise((resolve, reject) => {
        if (committed) {
            resolve(callback(data));
        } else {
            let data = "not commited";
            resolve(callback(data));
        }
    });


}

//
// Part 3
//
async function getUser(n, user) {
    let next = await getBrunch(repos[levelNumber], postCommit)
    next = await callback()

}
getUser(1, (user) => {
    getRepositories(user.gitHubUsername, (repos, levelNumber) => {
        getBrunch(repos[levelNumber], brunch => postCommit(newVersion,
            committed => console.log("the new version is" + committed)))
    })
});
function getBrunch(r, callback1) {
    if (brunch == "master")
        callback1();
}
function postCommit(n, callback) {
    if (committed) {
        let data = "commited";
        callback(data);
    } else {
        let data = "not commited";
        callback(data);
    }

}
getUser(1, user);
