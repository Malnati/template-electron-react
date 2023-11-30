module.exports = {
  packagerConfig: {
    asar: true,
    icon: './src/images/background.icns',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'template-electron-react',
        authors: 'Malnati',
        exe: 'template-electron-react.exe',
        setupIcon: './src/images/background.ico',
        loadingGif: './src/images/background.gif'
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'win32', 'linux'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          maintainer: 'Malnati',
          homepage: 'https://github.com/Malnati/template-electron-react',
          icon: './src/images/background.png'
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          maintainer: 'Malnati',
          homepage: 'https://github.com/Malnati/template-electron-react',
          icon: './src/images/background.png'
        }
      },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'Malnati',
          name: 'template-electron-react'
        },
        prerelease: true
      }
    }
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/pages/index.html',
              js: './src/pages/index.js',
              name: 'main_window',
              preload: {
                js: './src/preload.js',
              },
            },
          ],
        },
      },
    },
  ],
};
