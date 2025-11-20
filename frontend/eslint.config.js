import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			"no-unexpected-multiline": "error",
			"quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
			"keyword-spacing": ["error", { "before": true, "after": true }],
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-extra-semi": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"react-hooks/exhaustive-deps": "off",
			"max-len": ["error", {
				code: 160,                    // Максимальная длина строки кода
				comments: 80,                 // Максимальная длина комментариев
				tabWidth: 4,                  // Ширина таба (для расчета)
				ignoreUrls: true,             // Игнорировать URL
				ignoreStrings: true,          // Игнорировать строковые литералы
				ignoreTemplateLiterals: true, // Игнорировать шаблонные строки
				ignoreRegExpLiterals: true,   // Игнорировать регулярные выражения
				ignoreTrailingComments: true, // Игнорировать комментарии в конце строк
			}],
			"indent": ["error", 4, {
				FunctionDeclaration: {
					parameters: "first"  // Параметры функции выравниваются с первым
				},
				FunctionExpression: {
					parameters: "first"
				},
				CallExpression: {
					arguments: "first"   // Аргументы вызова выравниваются с первым
				}
			}]
		}
	},
])
