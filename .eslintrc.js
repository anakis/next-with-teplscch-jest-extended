module.exports = {
	env: {
		jest: true,
	},
	extends: ['airbnb', 'airbnb-typescript', 'next/core-web-vitals', 'prettier'],
	plugins: ['prettier', 'prefer-arrow'],
	parser: '@typescript-eslint/parser',
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
	rules: {
		'prettier/prettier': 2,
		'prefer-arrow/prefer-arrow-functions': [
			2,
			{
				disallowPrototype: true,
				singleReturnOnly: true,
				classPropertiesAllowed: false
			}
		],
		'prefer-arrow-callback': [
			2,
			{
				allowNamedFunctions: false
			}
		],
		'func-style': ['error', 'expression', { allowArrowFunctions: true }],
		'no-unused-vars': [
			2,
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
			},
		],
		'import/prefer-default-export': 'off',
		'react/function-component-definition': [
			2,
			{
				namedComponents: 'arrow-function'
			}
		],
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.tsx'],
			},
		],
		'react/jsx-props-no-spreading': [
			2,
			{
				custom: 'ignore',
			},
		],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/*.test.ts',
					'**/*.test.tsx',
					'**/*.spec.ts',
					'**/*.spec.tsx',
				],
			},
		],
	},
};
