module.exports = {
    // jit: true,
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': "#4B3B69",
                'secondary': "#361B69",
                'terciary': "#A884EC",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        },
    },
    plugins: [],
}
