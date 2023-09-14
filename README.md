# @naverwhale/installer

Naver Whale installler for web application.

## Installation

```shell
npm i @naverwhale/installer
```

## Usage

```tsx
import installer from '@naverwhale/installer';

// Install the Whale browser for the current environment.
installer.install();

// Get installation url for the current environment.
installer.getInstallURL();
```

## API

### install

Install the Whale browser. You can specify the environment to install with parameter, if not, it will be set as the current environment.

```tsx
// current environment.
installer.install();
// or window
installer.install('win');
```

### getInstallURL

Returns the Whale browser install url. You can specify the environment to install with parameter, if not, it will be set as the current environment.

```tsx
// current environment.
installer.getInstallURL();
// or window
installer.getInstallURL('win');
```

## Types

```tsx
interface Installer {
    install: (platform?: Platform) => void;
    getInstallURL: (platform?: Platform) => string;
}

type Platform =
    | 'win'
    | 'win_32'
    | 'win_64'
    | 'win_arm'
    | 'win_beta'
    | 'mac'
    | 'mac_arm'
    | 'linux'
    | 'iphone'
    | 'ipad'
    | 'android';
```
