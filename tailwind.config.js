module.exports = {
    // jit: true,
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': "#2A1C33",
                'secondary': "#231540",
                'terciary': "#4703A6",
                'quaternary': "#7404BF",
                'quinary': "#9900ff",
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
