import {
    defineConfig, presetAttributify, presetIcons,
    presetTypography, presetUno, transformerAttributifyJsx
} from 'unocss'

export default defineConfig({
    theme: {},
    shortcuts: {},
    safelist: [],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.6,
            extraProperties: {'display': 'inline-block', 'vertical-align': 'middle'},
        }),
        presetTypography(),
    ],
    transformers: [
        transformerAttributifyJsx()
    ]
})
