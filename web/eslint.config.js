import aeriaUi from 'eslint-config-aeriaui'
import readableTailwind from 'eslint-plugin-readable-tailwind'
import parserVue from 'vue-eslint-parser'

export default [].concat(
  aeriaUi,
  [
    {
      languageOptions: {
        parser: parserVue
      },
      plugins: {
        'readable-tailwind': readableTailwind
      },
      rules: {
        ...readableTailwind.configs.warning.rules,
        ...readableTailwind.configs.error.rules,
        'readable-tailwind/multiline': ['error', {
          classesPerLine: 1
        }]
      }
    }
  ]
)
