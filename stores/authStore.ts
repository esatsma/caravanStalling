import { create } from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'
import {accountCreationFormValues} from "@/app/createAccount";
import AsyncStorage from "@react-native-async-storage/async-storage";
import pb from "@/service/pocketBase";

interface AuthState {
    currentUser?: unknown
    isAuthenticated: boolean
}

interface AuthStore extends AuthState {
    _hasHydrated: boolean
    _setHasHydrated: (value: boolean) => void
    login: (email: string, password: string) => Promise<unknown>
    logout: VoidFunction
    createAccount: ((values: accountCreationFormValues) => Promise<unknown>)
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            _hasHydrated: false,
            _setHasHydrated: (value: boolean) => set({ _hasHydrated: value }),

            currentUser: undefined,
            isAuthenticated: false,

            login: async (email: string, password: string) => {
                try {
                    const user = await pb.collection('users').authWithPassword(email, password)

                    if(pb.authStore.isValid)
                    set((state) => ({
                        currentUser: pb.authStore.record,
                        isAuthenticated: true
                    }))
                } catch (error) {
                    return error
                }
            },

            logout: () => {
                pb.authStore.clear()
                set((state) => ({
                    currentUser: undefined,
                    isAuthenticated: false
                }))
            },

            createAccount: async(values: accountCreationFormValues) => {
                    try {
                        const result = await pb.collection('users').create({email: values.email, password: values.password, passwordConfirm: values.passwordConfirm})
                        console.log(result)
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        ),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => AsyncStorage),
            onRehydrateStorage: () => (state) => state?._setHasHydrated(true),
            partialize: (state) => ({
                currentUser: state.currentUser,
                isAuthenticated: state.isAuthenticated
            })
        }
    )
)

export const useIsStoreHydrated = () => useAuthStore((state) => state._hasHydrated)
