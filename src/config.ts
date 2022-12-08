/**
 * @naverwhale/installer
 * Copyright (c) 2022-present NAVER Corp.
 * MIT License
 */

import { Platform } from './types';

export const installUrls: Record<Platform, string> = {
    win: 'https://installer-whale.pstatic.net/downloads/installers/WhaleSetup.exe',
    win_32: 'https://installer-whale.pstatic.net/downloads/sa_installers/WhaleSetupX86.exe',
    win_64: 'https://installer-whale.pstatic.net/downloads/sa_installers/WhaleSetupX64.exe',
    win_arm:
        'https://installer-whale.pstatic.net/downloads/sa_installers/WhaleSetupARM64.exe',
    win_beta:
        'https://installer-whale.pstatic.net/downloads/beta/installers/WhaleSetupBeta.exe',
    mac: 'https://installer-whale.pstatic.net/downloads/installers/NaverWhale.dmg',
    mac_arm:
        'https://installer-whale.pstatic.net/downloads/installers/NaverWhaleARM64.dmg',
    linux: 'https://installer-whale.pstatic.net/downloads/installers/naver-whale-stable_amd64.deb',
    iphone: 'https://itunes.apple.com/app/id1374073304?mt=8',
    ipad: 'https://itunes.apple.com/app/id1374073304#?platform=ipad',
    android:
        'https://play.google.com/store/apps/details?id=com.naver.whale&referrer=utm_source%3Dwhale%2520home%26utm_medium%3Ddownload%26utm_campaign%3D',
};
