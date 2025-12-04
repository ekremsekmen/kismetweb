/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type enum
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Yeni özellik
        'fix',      // Bug düzeltme
        'docs',     // Sadece dokümantasyon
        'style',    // Kod formatı (boşluk, noktalı virgül vb.)
        'refactor', // Yeniden yapılandırma
        'perf',     // Performans iyileştirmesi
        'test',     // Test ekleme/düzeltme
        'build',    // Build sistemi değişiklikleri
        'ci',       // CI yapılandırması
        'chore',    // Genel bakım işleri
        'revert',   // Geri alma
        'wip',      // Work in progress
      ],
    ],
    // Subject case
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    // Subject max length
    'subject-max-length': [2, 'always', 100],
    // Body max line length
    'body-max-line-length': [2, 'always', 200],
  },
  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
}

export default config
