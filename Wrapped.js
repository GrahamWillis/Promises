/**
 * Created by graham on 13/01/17.
 */

module.exports = {};

function deleteSession() {
    return new Promise(
        function (resolve, reject) {
            console.log('Delete session...');
            resolve(5);
        });
};

function createSession() {
    return new Promise(
        function (resolve, reject) {
            console.log('Create Session...');
            resolve('erfaw');
        });
};

function newSession() {
    return new Promise(
        function (resolve, reject) {
            console.log('New Session');
            deleteSession()
                .then(createSession)
                .then(resolve)
                .catch(reject);
        });
};

function test4() {
    newSession().then(() => console.log('done')).catch(err => { console.log('Error: ' + err) });
};

test4();



