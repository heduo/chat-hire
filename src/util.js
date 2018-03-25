export function getRedirectPath({type, avatar}) {
    // based on user info, get redirect path
    // base on type
    let url = (type === 'recruiter') ? '/recruiter': '/candidate';
    if (!avatar){
        url = url + 'info'
    }
    return url;
}

export function getChatId(userId, targetId){
    return [userId, targetId].sort().join('_');
}