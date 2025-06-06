export const validateEmail = (email: string) => {
    // Check if input is null or undefined
    if (!email) {
        return false;
    }

    // Regular expression pattern for email validation
    // Specifically prevents consecutive dots in username
    const emailRegex = /^(?!.*\.\.)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    // Return true if the email matches the pattern, false otherwise
    return emailRegex.test(String(email));
}
