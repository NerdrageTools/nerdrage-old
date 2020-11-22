/* eslint-disable max-len */
export const REGEX = {
	EMAIL_ADDRESS: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	PASSWORD: /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
	USERNAME: /^[a-z0-9_-]{3,}$/,
}

export const MESSAGES = {
	INVALID_EMAIL: 'Invalid email address',
	INVALID_PASSWORD: 'Password must be at least 8 characters long, with at least 1 uppercase, 1 lowercase, 1 number, and 1 special character.',
	INVALID_USERNAME: 'Invalid Username: only lowercase letters/numbers, _ and -',
}
/* eslint-enable max-len */
