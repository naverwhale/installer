export interface Installer {
    _currentPlatform: Platform | undefined;
    getCurrentPlatform: () => Platform;
    install: (platform?: Platform) => void;
    getInstallURL: (platform?: Platform) => string;
}

export type Platform =
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
