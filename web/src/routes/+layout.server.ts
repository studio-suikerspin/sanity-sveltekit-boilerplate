export const load = ({ locals: { sanity } }) => {
	const { previewEnabled } = sanity;
	return { previewEnabled };
};
