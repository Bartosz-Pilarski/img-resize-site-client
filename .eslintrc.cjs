module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
      'semi': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'quotes': ['error', 'single'],
      'react/prop-types': 0,
      'eqeqeq': ['error', 'always']
    },
    'settings': {
      'react': {
        'version': 'detect'
      }
    }
}