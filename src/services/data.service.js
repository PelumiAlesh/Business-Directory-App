// import {directoryMock} from './directoryMock';
// this section aims to mimick a server

// variables here are private
/** demo data for initialization*/
const initializedData = {
    user: [{
        id: 1,
        fname: 'pelumi',
        lname: 'pelumi',
        email: ' admin@email.com',
        password: '@Password123',
        is_admin: true
    }],
    directory: [{
        id: 1,
        title: 'Google',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        email: 'google@google.com',
        website: 'www.google.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 2,
        title: 'Facebook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        email: 'google@google.com',
        website: 'www.google.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 3,
        title: 'Badee',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        email: 'badee@google.com',
        website: 'www.abe.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 4,
        title: 'ABC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        email: 'abc@google.com',
        website: 'www.abc.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 5,
        title: 'Coaster Biscuit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        email: 'coaster@google.com',
        website: 'www.Dale.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 6,
        title: 'Tesla',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        email: 'tesla@google.com',
        website: 'www.tesla.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 7,
        title: 'Moaka Foam',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        website: 'www.bed.com',
        email: 'fbc@google.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 8,
        title: 'Tomtom',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        website: 'www.tomtom.com',
        email: 'fbc@google.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 9,
        title: 'Barcelona',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        email: 'fbc@google.com',
        website: 'www.barca.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 10,
        title: 'Gokada',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        website: 'www.bike.com',
        email: 'fbc@google.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 11,
        title: 'Opay',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        email: 'opay@google.com',
        website: 'www.opay.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    },
    {
        id: 12,
        title: 'Random',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        email: 'random@google.com',
        website: 'www.random.com',
        imgUrl: 'https://placeimg.com/260/260/any',
        phone: 234098234380842,
        categories: [1],
    }],
    category: [{
        id: 1,
        title: 'web'
    }]

}

const key = 'businessdir_db'


/**
 * @param {boolean} reInit - re initialize the database
 *  initializes data, checks if theres data persistent in the localstorage*/
const init = (reInit) => {
    const db = localStorage.getItem(key);
    // if theres nothing in localstorage, create a demo data || if you want to forcefully reinitialize
    if (!db || reInit) {
        const initData = {
            categories: initializedData.category,
            users: initializedData.user,
            directories: initializedData.directory,
        }
        localStorage.setItem(key, JSON.stringify(initData))

    }
}
/** Gets data from local storage */
// function is private, cannot be called outside this file
const getData = () => JSON.parse(localStorage.getItem(key));
/** sets data to local storage */
// function is private, cannot be called outside this file
const setData = (type, index, data) => {

    const lsData = getData();
    // edit the data
    lsData[type][index] = data;

    // save to local storage
    localStorage.setItem(key, JSON.stringify(lsData));
};
const createBusiness = (data) => {
    const oldData = getData();
    const newData = {
        id: oldData.directories.length + 1,
        title: data.name,
        des: data.description,
        email: data.email,
        website: data.webUrl,
        imgUrl: data.imageUrl,
        phone: data.phone,
    }
    oldData.directories.push(newData);
    localStorage.setItem(key, JSON.stringify(oldData))
    console.log(oldData);
}

/**************************************** get  all items */
/** Gets all user data */
const getUsers = () => getData().users;

/** Gets all directory data */
const getDirs = () => getData().directories;
/** Gets all category data */
const getCats = () => getData().categories;

/**************************************** get  single item */
/** Gets single user data */
const getUser = (email) => {
    const collections = getData().users;
    console.log('collections', collections)
    for (let i = 0; i < collections.length; i++) {

        const collection = collections[i];
        if (collection.email === email) {
            return collection;
        }
    }
}
/** Gets single directory data */
const getDir = (id) => {
    const collections = getData().directories;
    for (let i = 0; i < collections.length; i++) {
        const collection = collections[i];
        if (collection.id === id) {
            return collection;
        }

    }

}
/** Gets single category data */
const getCat = (id) => {
    const collections = getData().categories;
    for (let i = 0; i < collections.length; i++) {
        const collection = collections[i];
        if (collection.id === id) {
            return collection;
        }

    }

}

/**************************************** edit  single item */
/** edit single user data */
const editUser = (id, data) => {
    const dbName = 'users';
    const collections = getData().users;
    let collection;
    let _i;
    for (let i = 0; i < collections.length; i++) {
        const _collection = collections[i];
        if (collection.id === id) {
            collection = _collection;
            _i = i;
            break;
        }

    }
    // get data keys and values
    const keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
        const eachKey = keys[i];
        collection[eachKey] = data[eachKey]

    }
    setData(dbName, _i,collection);

}
/** edit single directory data */
const editDir = (id, data) => {
    const dbName = 'directories';
    const collections = getData().directories;
    let collection;
    let _i;
    for (let i = 0; i < collections.length; i++) {
        const _collection = collections[i];
        if (_collection.id === id) {
            collection = _collection;
            _i = i;
            break;
        }

    }
    // get data keys and values
    const keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
        const eachKey = keys[i];
        collection[eachKey] = data[eachKey]

    }
    setData(dbName, _i, collection);

}
/** edit single category data */
const editCat = (id, data) => {
    const dbName = 'categories';
    const collections = getData().categories;
    let collection;
    let _i;
    for (let i = 0; i < collections.length; i++) {
        const _collection = collections[i];
        if (collection.id === id) {
            collection = _collection;
            _i = i;
            break;
        }

    }
    // get data keys and values
    const keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
        const eachKey = keys[i];
        collection[eachKey] = data[eachKey]

    }
    setData(dbName, _i, collection);

}

module.exports.server = { init, getDirs, getUsers, getCats, getDir, getUser, getCat, editDir, editUser, editCat }



// this section aims to mimick an authentication


// variables here are private
/** demo data for initialization*/

const auth_key = 'businessdir_auth'


const isLoggedIn = () => localStorage.getItem(auth_key) ? localStorage.getItem(auth_key) : false;

const loggedInData = () => {   
    const email = isLoggedIn();
    if(!email) {
        return false
    }

    return getUser(email)

}
const register = (data) => {
    const oldData = getData();
    console.log(oldData.users.length)
    const newData = {
        id: oldData.users.length + 1,
        fname: data.firstName,
        lname: data.lastName,
        email: data.email,
        password: data.password,
        is_admin: true
    }
    oldData.users.push(newData);
    localStorage.setItem(key, JSON.stringify(oldData))
    console.log(oldData);
}
const login = (email, password) => {   

    if (getUser(email) && getUser(email).password === password) {
        const user = getUser(email);
        const _token = user.email;
        localStorage.setItem(auth_key, _token)
        return true;
    }
    return false
}
const logout = (email, password) => {   
    localStorage.removeItem(auth_key)
}


module.exports.data = { getData, getCats, getDirs, createBusiness, editDir }
module.exports.auth = { login, register, isLoggedIn, loggedInData, logout }