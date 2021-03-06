var group__lpi2c__hal =
[
    [ "lpi2c_status_t", "group__lpi2c__hal.html#ga357df7aad388d8654e37d70b6b1d22e9", [
      [ "kStatus_LPI2C_Success", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9a5e20c12247d3113797b09083352c3774", null ],
      [ "kStatus_LPI2C_Initialized", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9aba35852482116b07367fc0e733166a5c", null ],
      [ "kStatus_LPI2C_Fail", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9aeefd1f493b587c84459067f95d702428", null ],
      [ "kStatus_LPI2C_Busy", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9af52a270e301641b8855edf3fcc843814", null ],
      [ "kStatus_LPI2C_Timeout", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9a002394fe77437f41ea82506d69646d66", null ],
      [ "kStatus_LPI2C_ReceivedNak", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9a60f3894d79270ea5b8866a352fa1e9dd", null ],
      [ "kStatus_LPI2C_SlaveTxUnderrun", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9aaea41b67018a05347025dc595e4e493b", null ],
      [ "kStatus_LPI2C_SlaveRxOverrun", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9ad1401a29442667c905785364d83d3ded", null ],
      [ "kStatus_LPI2C_AribtrationLost", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9abfda256b2c5b1c1deab61aa6126a335a", null ],
      [ "kStatus_LPI2C_StopSignalFail", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9a9996319fece7b4b87d00dc6231cb3d7a", null ],
      [ "kStatus_LPI2C_Idle", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9a6603ec1135f58532c9d4accc3661bc27", null ],
      [ "kStatus_LPI2C_NoReceiveInProgress", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9af8c3bad92e0f44bd94fed47080432266", null ],
      [ "kStatus_LPI2C_NoSendInProgress", "group__lpi2c__hal.html#gga357df7aad388d8654e37d70b6b1d22e9afe8f03578bfdf031604c1b051929f183", null ]
    ] ],
    [ "lpi2c_master_status_t", "group__lpi2c__hal.html#ga2e531225e833f98b0fb7a3d41edf3392", null ],
    [ "lpi2c_master_interrupt_t", "group__lpi2c__hal.html#ga333242bce279953b792fc7a90cc6da34", null ],
    [ "lpi2c_slave_status_t", "group__lpi2c__hal.html#ga07202aca0d005d54b2cefdb37f95c5c0", null ],
    [ "lpi2c_slave_interrupt_t", "group__lpi2c__hal.html#gaecf42251eb532a806ce080d2f0fe15ae", null ],
    [ "lpi2c_direction_t", "group__lpi2c__hal.html#gaf7540e799ad5eb17c678b39ea1ace80c", [
      [ "kLPI2CWrite", "group__lpi2c__hal.html#ggaf7540e799ad5eb17c678b39ea1ace80ca2ba647d36b965eb7fb9e716fe338675e", null ]
    ] ],
    [ "LPI2C_HAL_Init", "group__lpi2c__hal.html#ga7eee4ff6b1865b4ca33443c0fb8c33b8", null ],
    [ "LPI2C_HAL_SetMasterCmd", "group__lpi2c__hal.html#ga3ff95e4ab5ef22901a045ddb58323953", null ],
    [ "LPI2C_HAL_SetSlaveCmd", "group__lpi2c__hal.html#ga86721ad8b060e815513f70ed66b0ee71", null ],
    [ "LPI2C_HAL_MasterGetStatus", "group__lpi2c__hal.html#ga85d1cccfa6701dc2b1797ed797321616", null ],
    [ "LPI2C_HAL_MasterClearStatus", "group__lpi2c__hal.html#ga0c030ff66af883ebecf9cba385fdbce4", null ],
    [ "LPI2C_HAL_SlaveGetStatus", "group__lpi2c__hal.html#ga309403f7b72118a33b5faa70a0c82949", null ],
    [ "LPI2C_HAL_SlaveClearStatus", "group__lpi2c__hal.html#ga146721edf58acca0fe618cdb60e8a044", null ],
    [ "LPI2C_HAL_MasterSetIntCmd", "group__lpi2c__hal.html#ga9f4dc7e4bdb7ea350d4f2b4522c06d00", null ],
    [ "LPI2C_HAL_MasterGetIntCmd", "group__lpi2c__hal.html#ga5126bf4324b8a48947e566494377b6dc", null ],
    [ "LPI2C_HAL_SlaveSetIntCmd", "group__lpi2c__hal.html#ga954f56b21205ff293ad0c93ff77d864f", null ],
    [ "LPI2C_HAL_SlaveGetIntCmd", "group__lpi2c__hal.html#ga57c717b52b6c800a3d5cc3b4d0dbff22", null ],
    [ "LPI2C_HAL_SetBaudRate", "group__lpi2c__hal.html#gae47dfe4085e15ab27ccd1e5609e9e2a2", null ],
    [ "LPI2C_HAL_SendStart", "group__lpi2c__hal.html#ga11d8009e8841b7fb31ef70ee1253ff74", null ],
    [ "LPI2C_HAL_SendStop", "group__lpi2c__hal.html#ga47370b16d623b7215bfb5ada8a912584", null ],
    [ "LPI2C_HAL_SlaveSendAck", "group__lpi2c__hal.html#gac904dd156a324b4c19e8649b1ef880e1", null ],
    [ "LPI2C_HAL_SlaveSendNak", "group__lpi2c__hal.html#ga2f7c7ecbb05162d5195797a85683dffa", null ],
    [ "LPI2C_HAL_MasterSetRxMode", "group__lpi2c__hal.html#ga2847677834662a7bf83921c65172413d", null ],
    [ "LPI2C_HAL_SetAddress7bit", "group__lpi2c__hal.html#gad67794ad28104ffddc08bd9617678764", null ],
    [ "LPI2C_HAL_SetAddress10bit", "group__lpi2c__hal.html#gab3d05465e587e3ad9e3a4bcb36b0e2bd", null ],
    [ "LPI2C_HAL_MasterReadByte", "group__lpi2c__hal.html#ga5396295910016258a2bf00af7391e5d7", null ],
    [ "LPI2C_HAL_MasterWriteByte", "group__lpi2c__hal.html#ga3a0318a8c095f55e0fffd1e6e917485b", null ],
    [ "LPI2C_HAL_SlaveReadByte", "group__lpi2c__hal.html#gaf802e0589a06527c83545366778143aa", null ],
    [ "LPI2C_HAL_SlaveWriteByte", "group__lpi2c__hal.html#gaaf835f7f258dba5344bc8fdc9a987f7e", null ],
    [ "LPI2C_HAL_SlaveWriteByteBlocking", "group__lpi2c__hal.html#gaba92be07d6ab1bd049495d2cb826a93f", null ],
    [ "LPI2C_HAL_MasterReadByteBlocking", "group__lpi2c__hal.html#ga5b9e27968ed095ccdb837c4fb5eb1839", null ],
    [ "LPI2C_HAL_MasterWriteByteBlocking", "group__lpi2c__hal.html#ga6703954a1db535c69e5fc0e71d294188", null ],
    [ "LPI2C_HAL_MasterReceiveDataPolling", "group__lpi2c__hal.html#gac241e44a71b9d47f44cc300c378e6b62", null ],
    [ "LPI2C_HAL_MasterSendDataPolling", "group__lpi2c__hal.html#ga8026108e3a6889275b0ce98b1ae03682", null ],
    [ "LPI2C_HAL_SlaveSendDataPolling", "group__lpi2c__hal.html#gab4f3954cf65b7132bcf381f8fdc2afb2", null ],
    [ "LPI2C_HAL_SlaveReceiveDataPolling", "group__lpi2c__hal.html#ga0855b21d31b6e1feaa6fc632b99ddb12", null ]
];