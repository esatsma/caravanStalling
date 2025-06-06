import { isCommonPassword } from './isCommonPassword';

export const passwordError = {
    Invalid: 'invalid',
    TooShort: 'tooShort',
    NoLetter: 'noLetter',
    NoNumber: 'noNumber',
    CommonPassword: 'commonPassword',
} as const;

const REGEX = {
    specialChar: /[^A-Za-z0-9]/,
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    number: /[0-9]/,
    repeatChar: /(\w)(\1+\1+\1+\1+)/,
    letter: /[a-zA-Z]/,
} as const;

const LENGTH_THRESHOLDS = {
    minimum: 5,
    good: 8,
    better: 12,
    best: 20,
} as const;

export type PasswordError = (typeof passwordError)[keyof typeof passwordError];

interface PasswordValidationResult {
    score: number;
    hasMinimumLength: boolean;
    hasLetter: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
    passwordError?: PasswordError;
}

const validateNewPassword = (password: string): PasswordValidationResult => {
    let score = 0;

    let length = 0;
    let specialChar = 0;
    let caseMix = 0;
    let numCharMix = 0;

    const hasSpecialChar = REGEX.specialChar.test(password);
    const hasLowerCase = REGEX.lowercase.test(password);
    const hasUpperCase = REGEX.uppercase.test(password);
    const hasNumber = REGEX.number.test(password);
    const hasRepeatChars = REGEX.repeatChar.test(password);
    const hasLetter = REGEX.letter.test(password);

    if (
        password.length < LENGTH_THRESHOLDS.minimum ||
        isCommonPassword(password)
    ) {
        const isCommon = isCommonPassword(password);

        let error: PasswordError;
        if (isCommon) {
            error = passwordError.CommonPassword;
        } else if (password.length === 0) {
            error = passwordError.Invalid;
        } else {
            error = passwordError.TooShort;
        }

        return {
            score: 0,
            hasMinimumLength: password.length > 7,
            hasLetter: hasLetter,
            hasNumber: hasNumber,
            hasSymbol: hasSpecialChar,
            passwordError: error,
        };
    }

    if ((hasLowerCase || hasUpperCase) && hasNumber) {
        numCharMix = 1;
    }

    if (hasUpperCase && hasLowerCase) {
        caseMix = 1;
    }

    if ((hasLowerCase || hasUpperCase || hasNumber) && hasSpecialChar) {
        specialChar = 1;
    }

    if (password.length > LENGTH_THRESHOLDS.good) {
        length = 1;
    }

    if (password.length > LENGTH_THRESHOLDS.better && !hasRepeatChars) {
        length = 2;
    }

    if (password.length > LENGTH_THRESHOLDS.best && !hasRepeatChars) {
        length = 3;
    }

    score = Math.min(length + specialChar + caseMix + numCharMix, 4);

    let error: PasswordError | undefined;

    if (password.length < 7) {
        error = passwordError.TooShort;
    }

    if (!hasLetter) {
        error = passwordError.NoLetter;
    }

    if (!hasNumber) {
        error = passwordError.NoNumber;
    }

    return {
        score: score,
        hasMinimumLength: password.length > 7,
        hasLetter,
        hasNumber,
        hasSymbol: hasSpecialChar,
        passwordError: error,
    };
};

export default validateNewPassword;
