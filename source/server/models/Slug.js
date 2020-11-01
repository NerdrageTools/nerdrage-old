export const Slug = {
	match: [/^[a-z0-9_-]{1,}$/, 'Invalid Slug: only lowercase letters/numbers, _ and -'],
	trim: true,
	type: String,
}
