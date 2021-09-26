module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            zIndex: {
                '-10': '-10',
                '-20': '-20',
                '-30': '-30',
                '-40': '-40',
                '-50': '-50',
            },
        },
    },
    variants: {
        extend: {},
        scale: ['hover', 'group-hover'],
        translate: ['hover', 'group-hover'],
        border: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'group-focus'],
        backgroundColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'group-focus'],
        boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'group-focus'],
        opacity: ['disabled'],
    },
    plugins: [],
}
