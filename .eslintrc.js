module.exports = {
	env: {
		jest: true,
	},
	extends: ['airbnb', 'airbnb-typescript', 'next/core-web-vitals', 'prettier'],
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
		'no-unused-vars': [
			2,
			{
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
			},
		],
		'import/prefer-default-export': 'off',
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
