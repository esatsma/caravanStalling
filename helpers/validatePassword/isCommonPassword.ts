import commonPasswords from "@/constants/commonPasswords";


export const isCommonPassword = (password: string): boolean =>
    commonPasswords.includes(password);
