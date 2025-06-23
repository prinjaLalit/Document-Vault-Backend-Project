import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const zustandUserIDStore = create(
    persist(
        (set)=> ({
            userID: null,
            setUserID: (uid)=> set({userID: uid}), //GlobalState Modification happens only when SET method is called
            logout: ()=> set({userID: null})
        }),
        {
            name: 'docvault-userid', //This is the name of the Key present in Browser Local Storage in which our uid is stored globally
        }
    )
);

export const zustandKeyObjectStore = create((set)=> ({
    cryptoKey: null,
    setCryptoKey: (key)=> set({cryptoKey: key})
}));



export const zustandLoginStateStore = create(
    persist(
        (set)=> ({
            loginState: null,
            setZustandLoginState: (login_state)=> set({loginState: login_state}), //GlobalState Modification happens only when SET method is called
        }),
        {
            name: 'login_state', //This is the name of the Key present in Browser Local Storage in which our uid is stored globally
        }
    )
);






