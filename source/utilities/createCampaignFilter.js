export default ({ _id, sources } = {}) => {
	if (!_id) return {}
	return {
		$or: [
			{ campaign: _id },
			...(sources.map(source => ({ campaign: source._id }))),
			{ campaign: null },
		],
	}
}
