const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

module.exports = {
  packagerConfig: {
    asar: true,
    icon: "./src/icon/favicon.ico",
    win32metadata: {
      OriginalFilename: "horacerta.exe",
      ProductName: "Hora Certa"
    }
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'HoraCerta',
        iconUrl: "https://raw.githubusercontent.com/IgorSilva-S/HoraCerta/refs/heads/main/src/icon/favicon.ico",
        setupIcon: "./src/icon/setup/favicon.ico",
        setupExe: 'Instalador Hora Certa (2.0).exe',
        loadingGif: './src/images/loading.gif',
        appId: "com.horacerta.widget",
        productName: "Hora Certa",
        win: {
          icon: "./src/icon/favicon.ico"
        }
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'IgorSilva-S',
          name: 'Hora Certa'
        },
        prerelease: false
      }
    }
  ]
};