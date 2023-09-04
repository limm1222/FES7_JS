// Callback Hell example

class UserStorage {
    loginUser(id, password, onSucces, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSucces(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSucces, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSucces({name: 'ellie', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

// 1: 사용자로부터 id와 password 입력 받기
// 2: 로그인하기
// 3: 로그인이 성공된다면 로그인한 사용자의 id를 이용해서 roles 요청하기
// 4. roles가 성공적으로 받아진다면 오브젝트를 출력하기

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password, (user) => {
    userStorage.getRoles(user, userWithRole =>{
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
    }, error => {
        console.log(error);
    })
}, (error) => {
    console.log(error);
})
