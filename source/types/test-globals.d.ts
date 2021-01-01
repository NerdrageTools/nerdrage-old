declare namespace NodeJS {
	interface Global {
		fixtures: {
			articles: Record<string, any>,
			campaigns: Record<string, any>,
			users: Record<string, any>,
		},
	}
}
