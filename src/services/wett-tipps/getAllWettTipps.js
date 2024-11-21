const requireMarkdown = require.context('.', false, /\.md$/);

const getAllWettTipps = () => {
    return requireMarkdown.keys().map((filename) => {
        return {
            filename,
            content: requireMarkdown(filename),
        };
    });
};

export default getAllWettTipps;