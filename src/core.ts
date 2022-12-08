import { Installer } from './types';
import { installUrls } from './config';

export const installer: Installer = {
    _currentPlatform: undefined,
    getCurrentPlatform(this: Installer) {
        if (this._currentPlatform) return this._currentPlatform;
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.includes('beta')) {
            this._currentPlatform = 'win_beta';
        } else if (userAgent.includes('winarm')) {
            this._currentPlatform = 'win_arm';
        } else if (userAgent.includes('win64')) {
            this._currentPlatform = 'win_64';
        } else if (userAgent.includes('win32')) {
            this._currentPlatform = 'win_32';
        } else if (userAgent.includes('win')) {
            this._currentPlatform = 'win';
        } else if (userAgent.includes('macm1')) {
            this._currentPlatform = 'mac_arm';
        } else if (userAgent.includes('mac')) {
            this._currentPlatform = 'mac';
        } else if (userAgent.includes('linux')) {
            this._currentPlatform = 'linux';
        } else if (userAgent.includes('android')) {
            this._currentPlatform = 'android';
        } else if (userAgent.includes('ipad')) {
            this._currentPlatform = 'ipad';
        } else if (userAgent.includes('iphone')) {
            this._currentPlatform = 'iphone';
        } else {
            throw new Error(
                `[@naverwhale/installer] can not detect current environment. but you can pass the parameter as a workaround.`
            );
        }
        return this._currentPlatform;
    },
    install(this: Installer, platform) {
        const installUrl = this.getInstallURL(platform);
        window.open(installUrl);
    },
    getInstallURL(this: Installer, platform) {
        if (
            platform &&
            !Object.prototype.hasOwnProperty.call(installUrls, platform)
        ) {
            const availablePlatform = Object.keys(installUrls).join(', ');
            throw new Error(
                `[@naverwhale/installer] unknown platform parameter. the parameter value must be one of [${availablePlatform}]`
            );
        }
        const _platform = platform ?? this.getCurrentPlatform();
        return installUrls[_platform];
    },
};
