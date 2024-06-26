const sessionIdToUserMap = new Map();

function setUser(id, user){
    sessionIdToUserMap.set(id, user);
    console.log(sessionIdToUserMap)
}

function getUser(id){
    return sessionIdToUserMap.get(id);
}

module.exports = {
    setUser,
    getUser
}